const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const assert = require('node:assert/strict');

function findPlaywrightModule() {
  if (process.env.PLAYWRIGHT_MODULE_PATH && fs.existsSync(process.env.PLAYWRIGHT_MODULE_PATH)) {
    return process.env.PLAYWRIGHT_MODULE_PATH;
  }

  const npxCacheDir = path.join(os.homedir(), 'AppData', 'Local', 'npm-cache', '_npx');
  if (!fs.existsSync(npxCacheDir)) {
    throw new Error(`No se encontró la caché de npx en ${npxCacheDir}.`);
  }

  const candidates = fs
    .readdirSync(npxCacheDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => path.join(npxCacheDir, entry.name, 'node_modules', 'playwright'))
    .filter((candidate) => fs.existsSync(candidate))
    .sort((left, right) => fs.statSync(right).mtimeMs - fs.statSync(left).mtimeMs);

  if (!candidates.length) {
    throw new Error('No se encontró un módulo de Playwright en la caché de npx.');
  }

  return candidates[0];
}

const playwrightModulePath = findPlaywrightModule();
const { chromium } = require(playwrightModulePath);

const APP_URL = 'http://127.0.0.1:8765/index.html';
const OUT_DIR = path.join(process.cwd(), 'test-results');

function log(message) {
  console.log(`[qa] ${message}`);
}

async function expectText(page, selector, expected) {
  const actual = await page.locator(selector).innerText();
  assert.equal(actual.trim(), expected, `Se esperaba "${expected}" en ${selector}, pero apareció "${actual.trim()}".`);
}

async function expectIncludesText(page, selector, snippet) {
  const actual = await page.locator(selector).innerText();
  assert.ok(actual.includes(snippet), `Se esperaba encontrar "${snippet}" en ${selector}, pero apareció "${actual}".`);
}

async function getExerciseData(page, index) {
  return page.evaluate((exerciseIndex) => {
    const exercise = window.IFR_APP_DATA.exercises[exerciseIndex];
    return {
      id: exercise.id,
      correctOption: exercise.correctOption,
      options: exercise.options.map((option) => option.label)
    };
  }, index);
}

async function clickOption(page, exerciseId, optionLabel) {
  await page.locator(`[data-action="answer"][data-id="${exerciseId}"][data-option="${optionLabel}"]`).click();
}

async function startExam(page) {
  await page.goto(APP_URL, { waitUntil: 'networkidle' });
  await page.getByRole('button', { name: 'Iniciar examen' }).click();
  await page.getByRole('heading', { name: 'Resuelve este reactivo para continuar' }).waitFor();
}

async function checkNoHorizontalOverflow(page, label) {
  const hasOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  assert.equal(hasOverflow, false, `Se detectó desborde horizontal en ${label}.`);
}

async function runFlowChecks(page) {
  log('Validando conteo, bloqueo secuencial y cierre del examen.');
  await page.setViewportSize({ width: 1440, height: 1080 });
  await startExam(page);

  const lockedCount = await page.locator('.card.is-locked').count();
  assert.ok(lockedCount > 0, 'Se esperaba al menos un reactivo bloqueado al iniciar la evaluación.');

  const first = await getExerciseData(page, 0);
  const wrongOption = first.options.find((option) => option !== first.correctOption);
  assert.ok(wrongOption, 'No se encontró una opción incorrecta para la primera pregunta.');
  await clickOption(page, first.id, wrongOption);

  await expectText(page, '#answeredValue', '1');
  await expectText(page, '#correctValue', '0');
  await expectText(page, '#incorrectValue', '1');
  await expectIncludesText(page, '#scoreValue', '0/');
  await page.getByText('Reactivo revisable con error detectado').waitFor();
  await page.getByText('✘ Opción incorrecta').first().waitFor();
  assert.equal(await page.locator('.option.is-shaking').count(), 1, 'La respuesta incorrecta debía mostrar una animación de sacudida.');

  const second = await getExerciseData(page, 1);
  await page.locator(`[data-action="answer"][data-id="${second.id}"]`).first().waitFor();
  await clickOption(page, second.id, second.correctOption);

  await expectText(page, '#answeredValue', '2');
  await expectText(page, '#correctValue', '1');
  await expectText(page, '#incorrectValue', '1');
  await expectIncludesText(page, '#scoreValue', '1/');

  await page.evaluate(() => {
    window.__IFR_EXAM_DEBUG__.finishExam('finished');
  });

  await page.getByRole('heading', { name: 'Examen concluido' }).waitFor();
  await page.getByText('✓. Opción correcta').first().waitFor();
  const incorrectSummary = page.locator('.summary-card').filter({ hasText: 'Reactivos incorrectos' }).locator('strong');
  assert.equal((await incorrectSummary.innerText()).trim(), '1', 'El resumen final no conservó el error previo.');

  await page.getByRole('button', { name: 'Ver repaso recomendado' }).click();
  await page.getByRole('heading', { name: 'Qué áreas y bloques conviene repasar' }).waitFor();
  const reviewCount = await page.locator('.review-card').count();
  assert.ok(reviewCount >= 1, 'Se esperaba al menos un bloque recomendado para repaso tras el error inicial.');

  await page.screenshot({ path: path.join(OUT_DIR, 'qa-desktop-finished.png'), fullPage: true });
}

async function runResponsiveChecks(page) {
  log('Validando formato sin desbordes en escritorio y móvil.');

  await page.setViewportSize({ width: 1440, height: 1080 });
  await startExam(page);
  await checkNoHorizontalOverflow(page, 'escritorio');

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(APP_URL, { waitUntil: 'networkidle' });
  await checkNoHorizontalOverflow(page, 'portada móvil');
  await page.getByRole('button', { name: 'Iniciar examen' }).click();
  await page.getByRole('heading', { name: 'Resuelve este reactivo para continuar' }).waitFor();
  await checkNoHorizontalOverflow(page, 'examen móvil');

  await page.screenshot({ path: path.join(OUT_DIR, 'qa-mobile-running.png'), fullPage: true });
}

async function runTimeoutChecks(page) {
  log('Validando cierre por tiempo y tratamiento de reactivos pendientes.');

  await page.setViewportSize({ width: 390, height: 844 });
  await startExam(page);
  const first = await getExerciseData(page, 0);
  await clickOption(page, first.id, first.correctOption);

  await page.evaluate(() => {
    window.__IFR_EXAM_DEBUG__.finishExam('time_expired');
  });

  await page.getByRole('heading', { name: 'Tiempo límite alcanzado' }).waitFor();
  await page.getByText('Reactivos pendientes al momento del cierre').waitFor();
  const unansweredCards = page.getByRole('heading', { name: 'Reactivo no respondido' });
  await unansweredCards.first().waitFor();
  assert.ok(await unansweredCards.count() > 0, 'Se esperaba al menos un reactivo marcado como no respondido tras agotar el tiempo.');
  await checkNoHorizontalOverflow(page, 'cierre móvil por tiempo');
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const consoleErrors = [];
  const pageErrors = [];

  const browser = await chromium.launch({
    channel: 'msedge',
    headless: true
  });

  const context = await browser.newContext({
    viewport: { width: 1440, height: 1080 }
  });
  const page = await context.newPage();

  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });
  page.on('pageerror', (error) => {
    pageErrors.push(error.message);
  });

  try {
    await runFlowChecks(page);
    await runResponsiveChecks(page);
    await runTimeoutChecks(page);

    assert.deepEqual(pageErrors, [], `Se detectaron errores de página: ${pageErrors.join(' | ')}`);
    assert.deepEqual(consoleErrors, [], `Se detectaron errores de consola: ${consoleErrors.join(' | ')}`);
    log('QA completado sin fallas.');
  } finally {
    await context.close();
    await browser.close();
  }
}

main().catch((error) => {
  console.error(`[qa] ERROR: ${error.stack || error.message}`);
  process.exit(1);
});
