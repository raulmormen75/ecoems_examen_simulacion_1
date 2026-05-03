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
  const option = page.locator(`[data-action="answer"][data-id="${exerciseId}"][data-option="${optionLabel}"]`);
  await option.scrollIntoViewIfNeeded();
  try {
    await option.click({ timeout: 5000 });
  } catch (error) {
    await option.click({ force: true });
  }
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

async function expectResultDownload(page, label) {
  const buttons = page.getByRole('button', { name: 'Descargar mis resultados' });
  await buttons.first().waitFor();
  const buttonCount = await buttons.count();
  assert.equal(buttonCount, 2, `Se esperaban dos botones de descarga en ${label}.`);

  const topButtonBox = await page.locator('#resultado-final .final-result-head-actions [data-action="download-results"]').boundingBox();
  const bottomButtonBox = await page.locator('#resultado-final .final-actions-bottom [data-action="download-results"]').boundingBox();
  const panelBox = await page.locator('#resultado-final').boundingBox();
  assert.ok(topButtonBox && bottomButtonBox && panelBox, `No se pudieron medir ambos botones en ${label}.`);
  if (panelBox.width > 700) {
    assert.ok(topButtonBox.x >= panelBox.x + panelBox.width / 2, `El boton superior no quedo orientado a la derecha en ${label}.`);
    assert.ok(bottomButtonBox.x >= panelBox.x + panelBox.width / 2, `El boton inferior no quedo orientado a la derecha en ${label}.`);
  } else {
    assert.ok(topButtonBox.width >= panelBox.width * .72, `El boton superior movil no quedo con presencia suficiente en ${label}.`);
    assert.ok(bottomButtonBox.width >= panelBox.width * .72, `El boton inferior movil no quedo con presencia suficiente en ${label}.`);
  }
  assert.ok(topButtonBox.y < bottomButtonBox.y, `El boton superior no aparece antes que el inferior en ${label}.`);

  await page.evaluate(() => {
    window.__IFR_CAPTURED_CANVAS_TEXTS__ = [];
    if (!window.__IFR_ORIGINAL_FILL_TEXT__) {
      window.__IFR_ORIGINAL_FILL_TEXT__ = CanvasRenderingContext2D.prototype.fillText;
      CanvasRenderingContext2D.prototype.fillText = function captureResultCanvasText(text, ...args) {
        window.__IFR_CAPTURED_CANVAS_TEXTS__.push(String(text));
        return window.__IFR_ORIGINAL_FILL_TEXT__.call(this, text, ...args);
      };
    }
  });

  const [download] = await Promise.all([
    page.waitForEvent('download'),
    buttons.first().click()
  ]);
  const filename = download.suggestedFilename();
  assert.ok(filename.endsWith('.png'), `La descarga de ${label} no produjo un archivo PNG: ${filename}.`);
  const targetPath = path.join(OUT_DIR, `resultado-final-${label}.png`);
  await download.saveAs(targetPath);
  const stats = fs.statSync(targetPath);
  assert.ok(stats.size > 1000, `La descarga PNG de ${label} quedo vacia o demasiado pequena.`);
  const capturedCanvasTexts = await page.evaluate(() => window.__IFR_CAPTURED_CANVAS_TEXTS__ || []);
  assert.equal(capturedCanvasTexts.includes('Descargar mis resultados'), false, `El PNG de ${label} no debe incluir el boton de descarga.`);

  const [bottomDownload] = await Promise.all([
    page.waitForEvent('download'),
    buttons.nth(1).click()
  ]);
  assert.ok(bottomDownload.suggestedFilename().endsWith('.png'), `La descarga inferior de ${label} no produjo PNG.`);
  await bottomDownload.saveAs(path.join(OUT_DIR, `resultado-final-${label}-inferior.png`));
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

  await page.getByRole('heading', { name: 'Resultado final' }).waitFor();
  await page.getByText('✓. Opción correcta').first().waitFor();
  const finalPanel = page.locator('#resultado-final');
  const incorrectSummary = finalPanel.locator('.final-metric-card.incorrect strong');
  assert.equal((await incorrectSummary.innerText()).trim(), '1', 'El resumen final no conservó el error previo.');
  await finalPanel.getByText('Bloques temáticos que debes reforzar 🤓:').waitFor();
  const reviewCount = await finalPanel.locator('.reinforcement-group').count();
  assert.ok(reviewCount >= 1, 'Se esperaba al menos un bloque recomendado para repaso tras el error inicial.');
  const firstWrongSummary = await finalPanel.locator('.reinforcement-reactivos li').first().innerText();
  assert.ok(firstWrongSummary.includes('Reactivo 1.'), 'El primer error no quedó registrado en la lista de refuerzo.');
  assert.ok(firstWrongSummary.length < 190, 'El resumen del reactivo incorrecto quedó demasiado largo.');
  await expectResultDownload(page, 'termino');

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

async function runReactivo7FigureChecks(page) {
  log('Validando que el reactivo 7 alinee sus tres figuras en móvil.');

  await page.setViewportSize({ width: 390, height: 844 });
  await startExam(page);
  await advanceToExercise(page, 7);
  await page.locator('#reactivo-7 .visual-panel-svg svg').waitFor();

  const layout = await page.evaluate(() => {
    const card = document.querySelector('#reactivo-7');
    const panel = card?.querySelector('.visual-panel-svg');
    const svg = panel?.querySelector('svg');
    const labels = svg ? Array.from(svg.querySelectorAll('text')).map((text) => text.textContent.trim()) : [];
    const labelBoxes = svg ? Array.from(svg.querySelectorAll('text')).map((text) => {
      const box = text.getBoundingClientRect();
      return { left: box.left, top: box.top };
    }) : [];
    const svgRect = svg?.getBoundingClientRect();
    const panelRect = panel?.getBoundingClientRect();
    const circles = svg ? Array.from(svg.querySelectorAll('circle')) : [];

    return {
      hasSvg: Boolean(svg),
      hasPreformattedVisual: Boolean(card?.querySelector('.visual-panel pre')),
      labels,
      circleCount: circles.length,
      filledCircleCount: circles.filter((circle) => circle.getAttribute('fill') === '#1C1E5A').length,
      optionPreCount: card ? card.querySelectorAll('.option-pre').length : 0,
      labelsIncrease: labelBoxes.length === 3 && labelBoxes[0].left < labelBoxes[1].left && labelBoxes[1].left < labelBoxes[2].left,
      labelsAligned: labelBoxes.length === 3 && Math.max(...labelBoxes.map((box) => box.top)) - Math.min(...labelBoxes.map((box) => box.top)) < 2,
      svgFitsPanel: Boolean(svgRect && panelRect && svgRect.left >= panelRect.left - 1 && svgRect.right <= panelRect.right + 1)
    };
  });

  assert.equal(layout.hasSvg, true, 'El reactivo 7 debe mostrar la serie como SVG escalable.');
  assert.equal(layout.hasPreformattedVisual, false, 'El reactivo 7 no debe usar el bloque preformateado que se desacomoda en móvil.');
  assert.deepEqual(layout.labels, ['Figura 1', 'Figura 2', 'Figura 3'], 'Las tres figuras del reactivo 7 deben conservar su etiqueta.');
  assert.equal(layout.circleCount, 12, 'El reactivo 7 debe mostrar tres grupos de cuatro círculos.');
  assert.equal(layout.filledCircleCount, 3, 'Cada figura del reactivo 7 debe conservar un solo círculo lleno.');
  assert.equal(layout.optionPreCount, 5, 'Las opciones del reactivo 7 no deben modificarse.');
  assert.equal(layout.labelsIncrease, true, 'Las etiquetas de las figuras del reactivo 7 deben ordenarse de izquierda a derecha.');
  assert.equal(layout.labelsAligned, true, 'Las etiquetas de las figuras del reactivo 7 deben quedar alineadas en la misma fila.');
  assert.equal(layout.svgFitsPanel, true, 'El SVG del reactivo 7 debe caber dentro del panel visual en móvil.');
  await checkNoHorizontalOverflow(page, 'reactivo 7 en móvil');
  await page.screenshot({ path: path.join(OUT_DIR, 'qa-reactivo7-mobile.png'), fullPage: true });
}

async function runPromptMarkChecks(page) {
  log('Validando subrayados y resaltados en reactivos de Español y Habilidad verbal.');

  const expectedMarks = [
    { number: 32, underline: ['por eso'], highlight: [] },
    { number: 33, underline: [], highlight: ['Primero', 'después', 'finalmente'] },
    { number: 34, underline: [], highlight: ['sin embargo'] },
    { number: 37, underline: ['vieja', 'altos', 'angostas', 'silencioso'], highlight: [] },
    { number: 84, underline: [], highlight: ['LEALTAD – VIRTUD'] },
    { number: 85, underline: [], highlight: ['HUMO – FUEGO'] },
    { number: 86, underline: [], highlight: ['OVEJA – REBAÑO'] },
    { number: 87, underline: [], highlight: ['APROBÓ'] },
    { number: 88, underline: [], highlight: ['FRECUENTE'] },
    { number: 89, underline: [], highlight: ['AUSTERIDAD'] },
    { number: 91, underline: [], highlight: ['AMBIGUO'] },
    { number: 92, underline: [], highlight: ['ASOMBRO'] }
  ];

  await page.setViewportSize({ width: 390, height: 844 });
  await startExam(page);
  await advanceToExercise(page, expectedMarks[0].number);

  let currentNumber = expectedMarks[0].number;
  for (const expected of expectedMarks) {
    for (let exerciseNumber = currentNumber; exerciseNumber < expected.number; exerciseNumber += 1) {
      const exercise = await getExerciseData(page, exerciseNumber - 1);
      await clickOption(page, exercise.id, exercise.correctOption);
    }
    currentNumber = expected.number;
    await page.locator(`#reactivo-${expected.number}`).waitFor();

    const report = await page.evaluate((number) => {
      const card = document.querySelector(`#reactivo-${number}`);
      const promptPanel = card?.querySelector('.prompt-panel');
      const underline = promptPanel ? Array.from(promptPanel.querySelectorAll('.prompt-mark-underline')).map((node) => node.textContent.trim()) : [];
      const highlight = promptPanel ? Array.from(promptPanel.querySelectorAll('.prompt-mark-highlight')).map((node) => node.textContent.trim()) : [];
      return {
        underline,
        highlight,
        optionMarkCount: card ? card.querySelectorAll('.option-list .prompt-mark').length : 0
      };
    }, expected.number);

    assert.deepEqual(report.underline, expected.underline, `El reactivo ${expected.number} no tiene los subrayados esperados.`);
    assert.deepEqual(report.highlight, expected.highlight, `El reactivo ${expected.number} no tiene los resaltados esperados.`);
    assert.equal(report.optionMarkCount, 0, `Las opciones del reactivo ${expected.number} no deben recibir marcas del planteamiento.`);
    await checkNoHorizontalOverflow(page, `marcas del reactivo ${expected.number} en móvil`);

    if (expected.number === 32 || expected.number === 84 || expected.number === 92) {
      await page.screenshot({ path: path.join(OUT_DIR, `qa-reactivo${expected.number}-marcas-mobile.png`), fullPage: true });
    }
  }
}

async function runReactivo80TextBaseChecks(page) {
  log('Validando que el reactivo 80 muestre el texto base completo antes de la pregunta.');

  await page.setViewportSize({ width: 390, height: 844 });
  await startExam(page);
  await advanceToExercise(page, 80);
  await page.locator('#reactivo-80').waitFor();

  const report = await page.evaluate(() => {
    const card = document.querySelector('#reactivo-80');
    const promptText = card?.querySelector('.prompt-panel')?.innerText || '';
    const optionTexts = card ? Array.from(card.querySelectorAll('.option-list .option-copy')).map((option) => option.innerText.trim()) : [];
    const exercise = window.IFR_APP_DATA.exercises.find((item) => item.number === 80);
    const incorrectArgumentText = Object.values(exercise?.incorrectArgumentsByOption || {}).join('\n');
    return {
      hasTextBaseLabel: promptText.includes('Texto base:'),
      hasOpeningSentence: promptText.includes('Las profundidades marinas siguen siendo una de las regiones menos conocidas del planeta.'),
      hasSecondParagraph: promptText.includes('Sin embargo, la investigación del fondo marino aún enfrenta grandes obstáculos.'),
      hasQuestion: promptText.includes('¿Cuál es el tema central del texto?'),
      questionAfterTextBase: promptText.indexOf('¿Cuál es el tema central del texto?') > promptText.indexOf('Las profundidades marinas siguen siendo'),
      hasSharedRangeHeaderInPrompt: promptText.includes('TEXTO BASE PARA LOS REACTIVOS'),
      hasSharedRangeHeaderInArguments: incorrectArgumentText.includes('TEXTO BASE PARA LOS REACTIVOS'),
      optionTexts,
      hasHorizontalOverflow: document.documentElement.scrollWidth > window.innerWidth
    };
  });

  assert.equal(report.hasTextBaseLabel, true, 'El reactivo 80 debe mostrar la etiqueta Texto base.');
  assert.equal(report.hasOpeningSentence, true, 'El reactivo 80 no muestra el inicio del texto base.');
  assert.equal(report.hasSecondParagraph, true, 'El reactivo 80 no muestra el segundo párrafo del texto base.');
  assert.equal(report.hasQuestion, true, 'El reactivo 80 debe conservar la pregunta.');
  assert.equal(report.questionAfterTextBase, true, 'La pregunta del reactivo 80 debe aparecer después del texto base.');
  assert.equal(report.hasSharedRangeHeaderInPrompt, false, 'El reactivo 80 no debe mostrar encabezados internos del TXT.');
  assert.equal(report.hasSharedRangeHeaderInArguments, false, 'Los argumentos del reactivo 80 no deben arrastrar el texto base de otros reactivos.');
  assert.deepEqual(
    report.optionTexts,
    [
      'La pesca comercial en mares profundos',
      'La exploración científica de las profundidades marinas',
      'Los viajes turísticos en submarinos',
      'La historia completa de todos los océanos',
      'La contaminación de los puertos industriales'
    ],
    'Las opciones del reactivo 80 no deben modificarse.'
  );
  assert.equal(report.hasHorizontalOverflow, false, 'El reactivo 80 no debe generar desborde horizontal en móvil.');
  await page.screenshot({ path: path.join(OUT_DIR, 'qa-reactivo80-texto-base-mobile.png'), fullPage: true });
}

async function runReadingCapsuleChecks(page) {
  log('Validando cápsulas IFR para fragmentos y textos base en Español y Habilidad verbal.');

  const expectedCapsules = [
    {
      number: 31,
      capsuleIncludes: ['Muchos estudiantes desarrollan hábitos de estudio poco eficaces.'],
      questionIncludes: 'En el texto, el recurso empleado para desarrollar el tema es'
    },
    {
      number: 32,
      capsuleIncludes: ['Muchos ríos están contaminados', 'por eso'],
      questionIncludes: 'La expresión subrayada cumple la función de',
      underline: ['por eso'],
      highlight: []
    },
    {
      number: 33,
      capsuleIncludes: ['Primero sonó la alarma', 'después los alumnos salieron', 'finalmente se concentraron'],
      questionIncludes: 'Las palabras destacadas son nexos que',
      underline: [],
      highlight: ['Primero', 'después', 'finalmente']
    },
    {
      number: 34,
      capsuleIncludes: ['El uso de bicicletas ha crecido', 'sin embargo'],
      questionIncludes: 'La expresión destacada funciona principalmente para',
      underline: [],
      highlight: ['sin embargo']
    },
    {
      number: 37,
      capsuleIncludes: ['La vieja casona tenía muros altos', 'ventanas angostas', 'patio silencioso'],
      questionIncludes: 'Las palabras subrayadas pertenecen a la categoría de',
      underline: ['vieja', 'altos', 'angostas', 'silencioso'],
      highlight: []
    },
    {
      number: 38,
      capsuleIncludes: ['A las seis de la tarde, Julia cerró la tienda'],
      questionIncludes: 'El fragmento pertenece a una narración porque'
    },
    {
      number: 77,
      capsuleIncludes: ['Texto base:', 'Las profundidades marinas siguen siendo', 'Sin embargo, la investigación del fondo marino'],
      questionIncludes: 'Según el sentido global del texto'
    },
    {
      number: 78,
      capsuleIncludes: ['Texto base:', 'Las profundidades marinas siguen siendo', 'Sin embargo, la investigación del fondo marino'],
      questionIncludes: 'Las profundidades marinas siguen guardando muchos misterios'
    },
    {
      number: 79,
      capsuleIncludes: ['Texto base:', 'Las profundidades marinas siguen siendo', 'Sin embargo, la investigación del fondo marino'],
      questionIncludes: '¿Cuál de los siguientes enunciados funciona como una hipótesis dentro del texto?'
    },
    {
      number: 80,
      capsuleIncludes: ['Texto base:', 'Las profundidades marinas siguen siendo', 'Sin embargo, la investigación del fondo marino'],
      questionIncludes: '¿Cuál es el tema central del texto?'
    },
    {
      number: 81,
      capsuleIncludes: ['Texto base:', 'El cuervo y el gorrión', 'En un verano muy seco, un cuervo y un gorrión'],
      questionIncludes: 'En la narración, el gorrión no logró beber agua porque'
    },
    {
      number: 82,
      capsuleIncludes: ['Texto base:', 'El cuervo y el gorrión', 'En un verano muy seco, un cuervo y un gorrión'],
      questionIncludes: 'Los animales hablan en el texto porque se trata de una'
    },
    {
      number: 83,
      capsuleIncludes: ['Texto base:', 'El cuervo y el gorrión', 'En un verano muy seco, un cuervo y un gorrión'],
      questionIncludes: 'La moraleja del texto es que'
    }
  ];

  for (const viewport of [
    { name: 'desktop', width: 1440, height: 1080 },
    { name: 'mobile', width: 390, height: 844 }
  ]) {
    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    await startExam(page);
    await advanceToExercise(page, expectedCapsules[0].number);

    let currentNumber = expectedCapsules[0].number;
    for (const expected of expectedCapsules) {
      for (let exerciseNumber = currentNumber; exerciseNumber < expected.number; exerciseNumber += 1) {
        const exercise = await getExerciseData(page, exerciseNumber - 1);
        await clickOption(page, exercise.id, exercise.correctOption);
      }
      currentNumber = expected.number;
      await page.locator(`#reactivo-${expected.number}`).waitFor();

      const report = await page.evaluate((number) => {
        const card = document.querySelector(`#reactivo-${number}`);
        const capsule = card?.querySelector(`.reading-capsule[data-reading-capsule="reactivo-${number}"]`);
        const capsuleStyles = capsule ? window.getComputedStyle(capsule) : null;
        const paragraphStyles = capsule ? Array.from(capsule.querySelectorAll('p')).map((paragraph) => window.getComputedStyle(paragraph).color) : [];
        const promptText = card?.querySelector('.prompt-panel')?.innerText || '';
        const capsuleText = capsule?.innerText || '';
        const promptPanelRect = card?.querySelector('.prompt-panel')?.getBoundingClientRect();
        const capsuleRect = capsule?.getBoundingClientRect();
        return {
          capsuleCount: card ? card.querySelectorAll('.prompt-panel .reading-capsule').length : 0,
          optionCapsuleCount: card ? card.querySelectorAll('.option-list .reading-capsule').length : 0,
          feedbackCapsuleCount: card ? card.querySelectorAll('.feedback-panel .reading-capsule').length : 0,
          capsuleParagraphCount: capsule ? capsule.querySelectorAll('.reading-capsule-text p').length : 0,
          capsuleText,
          promptText,
          display: capsuleStyles?.display || '',
          borderTopWidth: capsuleStyles?.borderTopWidth || '',
          borderTopColor: capsuleStyles?.borderTopColor || '',
          backgroundColor: capsuleStyles?.backgroundColor || '',
          borderRadius: capsuleStyles?.borderTopLeftRadius || '',
          capsuleColor: capsuleStyles?.color || '',
          overflowWrap: capsuleStyles?.overflowWrap || '',
          paragraphColors: paragraphStyles,
          underline: capsule ? Array.from(capsule.querySelectorAll('.prompt-mark-underline')).map((node) => node.textContent.trim()) : [],
          highlight: capsule ? Array.from(capsule.querySelectorAll('.prompt-mark-highlight')).map((node) => node.textContent.trim()) : [],
          capsuleInsidePrompt: Boolean(capsule && card?.querySelector('.prompt-panel')?.contains(capsule)),
          capsuleFitsPrompt: Boolean(
            promptPanelRect &&
            capsuleRect &&
            capsuleRect.left >= promptPanelRect.left - 1 &&
            capsuleRect.right <= promptPanelRect.right + 1
          ),
          hasHorizontalOverflow: document.documentElement.scrollWidth > window.innerWidth
        };
      }, expected.number);

      assert.equal(report.capsuleCount, 1, `El reactivo ${expected.number} debe tener una sola cápsula de lectura en ${viewport.name}.`);
      assert.equal(report.optionCapsuleCount, 0, `Las opciones del reactivo ${expected.number} no deben tener cápsulas en ${viewport.name}.`);
      assert.equal(report.feedbackCapsuleCount, 0, `La retroalimentación del reactivo ${expected.number} no debe tener cápsulas en ${viewport.name}.`);
      assert.ok(report.capsuleParagraphCount >= 1, `La cápsula del reactivo ${expected.number} debe contener párrafos en ${viewport.name}.`);
      assert.equal(report.capsuleInsidePrompt, true, `La cápsula del reactivo ${expected.number} debe estar dentro del planteamiento en ${viewport.name}.`);
      for (const text of expected.capsuleIncludes) {
        assert.ok(report.capsuleText.includes(text), `La cápsula del reactivo ${expected.number} no muestra en ${viewport.name}: ${text}`);
      }
      assert.ok(report.promptText.includes(expected.questionIncludes), `El reactivo ${expected.number} no conserva la pregunta esperada en ${viewport.name}.`);
      assert.equal(report.capsuleText.includes(expected.questionIncludes), false, `La pregunta del reactivo ${expected.number} no debe quedar dentro de la cápsula en ${viewport.name}.`);
      assert.equal(report.display, 'grid', `La cápsula del reactivo ${expected.number} debe renderizarse como bloque en ${viewport.name}.`);
      assert.equal(report.borderTopWidth, '2px', `La cápsula del reactivo ${expected.number} debe tener borde visible de 2px en ${viewport.name}.`);
      assert.ok(report.borderTopColor.includes('28, 30, 90'), `La cápsula del reactivo ${expected.number} debe usar borde azul IFR en ${viewport.name}.`);
      assert.equal(report.backgroundColor, 'rgb(238, 244, 255)', `La cápsula del reactivo ${expected.number} debe usar fondo azul claro en ${viewport.name}.`);
      assert.equal(report.capsuleColor, 'rgb(28, 30, 90)', `La cápsula del reactivo ${expected.number} debe usar texto azul IFR en ${viewport.name}.`);
      assert.ok(report.paragraphColors.every((color) => color === 'rgb(28, 30, 90)'), `Los párrafos de la cápsula del reactivo ${expected.number} deben mantener texto azul IFR en ${viewport.name}.`);
      assert.ok(Number.parseFloat(report.borderRadius) <= 8, `La cápsula del reactivo ${expected.number} debe mantenerse rectangular en ${viewport.name}.`);
      assert.equal(report.overflowWrap, 'break-word', `La cápsula del reactivo ${expected.number} debe proteger contra desbordes en ${viewport.name}.`);
      assert.equal(report.capsuleFitsPrompt, true, `La cápsula del reactivo ${expected.number} debe caber dentro del planteamiento en ${viewport.name}.`);
      assert.equal(report.hasHorizontalOverflow, false, `La cápsula del reactivo ${expected.number} no debe generar desborde horizontal en ${viewport.name}.`);

      if (expected.underline) {
        assert.deepEqual(report.underline, expected.underline, `La cápsula del reactivo ${expected.number} no conserva los subrayados en ${viewport.name}.`);
      }
      if (expected.highlight) {
        assert.deepEqual(report.highlight, expected.highlight, `La cápsula del reactivo ${expected.number} no conserva los resaltados en ${viewport.name}.`);
      }

      if ((viewport.name === 'desktop' && [31, 77].includes(expected.number)) || (viewport.name === 'mobile' && [38, 80, 81, 83].includes(expected.number))) {
        await page.screenshot({ path: path.join(OUT_DIR, `qa-reactivo${expected.number}-capsula-${viewport.name}.png`), fullPage: true });
      }
    }
  }
}

async function runSharedTextBaseChecks(page) {
  log('Validando textos base compartidos en los reactivos 77 al 83.');

  const expectedByReactivo = [
    {
      number: 77,
      requiredText: [
        'Texto base:',
        'Las profundidades marinas siguen siendo una de las regiones menos conocidas del planeta.',
        'Sin embargo, la investigación del fondo marino aún enfrenta grandes obstáculos.',
        'Según el sentido global del texto, los avances en la exploración de las profundidades marinas han sido'
      ],
      firstText: 'Las profundidades marinas siguen siendo',
      question: 'Según el sentido global del texto'
    },
    {
      number: 78,
      requiredText: [
        'Texto base:',
        'Las profundidades marinas siguen siendo una de las regiones menos conocidas del planeta.',
        'Sin embargo, la investigación del fondo marino aún enfrenta grandes obstáculos.',
        'Las profundidades marinas siguen guardando muchos misterios'
      ],
      firstText: 'Las profundidades marinas siguen siendo',
      question: 'Las profundidades marinas siguen guardando muchos misterios'
    },
    {
      number: 79,
      requiredText: [
        'Texto base:',
        'Las profundidades marinas siguen siendo una de las regiones menos conocidas del planeta.',
        'Sin embargo, la investigación del fondo marino aún enfrenta grandes obstáculos.',
        '¿Cuál de los siguientes enunciados funciona como una hipótesis dentro del texto?'
      ],
      firstText: 'Las profundidades marinas siguen siendo',
      question: '¿Cuál de los siguientes enunciados funciona como una hipótesis dentro del texto?'
    },
    {
      number: 80,
      requiredText: [
        'Texto base:',
        'Las profundidades marinas siguen siendo una de las regiones menos conocidas del planeta.',
        'Sin embargo, la investigación del fondo marino aún enfrenta grandes obstáculos.',
        '¿Cuál es el tema central del texto?'
      ],
      firstText: 'Las profundidades marinas siguen siendo',
      question: '¿Cuál es el tema central del texto?'
    },
    {
      number: 81,
      requiredText: [
        'Texto base:',
        'El cuervo y el gorrión',
        'En un verano muy seco, un cuervo y un gorrión encontraron una jarra con un poco de agua en el fondo.',
        'En la narración, el gorrión no logró beber agua porque'
      ],
      firstText: 'El cuervo y el gorrión',
      question: 'En la narración, el gorrión no logró beber agua porque'
    },
    {
      number: 82,
      requiredText: [
        'Texto base:',
        'El cuervo y el gorrión',
        'En un verano muy seco, un cuervo y un gorrión encontraron una jarra con un poco de agua en el fondo.',
        'Los animales hablan en el texto porque se trata de una'
      ],
      firstText: 'El cuervo y el gorrión',
      question: 'Los animales hablan en el texto porque se trata de una'
    },
    {
      number: 83,
      requiredText: [
        'Texto base:',
        'El cuervo y el gorrión',
        'En un verano muy seco, un cuervo y un gorrión encontraron una jarra con un poco de agua en el fondo.',
        'La moraleja del texto es que'
      ],
      firstText: 'El cuervo y el gorrión',
      question: 'La moraleja del texto es que'
    }
  ];

  await page.setViewportSize({ width: 390, height: 844 });
  await startExam(page);
  await advanceToExercise(page, 77);

  for (const expected of expectedByReactivo) {
    await page.locator(`#reactivo-${expected.number}`).waitFor();

    const report = await page.evaluate((number) => {
      const card = document.querySelector(`#reactivo-${number}`);
      const promptText = card?.querySelector('.prompt-panel')?.innerText || '';
      const exercise = window.IFR_APP_DATA.exercises.find((item) => item.number === number);
      const incorrectArgumentText = Object.values(exercise?.incorrectArgumentsByOption || {}).join('\n');
      return {
        promptText,
        hasSharedRangeHeaderInPrompt: promptText.includes('TEXTO BASE PARA LOS REACTIVOS'),
        hasSharedRangeHeaderInArguments: incorrectArgumentText.includes('TEXTO BASE PARA LOS REACTIVOS'),
        hasHorizontalOverflow: document.documentElement.scrollWidth > window.innerWidth
      };
    }, expected.number);

    for (const text of expected.requiredText) {
      assert.ok(report.promptText.includes(text), `El reactivo ${expected.number} no muestra: ${text}`);
    }
    assert.ok(
      report.promptText.indexOf(expected.question) > report.promptText.indexOf(expected.firstText),
      `La pregunta del reactivo ${expected.number} debe aparecer después de su texto base.`
    );
    assert.equal(report.hasSharedRangeHeaderInPrompt, false, `El reactivo ${expected.number} no debe mostrar encabezados internos del TXT.`);
    assert.equal(report.hasSharedRangeHeaderInArguments, false, `Los argumentos del reactivo ${expected.number} no deben arrastrar textos base compartidos.`);
    assert.equal(report.hasHorizontalOverflow, false, `El reactivo ${expected.number} no debe generar desborde horizontal en móvil.`);

    if (expected.number === 81 || expected.number === 83) {
      await page.screenshot({ path: path.join(OUT_DIR, `qa-reactivo${expected.number}-texto-base-mobile.png`), fullPage: true });
    }

    if (expected.number < 83) {
      const exercise = await getExerciseData(page, expected.number - 1);
      await clickOption(page, exercise.id, exercise.correctOption);
    }
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

async function runReactivo11FigureChecks(page) {
  log('Validando que el reactivo 11 muestre una cuadrícula clara para conteo de cuadrados.');

  await page.setViewportSize({ width: 1440, height: 1080 });
  await startExam(page);
  await advanceToExercise(page, 11);
  await page.locator('#reactivo-11').waitFor();
  await waitForLoadedImages(page, '#reactivo-11 .visual-panel img', 1, 'planteamiento del reactivo 11 en escritorio');

  const imageReport = await page.evaluate(() => {
    const image = document.querySelector('#reactivo-11 .visual-panel img');
    return image
      ? {
          src: image.getAttribute('src'),
          alt: image.getAttribute('alt'),
          naturalWidth: image.naturalWidth,
          naturalHeight: image.naturalHeight
        }
      : null;
  });

  assert.ok(imageReport, 'No se detectó la imagen principal del reactivo 11.');
  assert.ok(imageReport.src.includes('reactivo-11-cuadricula.png'), 'La imagen principal del reactivo 11 no corresponde al asset esperado.');
  assert.equal(
    imageReport.alt,
    'Cuadrícula rectangular formada por 3 columnas y 2 filas de cuadrados iguales.',
    'El texto alternativo del reactivo 11 no describe la cuadrícula esperada.'
  );
  assert.ok(imageReport.naturalWidth > 0 && imageReport.naturalHeight > 0, 'La imagen principal del reactivo 11 no cargó correctamente.');
  await checkNoHorizontalOverflow(page, 'reactivo 11 en escritorio');
  await page.screenshot({ path: path.join(OUT_DIR, 'qa-reactivo11-desktop.png'), fullPage: true });

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(APP_URL, { waitUntil: 'networkidle' });
  await page.getByRole('button', { name: 'Iniciar examen' }).click();
  await advanceToExercise(page, 11);
  await waitForLoadedImages(page, '#reactivo-11 .visual-panel img', 1, 'planteamiento del reactivo 11 en móvil');
  await checkNoHorizontalOverflow(page, 'reactivo 11 en móvil');
  await page.screenshot({ path: path.join(OUT_DIR, 'qa-reactivo11-mobile.png'), fullPage: true });
}

async function runReactivo12FigureChecks(page) {
  log('Validando que el reactivo 12 muestre la figura de hexágonos en el planteamiento.');

  await page.setViewportSize({ width: 1440, height: 1080 });
  await startExam(page);
  await advanceToExercise(page, 12);
  await page.locator('#reactivo-12').waitFor();
  await waitForLoadedImages(page, '#reactivo-12 .visual-panel img', 1, 'planteamiento del reactivo 12 en escritorio');

  const imageReport = await page.evaluate(() => {
    const card = document.querySelector('#reactivo-12');
    const promptImage = card?.querySelector('.prompt-panel .visual-panel img');
    const optionImages = card ? Array.from(card.querySelectorAll('.option-list img')) : [];
    const promptPanel = card?.querySelector('.prompt-panel');
    const optionList = card?.querySelector('.option-list');
    return promptImage
      ? {
          src: promptImage.getAttribute('src'),
          alt: promptImage.getAttribute('alt'),
          naturalWidth: promptImage.naturalWidth,
          naturalHeight: promptImage.naturalHeight,
          optionImageCount: optionImages.length,
          imageBeforeOptions: Boolean(promptPanel && optionList && (promptPanel.compareDocumentPosition(optionList) & Node.DOCUMENT_POSITION_FOLLOWING))
        }
      : null;
  });

  assert.ok(imageReport, 'No se detectó la imagen principal del reactivo 12.');
  assert.ok(imageReport.src.includes('reactivo-12-hexagonos.png'), 'La imagen principal del reactivo 12 no corresponde al asset esperado.');
  assert.equal(
    imageReport.alt,
    'Figura formada por un hexágono central rodeado por seis hexágonos iguales; el contorno exterior forma un hexágono mayor.',
    'El texto alternativo del reactivo 12 no describe la figura esperada.'
  );
  assert.ok(imageReport.naturalWidth > 0 && imageReport.naturalHeight > 0, 'La imagen principal del reactivo 12 no cargó correctamente.');
  assert.equal(imageReport.optionImageCount, 0, 'La imagen del reactivo 12 no debe insertarse dentro de las opciones.');
  assert.equal(imageReport.imageBeforeOptions, true, 'La imagen del reactivo 12 debe aparecer en el planteamiento antes de las opciones.');
  await checkNoHorizontalOverflow(page, 'reactivo 12 en escritorio');
  await page.screenshot({ path: path.join(OUT_DIR, 'qa-reactivo12-desktop.png'), fullPage: true });

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(APP_URL, { waitUntil: 'networkidle' });
  await page.getByRole('button', { name: 'Iniciar examen' }).click();
  await advanceToExercise(page, 12);
  await waitForLoadedImages(page, '#reactivo-12 .visual-panel img', 1, 'planteamiento del reactivo 12 en móvil');
  const mobileOptionImages = await page.locator('#reactivo-12 .option-list img').count();
  assert.equal(mobileOptionImages, 0, 'Las opciones del reactivo 12 no deben contener imágenes en móvil.');
  await checkNoHorizontalOverflow(page, 'reactivo 12 en móvil');
  await page.screenshot({ path: path.join(OUT_DIR, 'qa-reactivo12-mobile.png'), fullPage: true });
}

async function runReactivo13FigureChecks(page) {
  log('Validando que el reactivo 13 muestre el apoyo visual de residuos en el planteamiento.');

  await page.setViewportSize({ width: 1440, height: 1080 });
  await startExam(page);
  await advanceToExercise(page, 13);
  await page.locator('#reactivo-13').waitFor();
  await waitForLoadedImages(page, '#reactivo-13 .visual-panel img', 1, 'planteamiento del reactivo 13 en escritorio');

  const imageReport = await page.evaluate(() => {
    const card = document.querySelector('#reactivo-13');
    const promptImage = card?.querySelector('.prompt-panel .visual-panel img');
    const optionImages = card ? Array.from(card.querySelectorAll('.option-list img')) : [];
    const promptPanel = card?.querySelector('.prompt-panel');
    const optionList = card?.querySelector('.option-list');
    return promptImage
      ? {
          src: promptImage.getAttribute('src'),
          alt: promptImage.getAttribute('alt'),
          naturalWidth: promptImage.naturalWidth,
          naturalHeight: promptImage.naturalHeight,
          optionImageCount: optionImages.length,
          imageBeforeOptions: Boolean(promptPanel && optionList && (promptPanel.compareDocumentPosition(optionList) & Node.DOCUMENT_POSITION_FOLLOWING))
        }
      : null;
  });

  assert.ok(imageReport, 'No se detectó la imagen principal del reactivo 13.');
  assert.ok(imageReport.src.includes('reactivo-13-residuos.png'), 'La imagen principal del reactivo 13 no corresponde al asset esperado.');
  assert.equal(
    imageReport.alt,
    'Diagrama de un número N que debe cumplir tres condiciones: al dividirse entre 4 deja residuo 3, entre 5 deja residuo 4 y entre 3 deja residuo 0.',
    'El texto alternativo del reactivo 13 no describe el apoyo visual esperado.'
  );
  assert.ok(imageReport.naturalWidth > 0 && imageReport.naturalHeight > 0, 'La imagen principal del reactivo 13 no cargó correctamente.');
  assert.equal(imageReport.optionImageCount, 0, 'La imagen del reactivo 13 no debe insertarse dentro de las opciones.');
  assert.equal(imageReport.imageBeforeOptions, true, 'La imagen del reactivo 13 debe aparecer en el planteamiento antes de las opciones.');
  await checkNoHorizontalOverflow(page, 'reactivo 13 en escritorio');
  await page.screenshot({ path: path.join(OUT_DIR, 'qa-reactivo13-desktop.png'), fullPage: true });

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(APP_URL, { waitUntil: 'networkidle' });
  await page.getByRole('button', { name: 'Iniciar examen' }).click();
  await advanceToExercise(page, 13);
  await waitForLoadedImages(page, '#reactivo-13 .visual-panel img', 1, 'planteamiento del reactivo 13 en móvil');
  const mobileOptionImages = await page.locator('#reactivo-13 .option-list img').count();
  assert.equal(mobileOptionImages, 0, 'Las opciones del reactivo 13 no deben contener imágenes en móvil.');
  await checkNoHorizontalOverflow(page, 'reactivo 13 en móvil');
  await page.screenshot({ path: path.join(OUT_DIR, 'qa-reactivo13-mobile.png'), fullPage: true });
}

async function runReactivo14FigureChecks(page) {
  log('Validando que el reactivo 14 muestre el apoyo visual de compras en el planteamiento.');

  await page.setViewportSize({ width: 1440, height: 1080 });
  await startExam(page);
  await advanceToExercise(page, 14);
  await page.locator('#reactivo-14').waitFor();
  await waitForLoadedImages(page, '#reactivo-14 .visual-panel img', 1, 'planteamiento del reactivo 14 en escritorio');

  const imageReport = await page.evaluate(() => {
    const card = document.querySelector('#reactivo-14');
    const promptImage = card?.querySelector('.prompt-panel .visual-panel img');
    const optionImages = card ? Array.from(card.querySelectorAll('.option-list img')) : [];
    const promptPanel = card?.querySelector('.prompt-panel');
    const optionList = card?.querySelector('.option-list');
    return promptImage
      ? {
          src: promptImage.getAttribute('src'),
          alt: promptImage.getAttribute('alt'),
          naturalWidth: promptImage.naturalWidth,
          naturalHeight: promptImage.naturalHeight,
          optionImageCount: optionImages.length,
          imageBeforeOptions: Boolean(promptPanel && optionList && (promptPanel.compareDocumentPosition(optionList) & Node.DOCUMENT_POSITION_FOLLOWING))
        }
      : null;
  });

  assert.ok(imageReport, 'No se detectó la imagen principal del reactivo 14.');
  assert.ok(imageReport.src.includes('reactivo-14-papeleria.png'), 'La imagen principal del reactivo 14 no corresponde al asset esperado.');
  assert.equal(
    imageReport.alt,
    'Diagrama de dos compras en papelería: dos cuadernos y una pluma cuestan 34 pesos; un cuaderno y dos plumas cuestan 26 pesos; el precio de una pluma queda como incógnita.',
    'El texto alternativo del reactivo 14 no describe el apoyo visual esperado.'
  );
  assert.ok(imageReport.naturalWidth > 0 && imageReport.naturalHeight > 0, 'La imagen principal del reactivo 14 no cargó correctamente.');
  assert.equal(imageReport.optionImageCount, 0, 'La imagen del reactivo 14 no debe insertarse dentro de las opciones.');
  assert.equal(imageReport.imageBeforeOptions, true, 'La imagen del reactivo 14 debe aparecer en el planteamiento antes de las opciones.');
  await checkNoHorizontalOverflow(page, 'reactivo 14 en escritorio');
  await page.screenshot({ path: path.join(OUT_DIR, 'qa-reactivo14-desktop.png'), fullPage: true });

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(APP_URL, { waitUntil: 'networkidle' });
  await page.getByRole('button', { name: 'Iniciar examen' }).click();
  await advanceToExercise(page, 14);
  await waitForLoadedImages(page, '#reactivo-14 .visual-panel img', 1, 'planteamiento del reactivo 14 en móvil');
  const mobileOptionImages = await page.locator('#reactivo-14 .option-list img').count();
  assert.equal(mobileOptionImages, 0, 'Las opciones del reactivo 14 no deben contener imágenes en móvil.');
  await checkNoHorizontalOverflow(page, 'reactivo 14 en móvil');
  await page.screenshot({ path: path.join(OUT_DIR, 'qa-reactivo14-mobile.png'), fullPage: true });
}

async function runReactivo15FigureChecks(page) {
  log('Validando que el reactivo 15 muestre el apoyo visual de proporción en el planteamiento.');

  await page.setViewportSize({ width: 1440, height: 1080 });
  await startExam(page);
  await advanceToExercise(page, 15);
  await page.locator('#reactivo-15').waitFor();
  await waitForLoadedImages(page, '#reactivo-15 .visual-panel img', 1, 'planteamiento del reactivo 15 en escritorio');

  const imageReport = await page.evaluate(() => {
    const card = document.querySelector('#reactivo-15');
    const promptImage = card?.querySelector('.prompt-panel .visual-panel img');
    const optionImages = card ? Array.from(card.querySelectorAll('.option-list img')) : [];
    const promptPanel = card?.querySelector('.prompt-panel');
    const optionList = card?.querySelector('.option-list');
    return promptImage
      ? {
          src: promptImage.getAttribute('src'),
          alt: promptImage.getAttribute('alt'),
          naturalWidth: promptImage.naturalWidth,
          naturalHeight: promptImage.naturalHeight,
          optionImageCount: optionImages.length,
          imageBeforeOptions: Boolean(promptPanel && optionList && (promptPanel.compareDocumentPosition(optionList) & Node.DOCUMENT_POSITION_FOLLOWING))
        }
      : null;
  });

  assert.ok(imageReport, 'No se detectó la imagen principal del reactivo 15.');
  assert.ok(imageReport.src.includes('reactivo-15-autobus-gasolina.png'), 'La imagen principal del reactivo 15 no corresponde al asset esperado.');
  assert.equal(
    imageReport.alt,
    'Diagrama de proporción: un autobús recorre 180 kilómetros con 15 litros de gasolina y debe estimarse cuánta gasolina necesita para recorrer 300 kilómetros.',
    'El texto alternativo del reactivo 15 no describe el apoyo visual esperado.'
  );
  assert.ok(imageReport.naturalWidth > 0 && imageReport.naturalHeight > 0, 'La imagen principal del reactivo 15 no cargó correctamente.');
  assert.equal(imageReport.optionImageCount, 0, 'La imagen del reactivo 15 no debe insertarse dentro de las opciones.');
  assert.equal(imageReport.imageBeforeOptions, true, 'La imagen del reactivo 15 debe aparecer en el planteamiento antes de las opciones.');
  await checkNoHorizontalOverflow(page, 'reactivo 15 en escritorio');
  await page.screenshot({ path: path.join(OUT_DIR, 'qa-reactivo15-desktop.png'), fullPage: true });

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(APP_URL, { waitUntil: 'networkidle' });
  await page.getByRole('button', { name: 'Iniciar examen' }).click();
  await advanceToExercise(page, 15);
  await waitForLoadedImages(page, '#reactivo-15 .visual-panel img', 1, 'planteamiento del reactivo 15 en móvil');
  const mobileOptionImages = await page.locator('#reactivo-15 .option-list img').count();
  assert.equal(mobileOptionImages, 0, 'Las opciones del reactivo 15 no deben contener imágenes en móvil.');
  await checkNoHorizontalOverflow(page, 'reactivo 15 en móvil');
  await page.screenshot({ path: path.join(OUT_DIR, 'qa-reactivo15-mobile.png'), fullPage: true });
}

async function runReactivo16FigureChecks(page) {
  log('Validando que el reactivo 16 muestre el apoyo visual de proporción en el planteamiento.');

  await page.setViewportSize({ width: 1440, height: 1080 });
  await startExam(page);
  await advanceToExercise(page, 16);
  await page.locator('#reactivo-16').waitFor();
  await waitForLoadedImages(page, '#reactivo-16 .visual-panel img', 1, 'planteamiento del reactivo 16 en escritorio');

  const imageReport = await page.evaluate(() => {
    const card = document.querySelector('#reactivo-16');
    const promptImage = card?.querySelector('.prompt-panel .visual-panel img');
    const optionImages = card ? Array.from(card.querySelectorAll('.option-list img')) : [];
    const promptPanel = card?.querySelector('.prompt-panel');
    const optionList = card?.querySelector('.option-list');
    return promptImage
      ? {
          src: promptImage.getAttribute('src'),
          alt: promptImage.getAttribute('alt'),
          naturalWidth: promptImage.naturalWidth,
          naturalHeight: promptImage.naturalHeight,
          optionImageCount: optionImages.length,
          imageBeforeOptions: Boolean(promptPanel && optionList && (promptPanel.compareDocumentPosition(optionList) & Node.DOCUMENT_POSITION_FOLLOWING))
        }
      : null;
  });

  assert.ok(imageReport, 'No se detectó la imagen principal del reactivo 16.');
  assert.ok(imageReport.src.includes('reactivo-16-impresora-paginas.png'), 'La imagen principal del reactivo 16 no corresponde al asset esperado.');
  assert.equal(
    imageReport.alt,
    'Diagrama de proporción: una impresora genera 84 páginas en 7 minutos y debe estimarse cuántos minutos tarda en generar 144 páginas.',
    'El texto alternativo del reactivo 16 no describe el apoyo visual esperado.'
  );
  assert.ok(imageReport.naturalWidth > 0 && imageReport.naturalHeight > 0, 'La imagen principal del reactivo 16 no cargó correctamente.');
  assert.equal(imageReport.optionImageCount, 0, 'La imagen del reactivo 16 no debe insertarse dentro de las opciones.');
  assert.equal(imageReport.imageBeforeOptions, true, 'La imagen del reactivo 16 debe aparecer en el planteamiento antes de las opciones.');
  await checkNoHorizontalOverflow(page, 'reactivo 16 en escritorio');
  await page.screenshot({ path: path.join(OUT_DIR, 'qa-reactivo16-desktop.png'), fullPage: true });

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(APP_URL, { waitUntil: 'networkidle' });
  await page.getByRole('button', { name: 'Iniciar examen' }).click();
  await advanceToExercise(page, 16);
  await waitForLoadedImages(page, '#reactivo-16 .visual-panel img', 1, 'planteamiento del reactivo 16 en móvil');
  const mobileOptionImages = await page.locator('#reactivo-16 .option-list img').count();
  assert.equal(mobileOptionImages, 0, 'Las opciones del reactivo 16 no deben contener imágenes en móvil.');
  await checkNoHorizontalOverflow(page, 'reactivo 16 en móvil');
  await page.screenshot({ path: path.join(OUT_DIR, 'qa-reactivo16-mobile.png'), fullPage: true });
}

async function runReactivo44FigureChecks(page) {
  log('Validando que el reactivo 44 muestre el modelo de partículas en el planteamiento.');

  await page.setViewportSize({ width: 1440, height: 1080 });
  await startExam(page);
  await advanceToExercise(page, 44);
  await page.locator('#reactivo-44').waitFor();
  await waitForLoadedImages(page, '#reactivo-44 .visual-panel img', 1, 'planteamiento del reactivo 44 en escritorio');

  const imageReport = await page.evaluate(() => {
    const card = document.querySelector('#reactivo-44');
    const promptImage = card?.querySelector('.prompt-panel .visual-panel img');
    const optionImages = card ? Array.from(card.querySelectorAll('.option-list img')) : [];
    const promptPanel = card?.querySelector('.prompt-panel');
    const optionList = card?.querySelector('.option-list');
    return promptImage
      ? {
          src: promptImage.getAttribute('src'),
          alt: promptImage.getAttribute('alt'),
          naturalWidth: promptImage.naturalWidth,
          naturalHeight: promptImage.naturalHeight,
          optionImageCount: optionImages.length,
          imageBeforeOptions: Boolean(promptPanel && optionList && (promptPanel.compareDocumentPosition(optionList) & Node.DOCUMENT_POSITION_FOLLOWING))
        }
      : null;
  });

  assert.ok(imageReport, 'No se detectó la imagen principal del reactivo 44.');
  assert.ok(imageReport.src.includes('reactivo-44-modelo-particulas.png'), 'La imagen principal del reactivo 44 no corresponde al asset esperado.');
  assert.equal(
    imageReport.alt,
    'Modelo de partículas con tres conjuntos. X muestra átomos individuales del mismo tipo. Q muestra moléculas iguales formadas por dos átomos distintos unidos. Z muestra una mezcla de partículas distintas, con átomos sueltos y moléculas combinadas.',
    'El texto alternativo del reactivo 44 no describe el apoyo visual esperado.'
  );
  assert.ok(imageReport.naturalWidth > 0 && imageReport.naturalHeight > 0, 'La imagen principal del reactivo 44 no cargó correctamente.');
  assert.equal(imageReport.optionImageCount, 0, 'La imagen del reactivo 44 no debe insertarse dentro de las opciones.');
  assert.equal(imageReport.imageBeforeOptions, true, 'La imagen del reactivo 44 debe aparecer en el planteamiento antes de las opciones.');
  await checkNoHorizontalOverflow(page, 'reactivo 44 en escritorio');
  await page.screenshot({ path: path.join(OUT_DIR, 'qa-reactivo44-desktop.png'), fullPage: true });

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(APP_URL, { waitUntil: 'networkidle' });
  await page.getByRole('button', { name: 'Iniciar examen' }).click();
  await advanceToExercise(page, 44);
  await waitForLoadedImages(page, '#reactivo-44 .visual-panel img', 1, 'planteamiento del reactivo 44 en móvil');
  const mobileOptionImages = await page.locator('#reactivo-44 .option-list img').count();
  assert.equal(mobileOptionImages, 0, 'Las opciones del reactivo 44 no deben contener imágenes en móvil.');
  await checkNoHorizontalOverflow(page, 'reactivo 44 en móvil');
  await page.screenshot({ path: path.join(OUT_DIR, 'qa-reactivo44-mobile.png'), fullPage: true });
}

async function runReactivo74FigureChecks(page) {
  log('Validando que el reactivo 74 muestre el diagrama de paralelas y transversal en el planteamiento.');

  await page.setViewportSize({ width: 1440, height: 1080 });
  await startExam(page);
  await advanceToExercise(page, 74);
  await page.locator('#reactivo-74').waitFor();
  await waitForLoadedImages(page, '#reactivo-74 .visual-panel img', 1, 'planteamiento del reactivo 74 en escritorio');

  const imageReport = await page.evaluate(() => {
    const card = document.querySelector('#reactivo-74');
    const promptImage = card?.querySelector('.prompt-panel .visual-panel img');
    const optionImages = card ? Array.from(card.querySelectorAll('.option-list img')) : [];
    const promptPanel = card?.querySelector('.prompt-panel');
    const optionList = card?.querySelector('.option-list');
    return promptImage
      ? {
          src: promptImage.getAttribute('src'),
          alt: promptImage.getAttribute('alt'),
          naturalWidth: promptImage.naturalWidth,
          naturalHeight: promptImage.naturalHeight,
          optionImageCount: optionImages.length,
          imageBeforeOptions: Boolean(promptPanel && optionList && (promptPanel.compareDocumentPosition(optionList) & Node.DOCUMENT_POSITION_FOLLOWING))
        }
      : null;
  });

  assert.ok(imageReport, 'No se detectó la imagen principal del reactivo 74.');
  assert.ok(imageReport.src.includes('reactivo-74-angulos-alternos-internos.png'), 'La imagen principal del reactivo 74 no corresponde al asset esperado.');
  assert.equal(
    imageReport.alt,
    'Diagrama con dos rectas paralelas horizontales cortadas por una transversal inclinada. En la intersección superior los ángulos están numerados 1 arriba izquierda, 2 arriba derecha, 3 abajo derecha y 4 abajo izquierda. En la intersección inferior están numerados 5 arriba izquierda, 6 arriba derecha, 7 abajo derecha y 8 abajo izquierda.',
    'El texto alternativo del reactivo 74 no describe el apoyo visual esperado.'
  );
  assert.ok(imageReport.naturalWidth > 0 && imageReport.naturalHeight > 0, 'La imagen principal del reactivo 74 no cargó correctamente.');
  assert.equal(imageReport.optionImageCount, 0, 'La imagen del reactivo 74 no debe insertarse dentro de las opciones.');
  assert.equal(imageReport.imageBeforeOptions, true, 'La imagen del reactivo 74 debe aparecer en el planteamiento antes de las opciones.');
  await checkNoHorizontalOverflow(page, 'reactivo 74 en escritorio');
  await page.screenshot({ path: path.join(OUT_DIR, 'qa-reactivo74-desktop.png'), fullPage: true });

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(APP_URL, { waitUntil: 'networkidle' });
  await page.getByRole('button', { name: 'Iniciar examen' }).click();
  await advanceToExercise(page, 74);
  await waitForLoadedImages(page, '#reactivo-74 .visual-panel img', 1, 'planteamiento del reactivo 74 en móvil');
  const mobileOptionImages = await page.locator('#reactivo-74 .option-list img').count();
  assert.equal(mobileOptionImages, 0, 'Las opciones del reactivo 74 no deben contener imágenes en móvil.');
  await checkNoHorizontalOverflow(page, 'reactivo 74 en móvil');
  await page.screenshot({ path: path.join(OUT_DIR, 'qa-reactivo74-mobile.png'), fullPage: true });
}

async function runReactivo94FigureChecks(page) {
  log('Validando que el reactivo 94 muestre el mapa de coordenadas geográficas en el planteamiento.');

  await page.setViewportSize({ width: 1440, height: 1080 });
  await startExam(page);
  await advanceToExercise(page, 94);
  await page.locator('#reactivo-94').waitFor();
  await waitForLoadedImages(page, '#reactivo-94 .visual-panel img', 1, 'planteamiento del reactivo 94 en escritorio');

  const imageReport = await page.evaluate(() => {
    const card = document.querySelector('#reactivo-94');
    const promptImage = card?.querySelector('.prompt-panel .visual-panel img');
    const optionImages = card ? Array.from(card.querySelectorAll('.option-list img')) : [];
    const promptPanel = card?.querySelector('.prompt-panel');
    const optionList = card?.querySelector('.option-list');
    return promptImage
      ? {
          src: promptImage.getAttribute('src'),
          alt: promptImage.getAttribute('alt'),
          naturalWidth: promptImage.naturalWidth,
          naturalHeight: promptImage.naturalHeight,
          optionImageCount: optionImages.length,
          imageBeforeOptions: Boolean(promptPanel && optionList && (promptPanel.compareDocumentPosition(optionList) & Node.DOCUMENT_POSITION_FOLLOWING))
        }
      : null;
  });

  assert.ok(imageReport, 'No se detectó la imagen principal del reactivo 94.');
  assert.ok(imageReport.src.includes('reactivo-94-coordenadas-geograficas.png'), 'La imagen principal del reactivo 94 no corresponde al asset esperado.');
  assert.equal(
    imageReport.alt,
    'Mapa mundial con retícula de coordenadas geográficas. Incluye referencias de norte, sur, este, oeste, ecuador y meridiano de Greenwich. Los ejes muestran valores de latitud y longitud; un punto verde marca la ubicación solicitada sin escribir la coordenada como respuesta.',
    'El texto alternativo del reactivo 94 no describe el apoyo visual esperado.'
  );
  assert.ok(imageReport.naturalWidth > 0 && imageReport.naturalHeight > 0, 'La imagen principal del reactivo 94 no cargó correctamente.');
  assert.equal(imageReport.optionImageCount, 0, 'La imagen del reactivo 94 no debe insertarse dentro de las opciones.');
  assert.equal(imageReport.imageBeforeOptions, true, 'La imagen del reactivo 94 debe aparecer en el planteamiento antes de las opciones.');
  await checkNoHorizontalOverflow(page, 'reactivo 94 en escritorio');
  await page.screenshot({ path: path.join(OUT_DIR, 'qa-reactivo94-desktop.png'), fullPage: true });

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(APP_URL, { waitUntil: 'networkidle' });
  await page.getByRole('button', { name: 'Iniciar examen' }).click();
  await advanceToExercise(page, 94);
  await waitForLoadedImages(page, '#reactivo-94 .visual-panel img', 1, 'planteamiento del reactivo 94 en móvil');
  const mobileOptionImages = await page.locator('#reactivo-94 .option-list img').count();
  assert.equal(mobileOptionImages, 0, 'Las opciones del reactivo 94 no deben contener imágenes en móvil.');
  await checkNoHorizontalOverflow(page, 'reactivo 94 en móvil');
  await page.screenshot({ path: path.join(OUT_DIR, 'qa-reactivo94-mobile.png'), fullPage: true });
}

const TABLE_VISUAL_EXPECTATIONS = [
  {
    number: 72,
    snippets: ['Producto', 'Lunes', 'Martes', 'Miércoles', 'Cuadernos', 'Plumas', 'Colores']
  },
  {
    number: 106,
    snippets: ['Tiempo (s):', 'Distancia (m):', '0  10  20  30']
  },
  {
    number: 107,
    snippets: ['Tiempo (h):', 'Velocidad (km/h):', '0  60  60  30   0']
  }
];

async function answerThroughExercise(page, fromNumber, targetNumber) {
  for (let number = fromNumber; number < targetNumber; number += 1) {
    const exercise = await getExerciseData(page, number - 1);
    await page.locator(`[data-action="answer"][data-id="${exercise.id}"]`).first().waitFor();
    await clickOption(page, exercise.id, exercise.correctOption);
  }
}

async function checkTableVisual(page, expectation, label, shouldScroll) {
  const selector = `#reactivo-${expectation.number} .prompt-panel .visual-panel-preformatted`;
  await page.locator(selector).waitFor();

  const report = await page.evaluate(({ number, snippets, expectScroll }) => {
    const card = document.querySelector(`#reactivo-${number}`);
    const promptPanel = card?.querySelector('.prompt-panel');
    const panel = promptPanel?.querySelector('.visual-panel-preformatted');
    const pre = panel?.querySelector('pre');
    const promptRect = promptPanel?.getBoundingClientRect();
    const panelRect = panel?.getBoundingClientRect();

    if (!card || !promptPanel || !panel || !pre || !promptRect || !panelRect) {
      return { hasElements: false };
    }

    panel.scrollLeft = 90;
    const styles = getComputedStyle(panel);
    const preStyles = getComputedStyle(pre);
    const text = pre.textContent || '';

    return {
      hasElements: true,
      includesSnippets: snippets.every((snippet) => text.includes(snippet)),
      pageOverflow: document.documentElement.scrollWidth > window.innerWidth,
      panelFitsViewport: panelRect.left >= -1 && panelRect.right <= window.innerWidth + 1,
      panelFitsPrompt: panelRect.left >= promptRect.left - 1 && panelRect.right <= promptRect.right + 1,
      panelOverflowX: styles.overflowX,
      panelCanScroll: panel.scrollWidth > panel.clientWidth,
      panelScrollMoved: expectScroll ? panel.scrollLeft > 0 : true,
      preWhiteSpace: preStyles.whiteSpace,
      preWidth: pre.getBoundingClientRect().width,
      panelWidth: panelRect.width
    };
  }, { number: expectation.number, snippets: expectation.snippets, expectScroll: shouldScroll });

  assert.equal(report.hasElements, true, `No se encontro la tabla preformateada del reactivo ${expectation.number} en ${label}.`);
  assert.equal(report.includesSnippets, true, `La tabla del reactivo ${expectation.number} no conserva el contenido esperado en ${label}.`);
  assert.equal(report.pageOverflow, false, `La tabla del reactivo ${expectation.number} provoco desborde horizontal de pagina en ${label}.`);
  assert.equal(report.panelFitsViewport, true, `El panel de tabla del reactivo ${expectation.number} se salio del viewport en ${label}.`);
  assert.equal(report.panelFitsPrompt, true, `El panel de tabla del reactivo ${expectation.number} se salio del planteamiento en ${label}.`);
  assert.ok(['auto', 'scroll'].includes(report.panelOverflowX), `El panel del reactivo ${expectation.number} no permite desplazamiento horizontal interno en ${label}.`);
  assert.equal(report.preWhiteSpace, 'pre', `La tabla del reactivo ${expectation.number} no conserva columnas con white-space: pre en ${label}.`);

  if (shouldScroll) {
    assert.equal(report.panelCanScroll, true, `La tabla del reactivo ${expectation.number} no genera scroll interno en ${label}.`);
    assert.equal(report.panelScrollMoved, true, `La tabla del reactivo ${expectation.number} no respondio al desplazamiento horizontal en ${label}.`);
    assert.ok(report.preWidth > report.panelWidth, `La tabla del reactivo ${expectation.number} no tiene mas ancho interno que su panel en ${label}.`);
  }
}

async function runTableScrollChecks(page) {
  log('Validando desplazamiento horizontal interno de tablas en reactivos 72, 106 y 107.');

  await page.setViewportSize({ width: 390, height: 844 });
  await startExam(page);
  await answerThroughExercise(page, 1, 72);

  let currentNumber = 72;
  for (const expectation of TABLE_VISUAL_EXPECTATIONS) {
    await answerThroughExercise(page, currentNumber, expectation.number);
    await page.locator(`#reactivo-${expectation.number}`).waitFor();
    await checkTableVisual(page, expectation, 'movil activo', true);
    await page.screenshot({ path: path.join(OUT_DIR, `qa-reactivo${expectation.number}-table-mobile.png`), fullPage: true });

    const exercise = await getExerciseData(page, expectation.number - 1);
    await clickOption(page, exercise.id, exercise.correctOption);
    await page.locator(`#reactivo-${expectation.number} .card-toggle`).click();
    await checkTableVisual(page, expectation, 'movil en revision', true);
    currentNumber = expectation.number + 1;
  }

  await page.setViewportSize({ width: 1440, height: 1080 });
  await startExam(page);
  await answerThroughExercise(page, 1, 72);
  currentNumber = 72;
  for (const expectation of TABLE_VISUAL_EXPECTATIONS) {
    await answerThroughExercise(page, currentNumber, expectation.number);
    await page.locator(`#reactivo-${expectation.number}`).waitFor();
    await checkTableVisual(page, expectation, 'escritorio activo', false);
    await page.screenshot({ path: path.join(OUT_DIR, `qa-reactivo${expectation.number}-table-desktop.png`), fullPage: true });
    currentNumber = expectation.number;
  }
}

async function checkRemovedInstructionOnCurrentExercise(page, targetNumber) {
  const removedText = 'Lee el planteamiento, revisa el apoyo visual si aparece y selecciona una sola opción.';
  const exerciseId = `reactivo-${targetNumber}`;
  await page.locator(`#${exerciseId}`).waitFor();

  const report = await page.evaluate(({ text, id }) => {
    const card = document.querySelector(`#${id}`);
    const title = card?.querySelector('.card-title');
    return {
      hasRemovedText: Boolean(card?.textContent?.includes(text)),
      heading: title?.querySelector('h2')?.textContent?.trim() || '',
      headerParagraphCount: title?.querySelectorAll('p').length || 0
    };
  }, { text: removedText, id: exerciseId });

  assert.equal(report.hasRemovedText, false, `El reactivo ${targetNumber} todavía muestra la instrucción redundante.`);
  assert.equal(report.heading, 'Resuelve este reactivo para continuar', `El encabezado principal del reactivo ${targetNumber} cambió inesperadamente.`);
  assert.equal(report.headerParagraphCount, 0, `El encabezado del reactivo ${targetNumber} no debe conservar el párrafo instructivo.`);
}

async function runInstructionRemovalRangeChecks(page, startNumber, endNumber) {
  log(`Validando que los reactivos ${startNumber} a ${endNumber} no muestren la instrucción redundante en el encabezado.`);

  await page.setViewportSize({ width: 1440, height: 1080 });
  await startExam(page);
  await advanceToExercise(page, startNumber);
  for (let targetNumber = startNumber; targetNumber <= endNumber; targetNumber += 1) {
    await checkRemovedInstructionOnCurrentExercise(page, targetNumber);
    await checkNoHorizontalOverflow(page, `reactivo ${targetNumber} en escritorio`);
    if (targetNumber === startNumber || targetNumber === endNumber) {
      await page.screenshot({ path: path.join(OUT_DIR, `qa-reactivo${targetNumber}-desktop.png`), fullPage: true });
    }
    if (targetNumber < endNumber) {
      const exercise = await getExerciseData(page, targetNumber - 1);
      await clickOption(page, exercise.id, exercise.correctOption);
    }
  }

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(APP_URL, { waitUntil: 'networkidle' });
  await page.getByRole('button', { name: 'Iniciar examen' }).click();
  await advanceToExercise(page, startNumber);
  for (let targetNumber = startNumber; targetNumber <= endNumber; targetNumber += 1) {
    await checkRemovedInstructionOnCurrentExercise(page, targetNumber);
    await checkNoHorizontalOverflow(page, `reactivo ${targetNumber} en móvil`);
    if (targetNumber === startNumber || targetNumber === endNumber) {
      await page.screenshot({ path: path.join(OUT_DIR, `qa-reactivo${targetNumber}-mobile.png`), fullPage: true });
    }
    if (targetNumber < endNumber) {
      const exercise = await getExerciseData(page, targetNumber - 1);
      await clickOption(page, exercise.id, exercise.correctOption);
    }
  }
}

async function runTimeoutChecks(page) {
  log('Validando cierre por tiempo y tratamiento de reactivos pendientes.');

  await page.setViewportSize({ width: 390, height: 844 });
  await startExam(page);
  const first = await getExerciseData(page, 0);
  const wrongOption = first.options.find((option) => option !== first.correctOption);
  assert.ok(wrongOption, 'No se encontró una opción incorrecta para validar cierre por tiempo.');
  await clickOption(page, first.id, wrongOption);

  await page.evaluate(() => {
    window.__IFR_EXAM_DEBUG__.finishExam('time_expired');
  });

  await page.getByRole('heading', { name: 'Resultado final' }).waitFor();
  assert.equal(await page.locator('.floating-review').count(), 0, 'El recordatorio flotante debía cerrarse al agotar el tiempo.');
  const finalPanel = page.locator('#resultado-final');
  assert.equal((await finalPanel.locator('.final-metric-card.answered strong').innerText()).trim(), '1', 'El cierre por tiempo no conservó los reactivos contestados.');
  assert.equal((await finalPanel.locator('.final-metric-card.incorrect strong').innerText()).trim(), '1', 'El cierre por tiempo no conservó el error registrado.');
  await finalPanel.locator('.reinforcement-group').first().waitFor();
  const unansweredCards = page.getByRole('heading', { name: 'Reactivo no respondido' });
  await unansweredCards.first().waitFor();
  assert.ok(await unansweredCards.count() > 0, 'Se esperaba al menos un reactivo marcado como no respondido tras agotar el tiempo.');
  await expectResultDownload(page, 'tiempo');
  await checkNoHorizontalOverflow(page, 'cierre móvil por tiempo');
}

async function runNaturalCompletionChecks(page) {
  log('Validando cierre natural al contestar todos los reactivos.');

  await page.setViewportSize({ width: 1280, height: 960 });
  await startExam(page);
  const total = await page.evaluate(() => window.IFR_APP_DATA.exercises.length);

  for (let index = 0; index < total; index += 1) {
    const exercise = await getExerciseData(page, index);
    await page.locator(`[data-action="answer"][data-id="${exercise.id}"]`).first().waitFor();
    await clickOption(page, exercise.id, exercise.correctOption);
  }

  await page.getByRole('heading', { name: 'Resultado final' }).waitFor();
  const finalPanel = page.locator('#resultado-final');
  assert.equal((await finalPanel.locator('.final-metric-card.answered strong').innerText()).trim(), String(total), 'El cierre natural no registró todos los reactivos contestados.');
  assert.equal((await finalPanel.locator('.final-metric-card.correct strong').innerText()).trim(), String(total), 'El cierre natural no conservó todos los aciertos.');
  assert.equal((await finalPanel.locator('.final-metric-card.incorrect strong').innerText()).trim(), '0', 'El cierre natural marcó errores inexistentes.');
  await finalPanel.getByText('No se registraron reactivos incorrectos.').waitFor();
  await checkNoHorizontalOverflow(page, 'cierre natural completo');
  await page.screenshot({ path: path.join(OUT_DIR, 'qa-natural-completion.png'), fullPage: true });
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
    viewport: { width: 1440, height: 1080 },
    acceptDownloads: true
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
    await runReactivo7FigureChecks(page);
    await runPromptMarkChecks(page);
    await runReadingCapsuleChecks(page);
    await runReactivo80TextBaseChecks(page);
    await runSharedTextBaseChecks(page);
    await runReactivo8FigureChecks(page);
    await runReactivo11FigureChecks(page);
    await runReactivo12FigureChecks(page);
    await runReactivo13FigureChecks(page);
    await runReactivo14FigureChecks(page);
    await runReactivo15FigureChecks(page);
    await runReactivo16FigureChecks(page);
    await runReactivo44FigureChecks(page);
    await runReactivo74FigureChecks(page);
    await runReactivo94FigureChecks(page);
    await runTableScrollChecks(page);
    await runInstructionRemovalRangeChecks(page, 17, 43);
    await runInstructionRemovalRangeChecks(page, 45, 73);
    await runNaturalCompletionChecks(page);
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
