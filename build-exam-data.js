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

const REACTIVO_8_PROMPT_IMAGE = {
  src: 'assets/reactivo-8/prompt/reactivo-8-secuencia.png',
  alt: 'Secuencia con tres figuras. La primera tiene un cuadro y un triángulo arriba. La segunda tiene dos cuadros y un triángulo abajo. La tercera tiene tres cuadros y un triángulo arriba.'
};

const REACTIVO_8_OPTION_IMAGES = {
  a: {
    src: 'assets/reactivo-8/options/reactivo-8-opcion-a.png',
    alt: 'Opción A. Cuatro cuadros con un triángulo abajo.'
  },
  b: {
    src: 'assets/reactivo-8/options/reactivo-8-opcion-b.png',
    alt: 'Opción B. Cuatro cuadros con un triángulo arriba.'
  },
  c: {
    src: 'assets/reactivo-8/options/reactivo-8-opcion-c.png',
    alt: 'Opción C. Tres cuadros con un triángulo abajo.'
  },
  d: {
    src: 'assets/reactivo-8/options/reactivo-8-opcion-d.png',
    alt: 'Opción D. Cinco cuadros con un triángulo abajo.'
  },
  e: {
    src: 'assets/reactivo-8/options/reactivo-8-opcion-e.png',
    alt: 'Opción E. Cuatro cuadros con un círculo al centro.'
  }
};

const REACTIVO_11_PROMPT_IMAGE = {
  src: 'assets/reactivo-11/prompt/reactivo-11-cuadricula.png',
  alt: 'Cuadrícula rectangular formada por 3 columnas y 2 filas de cuadrados iguales.'
};

const REACTIVO_12_PROMPT_IMAGE = {
  src: 'assets/reactivo-12/prompt/reactivo-12-hexagonos.png',
  alt: 'Figura formada por un hexágono central rodeado por seis hexágonos iguales; el contorno exterior forma un hexágono mayor.'
};

const REACTIVO_13_PROMPT_IMAGE = {
  src: 'assets/reactivo-13/prompt/reactivo-13-residuos.png',
  alt: 'Diagrama de un número N que debe cumplir tres condiciones: al dividirse entre 4 deja residuo 3, entre 5 deja residuo 4 y entre 3 deja residuo 0.'
};

const REACTIVO_14_PROMPT_IMAGE = {
  src: 'assets/reactivo-14/prompt/reactivo-14-papeleria.png',
  alt: 'Diagrama de dos compras en papelería: dos cuadernos y una pluma cuestan 34 pesos; un cuaderno y dos plumas cuestan 26 pesos; el precio de una pluma queda como incógnita.'
};

const REACTIVO_15_PROMPT_IMAGE = {
  src: 'assets/reactivo-15/prompt/reactivo-15-autobus-gasolina.png',
  alt: 'Diagrama de proporción: un autobús recorre 180 kilómetros con 15 litros de gasolina y debe estimarse cuánta gasolina necesita para recorrer 300 kilómetros.'
};

const REACTIVO_16_PROMPT_IMAGE = {
  src: 'assets/reactivo-16/prompt/reactivo-16-impresora-paginas.png',
  alt: 'Diagrama de proporción: una impresora genera 84 páginas en 7 minutos y debe estimarse cuántos minutos tarda en generar 144 páginas.'
};

const REACTIVO_44_PROMPT_IMAGE = {
  src: 'assets/reactivo-44/prompt/reactivo-44-modelo-particulas.png',
  alt: 'Modelo de partículas con tres conjuntos. X muestra átomos individuales del mismo tipo. Q muestra moléculas iguales formadas por dos átomos distintos unidos. Z muestra una mezcla de partículas distintas, con átomos sueltos y moléculas combinadas.'
};

const REACTIVO_74_PROMPT_IMAGE = {
  src: 'assets/reactivo-74/prompt/reactivo-74-angulos-alternos-internos.png',
  alt: 'Diagrama con dos rectas paralelas horizontales cortadas por una transversal inclinada. En la intersección superior los ángulos están numerados 1 arriba izquierda, 2 arriba derecha, 3 abajo derecha y 4 abajo izquierda. En la intersección inferior están numerados 5 arriba izquierda, 6 arriba derecha, 7 abajo derecha y 8 abajo izquierda.'
};

const PROMPT_MARKS_BY_REACTIVO = {
  32: [{ text: 'por eso', style: 'underline' }],
  33: [
    { text: 'Primero', style: 'highlight' },
    { text: 'después', style: 'highlight' },
    { text: 'finalmente', style: 'highlight' }
  ],
  34: [{ text: 'sin embargo', style: 'highlight' }],
  37: [
    { text: 'vieja', style: 'underline' },
    { text: 'altos', style: 'underline' },
    { text: 'angostas', style: 'underline' },
    { text: 'silencioso', style: 'underline' }
  ],
  84: [{ text: 'LEALTAD – VIRTUD', style: 'highlight' }],
  85: [{ text: 'HUMO – FUEGO', style: 'highlight' }],
  86: [{ text: 'OVEJA – REBAÑO', style: 'highlight' }],
  87: [{ text: 'APROBÓ', style: 'highlight' }],
  88: [{ text: 'FRECUENTE', style: 'highlight' }],
  89: [{ text: 'AUSTERIDAD', style: 'highlight' }],
  91: [{ text: 'AMBIGUO', style: 'highlight' }],
  92: [{ text: 'ASOMBRO', style: 'highlight' }]
};

function buildReactivo7SequenceSvg() {
  const figures = [
    {
      title: 'Figura 1',
      dots: [
        [0, 0, true],
        [1, 0, false],
        [0, 1, false],
        [1, 1, false]
      ]
    },
    {
      title: 'Figura 2',
      dots: [
        [0, 0, false],
        [1, 0, true],
        [0, 1, false],
        [1, 1, false]
      ]
    },
    {
      title: 'Figura 3',
      dots: [
        [0, 0, false],
        [1, 0, false],
        [0, 1, true],
        [1, 1, false]
      ]
    }
  ];

  const groups = figures.map((figure, index) => {
    const originX = 50 + index * 185;
    const dots = figure.dots.map(([column, row, filled]) => {
      const cx = originX + 24 + column * 42;
      const cy = 92 + row * 42;
      return `<circle cx="${cx}" cy="${cy}" r="10" fill="${filled ? '#1C1E5A' : '#FFFFFF'}" stroke="#1C1E5A" stroke-width="3"/>`;
    }).join('');

    return `<g>
      <text x="${originX}" y="42" fill="#1C1E5A" font-size="24" font-weight="700">${figure.title}</text>
      ${dots}
    </g>`;
  }).join('');

  return `<svg viewBox="0 0 600 165" role="img" aria-label="Serie de tres figuras con cuatro círculos cada una. En la Figura 1 el círculo lleno está arriba a la izquierda; en la Figura 2 está arriba a la derecha; en la Figura 3 está abajo a la izquierda." xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="598" height="163" rx="18" fill="#FFFFFF" stroke="rgba(28,30,90,.14)" stroke-width="2"/>
    ${groups}
  </svg>`;
}

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

function buildReactivo8Squares({ rowX, rowY, squareCount, squareSize, gap, cornerRadius }) {
  return Array.from({ length: squareCount }, (_, index) => {
    const x = rowX + index * (squareSize + gap);
    return `<rect x="${x}" y="${rowY}" width="${squareSize}" height="${squareSize}" rx="${cornerRadius}" fill="#EEF1FF" stroke="#1C1E5A" stroke-width="4"/>`;
  }).join('');
}

function buildReactivo8Triangle({ centerX, centerY, direction, width, height }) {
  const halfWidth = width / 2;
  const halfHeight = height / 2;

  if (direction === 'up') {
    return `<polygon points="${centerX},${centerY - halfHeight} ${centerX - halfWidth},${centerY + halfHeight} ${centerX + halfWidth},${centerY + halfHeight}" fill="#2CE51E" stroke="#14143A" stroke-width="4" stroke-linejoin="round"/>`;
  }

  return `<polygon points="${centerX},${centerY + halfHeight} ${centerX - halfWidth},${centerY - halfHeight} ${centerX + halfWidth},${centerY - halfHeight}" fill="#2CE51E" stroke="#14143A" stroke-width="4" stroke-linejoin="round"/>`;
}

function buildReactivo8FigureCard({
  x,
  y,
  width,
  height,
  title = '',
  descriptor = '',
  squareCount,
  markerShape = 'triangle',
  markerPosition,
  compact = false
}) {
  const titleY = y + (compact ? 0 : 34);
  const dividerY = y + 48;
  const descriptorY = y + height - 18;
  const squareGap = compact ? 10 : 12;
  const maxSquareSize = compact ? (squareCount >= 5 ? 26 : 30) : 42;
  const squareSize = Math.min(
    maxSquareSize,
    Math.floor((width - (compact ? 44 : 52) - squareGap * Math.max(squareCount - 1, 0)) / squareCount)
  );
  const squaresWidth = squareCount * squareSize + squareGap * Math.max(squareCount - 1, 0);
  const rowX = x + (width - squaresWidth) / 2;
  const markerCenterX = x + width / 2;

  const rowY = compact ? y + 58 : y + 112;
  let markerSvg = '';

  if (markerShape === 'circle') {
    markerSvg = `<circle cx="${markerCenterX}" cy="${rowY + squareSize / 2}" r="${compact ? 12 : 14}" fill="#2CE51E" stroke="#14143A" stroke-width="4"/>`;
  } else if (markerPosition === 'above') {
    markerSvg = buildReactivo8Triangle({
      centerX: markerCenterX,
      centerY: rowY - (compact ? 18 : 22),
      direction: 'up',
      width: compact ? 32 : 36,
      height: compact ? 24 : 26
    });
  } else {
    markerSvg = buildReactivo8Triangle({
      centerX: markerCenterX,
      centerY: rowY + squareSize + (compact ? 18 : 24),
      direction: 'down',
      width: compact ? 32 : 36,
      height: compact ? 24 : 26
    });
  }

  const titleSvg = title
    ? `<text x="${x + width / 2}" y="${titleY}" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="22" font-weight="800" fill="#1C1E5A">${title}</text>`
    : '';
  const dividerSvg = title
    ? `<line x1="${x + 22}" y1="${dividerY}" x2="${x + width - 22}" y2="${dividerY}" stroke="#E3E7F5" stroke-width="2"/>`
    : '';
  const descriptorSvg = descriptor
    ? `<text x="${x + width / 2}" y="${descriptorY}" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="17" font-weight="700" fill="#2B2F8F">${descriptor}</text>`
    : '';

  return `
  <g>
    <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="${compact ? 22 : 24}" fill="#FFFFFF" stroke="${compact ? '#CFD7F0' : '#D7DCEE'}" stroke-width="2"/>
    ${titleSvg}
    ${dividerSvg}
    ${markerSvg}
    ${buildReactivo8Squares({
      rowX,
      rowY,
      squareCount,
      squareSize,
      gap: squareGap,
      cornerRadius: compact ? 8 : 10
    })}
    ${descriptorSvg}
  </g>`.trim();
}

function buildReactivo8Arrow(x, y) {
  return `
  <g fill="none" stroke="#2B2F8F" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" opacity="0.28">
    <path d="M${x} ${y}h26"/>
    <path d="M${x + 14} ${y - 10}l12 10-12 10"/>
  </g>`.trim();
}

function buildReactivo8Svg() {
  return `
<svg viewBox="0 0 720 260" role="img" aria-labelledby="reactivo8Title reactivo8Desc" xmlns="http://www.w3.org/2000/svg">
  <title id="reactivo8Title">Secuencia visual del reactivo 8</title>
  <desc id="reactivo8Desc">Figura 1 con un cuadro y un triángulo arriba. Figura 2 con dos cuadros y un triángulo abajo. Figura 3 con tres cuadros y un triángulo arriba.</desc>
  <rect x="8" y="8" width="704" height="244" rx="30" fill="#F7F8FF"/>
  ${buildReactivo8FigureCard({ x: 24, y: 26, width: 204, height: 208, title: 'Figura 1', descriptor: '1 cuadro', squareCount: 1, markerPosition: 'above' })}
  ${buildReactivo8Arrow(230, 132)}
  ${buildReactivo8FigureCard({ x: 258, y: 26, width: 204, height: 208, title: 'Figura 2', descriptor: '2 cuadros', squareCount: 2, markerPosition: 'below' })}
  ${buildReactivo8Arrow(464, 132)}
  ${buildReactivo8FigureCard({ x: 492, y: 26, width: 204, height: 208, title: 'Figura 3', descriptor: '3 cuadros', squareCount: 3, markerPosition: 'above' })}
</svg>`.trim();
}

function buildReactivo8OptionSvg({ squareCount, markerShape, markerPosition }) {
  const squareGap = 10;
  const baseSquareSize = squareCount >= 5 ? 26 : 30;
  const width = 240;
  const height = 156;

  return `
<svg viewBox="0 0 ${width} ${height}" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  ${buildReactivo8FigureCard({
    x: 10,
    y: 10,
    width: width - 20,
    height: height - 20,
    squareCount,
    markerShape,
    markerPosition,
    compact: true
  })}
</svg>`.trim();
}

function applyExerciseOverrides(exercise) {
  const promptMarks = PROMPT_MARKS_BY_REACTIVO[exercise.number];
  const exerciseWithPromptMarks = promptMarks
    ? {
        ...exercise,
        promptMarks
      }
    : exercise;

  if (exercise.number === 7) {
    return {
      ...exerciseWithPromptMarks,
      visual: {
        kind: 'svg',
        content: buildReactivo7SequenceSvg()
      }
    };
  }

  if (exercise.number === 8) {
    return {
      ...exerciseWithPromptMarks,
      options: exercise.options.map((option) => {
        const image = REACTIVO_8_OPTION_IMAGES[option.label];
        if (!image) return option;

        return {
          ...option,
          kind: 'image',
          imageSrc: image.src,
          imageAlt: image.alt,
          showCaption: false
        };
      }),
      visual: {
        kind: 'image',
        src: REACTIVO_8_PROMPT_IMAGE.src,
        alt: REACTIVO_8_PROMPT_IMAGE.alt
      }
    };
  }

  if (exercise.number === 11) {
    return {
      ...exerciseWithPromptMarks,
      visual: {
        kind: 'image',
        src: REACTIVO_11_PROMPT_IMAGE.src,
        alt: REACTIVO_11_PROMPT_IMAGE.alt
      }
    };
  }

  if (exercise.number === 12) {
    return {
      ...exerciseWithPromptMarks,
      visual: {
        kind: 'image',
        src: REACTIVO_12_PROMPT_IMAGE.src,
        alt: REACTIVO_12_PROMPT_IMAGE.alt
      }
    };
  }

  if (exercise.number === 13) {
    return {
      ...exerciseWithPromptMarks,
      visual: {
        kind: 'image',
        src: REACTIVO_13_PROMPT_IMAGE.src,
        alt: REACTIVO_13_PROMPT_IMAGE.alt
      }
    };
  }

  if (exercise.number === 14) {
    return {
      ...exerciseWithPromptMarks,
      visual: {
        kind: 'image',
        src: REACTIVO_14_PROMPT_IMAGE.src,
        alt: REACTIVO_14_PROMPT_IMAGE.alt
      }
    };
  }

  if (exercise.number === 15) {
    return {
      ...exerciseWithPromptMarks,
      visual: {
        kind: 'image',
        src: REACTIVO_15_PROMPT_IMAGE.src,
        alt: REACTIVO_15_PROMPT_IMAGE.alt
      }
    };
  }

  if (exercise.number === 16) {
    return {
      ...exerciseWithPromptMarks,
      visual: {
        kind: 'image',
        src: REACTIVO_16_PROMPT_IMAGE.src,
        alt: REACTIVO_16_PROMPT_IMAGE.alt
      }
    };
  }

  if (exercise.number === 44) {
    return {
      ...exerciseWithPromptMarks,
      visual: {
        kind: 'image',
        src: REACTIVO_44_PROMPT_IMAGE.src,
        alt: REACTIVO_44_PROMPT_IMAGE.alt
      }
    };
  }

  if (exercise.number === 74) {
    return {
      ...exerciseWithPromptMarks,
      visual: {
        kind: 'image',
        src: REACTIVO_74_PROMPT_IMAGE.src,
        alt: REACTIVO_74_PROMPT_IMAGE.alt
      }
    };
  }

  return exerciseWithPromptMarks;
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
  const textBaseIndex = findLineIndex(bodyLines, (line) => /^Texto base:\s*$/i.test(line.trim()));
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
  const textBaseLines = textBaseIndex >= 0 && textBaseIndex < promptIndex
    ? sliceBetween(bodyLines, textBaseIndex + 1, promptIndex)
    : [];
  const promptLines = [
    ...(textBaseLines.length ? ['Texto base:', ...textBaseLines, ''] : []),
    ...sliceBetween(bodyLines, promptIndex + 1, optionsIndex)
  ];
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
  }).map(applyExerciseOverrides);

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
      scoreMode: 'raw+percent'
    },
    areas: normalizedAreas,
    exercises
  };

  const output = `window.IFR_APP_DATA = ${JSON.stringify(data, null, 2)};\n`;
  fs.writeFileSync(OUTPUT_FILE, output, 'utf8');

  console.log(`Generado ${path.basename(OUTPUT_FILE)} con ${data.meta.totalExercises} reactivos y ${data.areas.length} áreas.`);
}

main();
