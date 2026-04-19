const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const SOURCE_FILE = path.join(ROOT, 'Examen simulación 1.txt');
const OUTPUT_FILE = path.join(ROOT, 'exam-data.js');

const FIELD_LABELS = {
  prompt: 'Planteamiento del problema:',
  options: 'Opciones:',
  hint: 'Pista sin ofrecer la respuesta:',
  correctAnswer: 'Respuesta correcta:',
  correctArgument: 'Argumento de la respuesta correcta:',
  incorrectArguments: 'Argumentos de las opciones incorrectas:'
};

function slugify(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-');
}

function toTitleCase(value) {
  const smallWords = new Set(['y', 'e', 'o', 'de', 'del', 'la', 'las', 'el', 'los', 'en']);
  return String(value || '')
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .map((word, index) => {
      if (index > 0 && smallWords.has(word)) return word;
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}

function trimBlock(lines) {
  const copy = [...lines];
  while (copy.length && !copy[0].trim()) copy.shift();
  while (copy.length && !copy[copy.length - 1].trim()) copy.pop();
  return copy;
}

function findLineIndex(lines, predicate) {
  for (let index = 0; index < lines.length; index += 1) {
    if (predicate(lines[index], index)) return index;
  }
  return -1;
}

function sliceBetween(lines, startIndex, endIndex) {
  return trimBlock(lines.slice(startIndex, endIndex));
}

function parseLabeledItems(lines) {
  const items = [];
  let current = null;

  for (const line of lines) {
    const match = line.match(/^([a-e])\)\s*(.*)$/i);
    if (match) {
      if (current) {
        current.text = trimBlock(current.lines).join('\n').trim();
        delete current.lines;
        items.push(current);
      }
      current = {
        label: match[1].toLowerCase(),
        lines: match[2] ? [match[2]] : []
      };
      continue;
    }

    if (current) {
      current.lines.push(line);
    }
  }

  if (current) {
    current.text = trimBlock(current.lines).join('\n').trim();
    delete current.lines;
    items.push(current);
  }

  return items;
}

function isVisualLine(line) {
  const value = line.trim();
  if (!value) return false;
  if (/[┌┬┐│├┼┤└┴┘]/.test(value)) return true;
  if (/[●○■□▲△◆◇]/.test(value)) return true;
  if (/^Figura\b/i.test(value)) return true;
  if (/^(Tiempo|Distancia|Velocidad|Producto)\b/.test(value)) return true;
  if (/^\d+(?:\s{2,}\d+){2,}$/.test(value)) return true;
  if (/^(?:[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+(?:\s+[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+)?\s{2,})+[A-Za-zÁÉÍÓÚÜÑáéíóúüñ0-9]+/.test(value)) return true;
  if (/\S+\s{2,}\S+/.test(value) && value.length <= 80) return true;
  return false;
}

function splitPromptAndVisual(lines) {
  const visualIndices = [];
  lines.forEach((line, index) => {
    if (isVisualLine(line)) visualIndices.push(index);
  });

  if (!visualIndices.length) {
    return {
      prompt: trimBlock(lines).join('\n').trim().replace(/\n{3,}/g, '\n\n'),
      visual: { kind: 'none', content: '' }
    };
  }

  const firstVisual = visualIndices[0];
  const lastVisual = visualIndices[visualIndices.length - 1];
  const promptLines = [...lines.slice(0, firstVisual), ...lines.slice(lastVisual + 1)];
  const visualLines = lines.slice(firstVisual, lastVisual + 1);

  return {
    prompt: trimBlock(promptLines).join('\n').trim().replace(/\n{3,}/g, '\n\n'),
    visual: {
      kind: 'preformatted',
      content: trimBlock(visualLines).join('\n')
    }
  };
}

function shouldPreformat(value) {
  return /\n/.test(value) || /[┌┬┐│├┼┤└┴┘●○■□▲△◆◇]/.test(value) || /\S+\s{2,}\S+/.test(value);
}

function collectAreaHeaders(text) {
  const areas = [];
  const pattern = /^ÁREA TEMÁTICA:\s*(.+)\r?\nRANGO:\s*REACTIVOS\s*(\d+)\s*AL\s*(\d+)/gm;
  let match = pattern.exec(text);

  while (match) {
    const name = toTitleCase(match[1].trim());
    areas.push({
      id: slugify(name),
      name,
      rangeStart: Number(match[2]),
      rangeEnd: Number(match[3])
    });
    match = pattern.exec(text);
  }

  return areas;
}

function parseReactivoBlock(lines, areasByName) {
  const numberMatch = lines[0].match(/^REACTIVO\s+(\d+)$/);
  if (!numberMatch) {
    throw new Error(`No se pudo leer el número del bloque: ${lines[0]}`);
  }

  let bodyLines = lines.slice(1);
  const outerSectionStart = findLineIndex(
    bodyLines,
    (line, index) =>
      line.trim() === '---' ||
      (/^ÁREA TEMÁTICA:\s*/.test(line) && index + 1 < bodyLines.length && /^RANGO:\s*/.test(bodyLines[index + 1]))
  );

  if (outerSectionStart >= 0) {
    bodyLines = bodyLines.slice(0, outerSectionStart);
  }

  bodyLines = trimBlock(bodyLines);

  const areaLineIndex = findLineIndex(bodyLines, (line) => /^Área temática:\s*/.test(line));
  const blockLineIndex = findLineIndex(bodyLines, (line) => /^Bloque que corresponde al área temática:\s*/.test(line));
  const promptIndex = bodyLines.indexOf(FIELD_LABELS.prompt);
  const optionsIndex = bodyLines.indexOf(FIELD_LABELS.options);
  const hintIndex = bodyLines.indexOf(FIELD_LABELS.hint);
  const correctIndex = bodyLines.indexOf(FIELD_LABELS.correctAnswer);
  const correctArgIndex = bodyLines.indexOf(FIELD_LABELS.correctArgument);
  const incorrectArgsIndex = bodyLines.indexOf(FIELD_LABELS.incorrectArguments);

  if ([areaLineIndex, blockLineIndex, promptIndex, optionsIndex, hintIndex, correctIndex, correctArgIndex, incorrectArgsIndex].some((index) => index < 0)) {
    throw new Error(`Faltan encabezados en el reactivo ${numberMatch[1]}`);
  }

  const areaName = bodyLines[areaLineIndex].replace(/^Área temática:\s*/, '').trim();
  const block = bodyLines[blockLineIndex].replace(/^Bloque que corresponde al área temática:\s*/, '').trim();
  const promptLines = sliceBetween(bodyLines, promptIndex + 1, optionsIndex);
  const optionLines = sliceBetween(bodyLines, optionsIndex + 1, hintIndex);
  const hintLines = sliceBetween(bodyLines, hintIndex + 1, correctIndex);
  const correctAnswerLines = sliceBetween(bodyLines, correctIndex + 1, correctArgIndex);
  const correctArgumentLines = sliceBetween(bodyLines, correctArgIndex + 1, incorrectArgsIndex);
  const incorrectArgumentLines = sliceBetween(bodyLines, incorrectArgsIndex + 1, bodyLines.length);

  const promptParts = splitPromptAndVisual(promptLines);
  const options = parseLabeledItems(optionLines).map((option) => ({
    label: option.label,
    text: option.text,
    kind: shouldPreformat(option.text) ? 'preformatted' : 'text'
  }));
  const correctAnswer = parseLabeledItems(correctAnswerLines)[0];
  const incorrectArguments = parseLabeledItems(incorrectArgumentLines).reduce((accumulator, item) => {
    accumulator[item.label] = item.text;
    return accumulator;
  }, {});

  if (!correctAnswer) {
    throw new Error(`El reactivo ${numberMatch[1]} no tiene respuesta correcta legible.`);
  }

  const correctOption = options.find((option) => option.label === correctAnswer.label);
  if (!correctOption) {
    throw new Error(`La opción correcta del reactivo ${numberMatch[1]} no coincide con las opciones.`);
  }

  const areaId = slugify(areaName);
  const declaredArea = areasByName.get(areaId);

  return {
    id: `reactivo-${numberMatch[1]}`,
    number: Number(numberMatch[1]),
    areaId,
    areaName,
    block,
    prompt: promptParts.prompt,
    options,
    correctOption: correctOption.label,
    correctOptionText: correctOption.text,
    hint: hintLines.join('\n').trim(),
    correctArgument: correctArgumentLines.join('\n').trim(),
    incorrectArgumentsByOption: incorrectArguments,
    visual: promptParts.visual,
    sourceOrder: Number(numberMatch[1]),
    rangeStart: declaredArea ? declaredArea.rangeStart : null,
    rangeEnd: declaredArea ? declaredArea.rangeEnd : null
  };
}

function main() {
  const text = fs.readFileSync(SOURCE_FILE, 'utf8').replace(/\r\n/g, '\n');
  const areas = collectAreaHeaders(text);
  const areasByName = new Map(areas.map((area) => [area.id, area]));
  const lines = text.split('\n');
  const starts = [];

  lines.forEach((line, index) => {
    if (/^REACTIVO\s+\d+$/.test(line.trim())) {
      starts.push(index);
    }
  });

  const exercises = starts.map((startIndex, index) => {
    const endIndex = index + 1 < starts.length ? starts[index + 1] : lines.length;
    return parseReactivoBlock(lines.slice(startIndex, endIndex), areasByName);
  });

  const areaCountMap = exercises.reduce((accumulator, exercise) => {
    accumulator[exercise.areaId] = (accumulator[exercise.areaId] || 0) + 1;
    return accumulator;
  }, {});

  const normalizedAreas = areas.map((area) => ({
    ...area,
    totalExercises: areaCountMap[area.id] || 0
  }));

  const data = {
    meta: {
      title: 'Instituto Fernando Ramírez · Examen simulación 1 ECOEMS',
      durationSeconds: 10800,
      totalExercises: exercises.length,
      scoreMode: 'raw+percent',
      generatedAt: new Date().toISOString()
    },
    areas: normalizedAreas,
    exercises
  };

  const output = `window.IFR_APP_DATA = ${JSON.stringify(data, null, 2)};\n`;
  fs.writeFileSync(OUTPUT_FILE, output, 'utf8');

  console.log(`Generado ${path.basename(OUTPUT_FILE)} con ${data.meta.totalExercises} reactivos y ${data.areas.length} áreas.`);
}

main();
