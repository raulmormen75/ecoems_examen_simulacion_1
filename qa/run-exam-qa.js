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

async function advanceToExercise(page, targetNumber) {
  for (let index = 0; index < targetNumber - 1; index += 1) {
    const exercise = await getExerciseData(page, index);
    await page.locator(`[data-action="answer"][data-id="${exercise.id}"]`).first().waitFor();
    await clickOption(page, exercise.id, exercise.correctOption);
  }
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

async function waitForFloatingReview(page) {
  await page.locator('.floating-review').waitFor();
}

async function checkFloatingReviewLayout(page, label) {
  const layout = await page.evaluate(() => {
    const shell = document.querySelector('.exercise-shell-current');
    const prompt = shell?.querySelector('.floating-review');
    const card = shell?.querySelector('.card');
    const button = prompt?.querySelector('.floating-review-btn');
    const dismiss = prompt?.querySelector('.floating-review-dismiss');
    if (!shell || !prompt || !card || !button || !dismiss) return null;

    const shellRect = shell.getBoundingClientRect();
    const promptRect = prompt.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();
    const dismissRect = dismiss.getBoundingClientRect();

    return {
      fitsShell: promptRect.left >= shellRect.left - 1 && promptRect.right <= shellRect.right + 1,
      sitsAboveCard: promptRect.bottom <= cardRect.top + 12,
      controlsInside:
        buttonRect.left >= promptRect.left - 1 &&
        buttonRect.right <= promptRect.right + 1 &&
        dismissRect.left >= promptRect.left - 1 &&
        dismissRect.right <= promptRect.right + 1 &&
        buttonRect.bottom <= promptRect.bottom + 1 &&
        dismissRect.bottom <= promptRect.bottom + 1,
      buttonHeight: buttonRect.height,
      dismissHeight: dismissRect.height
    };
  });

  assert.ok(layout, `No se pudo medir el recordatorio flotante en ${label}.`);
  assert.equal(layout.fitsShell, true, `El recordatorio flotante salió del contenedor del reactivo en ${label}.`);
  assert.equal(layout.sitsAboveCard, true, `El recordatorio flotante no quedó encima del card activo en ${label}.`);
  assert.equal(layout.controlsInside, true, `Los controles del recordatorio flotante se salieron del panel en ${label}.`);
  assert.ok(layout.buttonHeight >= 44, `El botón flotante quedó demasiado bajo en ${label}.`);
  assert.ok(layout.dismissHeight >= 40, `El botón de descarte quedó demasiado pequeño en ${label}.`);
}

async function waitForLoadedImages(page, selector, expectedCount, label) {
  try {
    await page.waitForFunction(
      ({ imageSelector, count }) => {
        const images = Array.from(document.querySelectorAll(imageSelector));
        return images.length === count && images.every((image) => image.complete && image.naturalWidth > 0 && image.naturalHeight > 0);
      },
      { imageSelector: selector, count: expectedCount },
      { timeout: 10000 }
    );
  } catch (error) {
    const imageReport = await page.locator(selector).evaluateAll((images) => images.map((image) => ({
      src: image.getAttribute('src'),
      complete: image.complete,
      naturalWidth: image.naturalWidth,
      naturalHeight: image.naturalHeight
    })));

    throw new Error(`No cargaron correctamente las imágenes de ${label}: ${JSON.stringify(imageReport)}. ${error.message}`);
  }
}

async function showFloatingReview(page, optionLabel) {
  const first = await getExerciseData(page, 0);
  await clickOption(page, first.id, optionLabel || first.correctOption);
  await waitForFloatingReview(page);
  return first;
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
  await waitForFloatingReview(page);
  await checkFloatingReviewLayout(page, 'escritorio tras un error');
  assert.equal(await page.locator('#reactivo-1 .card-body').count(), 0, 'La revisión del reactivo anterior no debe abrirse sola.');

  await page.getByRole('button', { name: 'Ver resultado y argumentos' }).click();
  await page.locator('#reactivo-1 .feedback-panel').waitFor();
  await page.getByText('✘ Opción incorrecta').first().waitFor();

  const second = await getExerciseData(page, 1);
  await page.locator(`[data-action="answer"][data-id="${second.id}"]`).first().waitFor();
  await clickOption(page, second.id, second.correctOption);
  await waitForFloatingReview(page);
  await page.locator('.floating-review-dismiss').click();
  assert.equal(await page.locator('.floating-review').count(), 0, 'El recordatorio flotante debía poder descartarse.');

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
  log('Validando formato del botón opcional en escritorio, tableta y móvil.');

  const viewports = [
    { width: 1440, height: 1080, label: 'escritorio', screenshot: 'qa-desktop-running.png' },
    { width: 820, height: 1180, label: 'tableta', screenshot: 'qa-tablet-running.png' },
    { width: 390, height: 844, label: 'móvil', screenshot: 'qa-mobile-running.png' }
  ];

  for (const viewport of viewports) {
    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    await page.goto(APP_URL, { waitUntil: 'networkidle' });
    await checkNoHorizontalOverflow(page, `portada ${viewport.label}`);
    await page.getByRole('button', { name: 'Iniciar examen' }).click();
    await page.getByRole('heading', { name: 'Resuelve este reactivo para continuar' }).waitFor();
    await checkNoHorizontalOverflow(page, `examen ${viewport.label}`);
    await showFloatingReview(page);
    await checkFloatingReviewLayout(page, viewport.label);
    await checkNoHorizontalOverflow(page, `recordatorio flotante en ${viewport.label}`);
    await page.screenshot({ path: path.join(OUT_DIR, viewport.screenshot), fullPage: true });
  }
}

async function runReactivo8FigureChecks(page) {
  log('Validando que el reactivo 8 muestre figuras reales en el planteamiento y las opciones.');

  await page.setViewportSize({ width: 1440, height: 1080 });
  await startExam(page);
  await advanceToExercise(page, 8);
  await page.locator('#reactivo-8').waitFor();
  await waitForLoadedImages(page, '#reactivo-8 .visual-panel img', 1, 'planteamiento del reactivo 8 en escritorio');
  await waitForLoadedImages(page, '#reactivo-8 .option-visual img', 5, 'opciones del reactivo 8 en escritorio');
  assert.equal(await page.locator('#reactivo-8 .visual-panel img').count(), 1, 'El planteamiento del reactivo 8 debe mostrar una imagen raster.');
  assert.equal(await page.locator('#reactivo-8 .option-visual img').count(), 5, 'Las cinco opciones del reactivo 8 deben mostrar imágenes raster.');

  const imageReport = await page.evaluate(() => {
    const prompt = document.querySelector('#reactivo-8 .visual-panel img');
    const options = Array.from(document.querySelectorAll('#reactivo-8 .option-visual img'));

    return {
      prompt: prompt
        ? {
            src: prompt.getAttribute('src'),
            naturalWidth: prompt.naturalWidth,
            naturalHeight: prompt.naturalHeight
          }
        : null,
      options: options.map((image) => ({
        src: image.getAttribute('src'),
        naturalWidth: image.naturalWidth,
        naturalHeight: image.naturalHeight
      }))
    };
  });

  assert.ok(imageReport.prompt, 'No se detectó la imagen principal del reactivo 8.');
  assert.ok(imageReport.prompt.src.includes('reactivo-8-secuencia.png'), 'La imagen principal del reactivo 8 no corresponde al asset esperado.');
  assert.ok(imageReport.prompt.naturalWidth > 0 && imageReport.prompt.naturalHeight > 0, 'La imagen principal del reactivo 8 no cargó correctamente.');

  const expectedOptionAssets = [
    'reactivo-8-opcion-a.png',
    'reactivo-8-opcion-b.png',
    'reactivo-8-opcion-c.png',
    'reactivo-8-opcion-d.png',
    'reactivo-8-opcion-e.png'
  ];

  assert.deepEqual(
    imageReport.options.map((image) => image.src.split('/').pop()),
    expectedOptionAssets,
    'Las opciones del reactivo 8 no quedaron enlazadas a los assets raster esperados.'
  );

  for (const image of imageReport.options) {
    assert.ok(image.naturalWidth > 0 && image.naturalHeight > 0, `No cargó correctamente la opción raster ${image.src}.`);
  }
  await page.screenshot({ path: path.join(OUT_DIR, 'qa-reactivo8-desktop.png'), fullPage: true });

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(APP_URL, { waitUntil: 'networkidle' });
  await page.getByRole('button', { name: 'Iniciar examen' }).click();
  await advanceToExercise(page, 8);
  await page.locator('#reactivo-8 .option-visual img').first().waitFor();
  await waitForLoadedImages(page, '#reactivo-8 .visual-panel img', 1, 'planteamiento del reactivo 8 en móvil');
  await waitForLoadedImages(page, '#reactivo-8 .option-visual img', 5, 'opciones del reactivo 8 en móvil');
  await checkNoHorizontalOverflow(page, 'reactivo 8 en móvil');
  await page.screenshot({ path: path.join(OUT_DIR, 'qa-reactivo8-mobile.png'), fullPage: true });
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
  assert.equal(await page.locator('.floating-review').count(), 0, 'El recordatorio flotante debía cerrarse al agotar el tiempo.');
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
    await runReactivo8FigureChecks(page);
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
