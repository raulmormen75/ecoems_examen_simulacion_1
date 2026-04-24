window.IFR_APP_DATA = {
  "meta": {
    "title": "Instituto Fernando Ramírez · Examen simulación 1 ECOEMS",
    "durationSeconds": 10800,
    "totalExercises": 128,
    "scoreMode": "raw+percent"
  },
  "areas": [
    {
      "id": "habilidad-matematica",
      "name": "Habilidad Matemática",
      "rangeStart": 1,
      "rangeEnd": 16,
      "totalExercises": 16
    },
    {
      "id": "biologia",
      "name": "Biología",
      "rangeStart": 17,
      "rangeEnd": 28,
      "totalExercises": 12
    },
    {
      "id": "espanol",
      "name": "Español",
      "rangeStart": 29,
      "rangeEnd": 40,
      "totalExercises": 12
    },
    {
      "id": "quimica",
      "name": "Química",
      "rangeStart": 41,
      "rangeEnd": 52,
      "totalExercises": 12
    },
    {
      "id": "historia",
      "name": "Historia",
      "rangeStart": 53,
      "rangeEnd": 64,
      "totalExercises": 12
    },
    {
      "id": "matematicas",
      "name": "Matemáticas",
      "rangeStart": 65,
      "rangeEnd": 76,
      "totalExercises": 12
    },
    {
      "id": "habilidad-verbal",
      "name": "Habilidad Verbal",
      "rangeStart": 77,
      "rangeEnd": 92,
      "totalExercises": 16
    },
    {
      "id": "geografia",
      "name": "Geografía",
      "rangeStart": 93,
      "rangeEnd": 104,
      "totalExercises": 12
    },
    {
      "id": "fisica",
      "name": "Física",
      "rangeStart": 105,
      "rangeEnd": 116,
      "totalExercises": 12
    },
    {
      "id": "formacion-civica-y-etica",
      "name": "Formación Cívica y Ética",
      "rangeStart": 117,
      "rangeEnd": 128,
      "totalExercises": 12
    }
  ],
  "exercises": [
    {
      "id": "reactivo-1",
      "number": 1,
      "areaId": "habilidad-matematica",
      "areaName": "Habilidad matemática",
      "block": "Series de números",
      "prompt": "¿Qué números continúan en la siguiente sucesión?\n72, 18, 64, 16, 56, 14, __, __",
      "options": [
        {
          "label": "a",
          "text": "48, 12",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "48, 13",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "50, 12",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "50, 13",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "46, 12",
          "kind": "text"
        }
      ],
      "correctOption": "a",
      "correctOptionText": "48, 12",
      "hint": "Observa por separado los términos que ocupan lugar impar y los que ocupan lugar par.",
      "correctArgument": "La sucesión tiene dos series intercaladas. En las posiciones impares va 72, 64, 56, 48, que disminuye de 8 en 8. En las posiciones pares va 18, 16, 14, 12, que disminuye de 2 en 2. Por eso los números que siguen son 48 y 12.",
      "incorrectArgumentsByOption": {
        "b": "48, 13: el primer número sí respeta la serie impar, pero el segundo rompe la serie par, porque 18, 16, 14 debe continuar con 12.",
        "c": "50, 12: el segundo número sí funciona, pero 50 rompe la regla de restar 8 en la serie impar.",
        "d": "50, 13: ninguno de los dos números respeta las dos reglas simultáneas.",
        "e": "46, 12: el segundo número es correcto, pero 46 no corresponde a la serie 72, 64, 56, 48."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 1,
      "rangeStart": 1,
      "rangeEnd": 16
    },
    {
      "id": "reactivo-2",
      "number": 2,
      "areaId": "habilidad-matematica",
      "areaName": "Habilidad matemática",
      "block": "Series de números",
      "prompt": "El número que sigue en la sucesión 2, 4, 12, 14, 42, 44, __ es",
      "options": [
        {
          "label": "a",
          "text": "88",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "126",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "132",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "146",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "176",
          "kind": "text"
        }
      ],
      "correctOption": "c",
      "correctOptionText": "132",
      "hint": "Revisa si la sucesión alterna dos operaciones distintas.",
      "correctArgument": "La regla alterna sumar 2 y multiplicar por 3:\n2 + 2 = 4\n4 × 3 = 12\n12 + 2 = 14\n14 × 3 = 42\n42 + 2 = 44\n44 × 3 = 132\nPor eso el número siguiente es 132.",
      "incorrectArgumentsByOption": {
        "a": "88: sale de duplicar 44, pero la operación que sigue no es multiplicar por 2, sino por 3.",
        "b": "126: toma como referencia 42 × 3, pero ignora que antes ya apareció el 44.",
        "d": "146: mezcla una suma con una multiplicación sin respetar el patrón real.",
        "e": "176: no corresponde a ninguna de las dos operaciones que se están alternando."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 2,
      "rangeStart": 1,
      "rangeEnd": 16
    },
    {
      "id": "reactivo-3",
      "number": 3,
      "areaId": "habilidad-matematica",
      "areaName": "Habilidad matemática",
      "block": "Series con dos reglas que se turnan",
      "prompt": "Encuentra los términos que continúan la sucesión:\n3, 15, 6, 13, 12, 11, __, __",
      "options": [
        {
          "label": "a",
          "text": "24, 9",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "18, 9",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "24, 8",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "21, 10",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "18, 8",
          "kind": "text"
        }
      ],
      "correctOption": "a",
      "correctOptionText": "24, 9",
      "hint": "Separa la sucesión en dos grupos: posiciones impares y posiciones pares.",
      "correctArgument": "En las posiciones impares aparece 3, 6, 12, 24, que va duplicándose. En las posiciones pares aparece 15, 13, 11, 9, que va disminuyendo de 2 en 2. Por eso los términos que siguen son 24 y 9.",
      "incorrectArgumentsByOption": {
        "b": "18, 9: el segundo valor sí encaja, pero 18 no continúa la duplicación 3, 6, 12, 24.",
        "c": "24, 8: el primer valor sí funciona, pero la serie par no va a 8, sino a 9.",
        "d": "21, 10: ninguno de los dos números respeta las reglas de duplicar y restar 2.",
        "e": "18, 8: rompe las dos reglas al mismo tiempo."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 3,
      "rangeStart": 1,
      "rangeEnd": 16
    },
    {
      "id": "reactivo-4",
      "number": 4,
      "areaId": "habilidad-matematica",
      "areaName": "Habilidad matemática",
      "block": "Series por ciclos",
      "prompt": "¿Qué números completan la siguiente cadena?\n7, 14, 12, 24, 22, 44, __, __",
      "options": [
        {
          "label": "a",
          "text": "42, 84",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "42, 82",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "40, 80",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "44, 88",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "46, 92",
          "kind": "text"
        }
      ],
      "correctOption": "a",
      "correctOptionText": "42, 84",
      "hint": "El patrón se repite cada dos movimientos.",
      "correctArgument": "La secuencia sigue el ciclo:\nmultiplicar por 2, restar 2, multiplicar por 2, restar 2.\n7 × 2 = 14\n14 - 2 = 12\n12 × 2 = 24\n24 - 2 = 22\n22 × 2 = 44\n44 - 2 = 42\n42 × 2 = 84\nPor eso los números que faltan son 42 y 84.",
      "incorrectArgumentsByOption": {
        "b": "42, 82: el primer valor es correcto, pero después de 42 debe ir 84, no 82.",
        "c": "40, 80: empieza restando 4 en lugar de 2, así que rompe el ciclo.",
        "d": "44, 88: repite un valor ya usado y no aplica la resta de 2 donde corresponde.",
        "e": "46, 92: cambia la regla de la cadena y ya no respeta el patrón repetitivo."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 4,
      "rangeStart": 1,
      "rangeEnd": 16
    },
    {
      "id": "reactivo-5",
      "number": 5,
      "areaId": "habilidad-matematica",
      "areaName": "Habilidad matemática",
      "block": "Tablas con números",
      "prompt": "¿Cuál es el número que falta en el siguiente cuadro?",
      "options": [
        {
          "label": "a",
          "text": "19",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "20",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "21",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "22",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "23",
          "kind": "text"
        }
      ],
      "correctOption": "c",
      "correctOptionText": "21",
      "hint": "En cada fila, el tercer número depende de los dos primeros.",
      "correctArgument": "La regla horizontal es:\ntercer número = 2 × primer número + segundo número\nFila 1: 2 × 3 + 5 = 11\nFila 2: 2 × 4 + 7 = 15\nFila 3: 2 × 6 + 9 = 21\nPor eso el número faltante es 21.",
      "incorrectArgumentsByOption": {
        "a": "19: queda corto y no cumple la regla 2 × 6 + 9.",
        "b": "20: tampoco coincide con la operación observada en las dos primeras filas.",
        "d": "22: se pasa por una unidad respecto del resultado correcto.",
        "e": "23: no mantiene la misma relación horizontal del cuadro."
      },
      "visual": {
        "kind": "preformatted",
        "content": "3   5   11\n4   7   15\n6   9   __"
      },
      "sourceOrder": 5,
      "rangeStart": 1,
      "rangeEnd": 16
    },
    {
      "id": "reactivo-6",
      "number": 6,
      "areaId": "habilidad-matematica",
      "areaName": "Habilidad matemática",
      "block": "Tablas con números",
      "prompt": "¿Cuál es el número que falta en el siguiente cuadro?",
      "options": [
        {
          "label": "a",
          "text": "56",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "60",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "63",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "64",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "65",
          "kind": "text"
        }
      ],
      "correctOption": "c",
      "correctOptionText": "63",
      "hint": "Prueba multiplicar los dos primeros números y luego sumar uno de ellos.",
      "correctArgument": "La regla horizontal es:\ntercer número = primer número × segundo número + primer número\nFila 1: 3 × 4 + 3 = 15\nFila 2: 5 × 6 + 5 = 35\nFila 3: 7 × 8 + 7 = 63\nPor eso el número faltante es 63.",
      "incorrectArgumentsByOption": {
        "a": "56: solo toma la multiplicación 7 × 8 y deja fuera la suma adicional.",
        "b": "60: no sale de aplicar la misma regla de las filas anteriores.",
        "d": "64: se acerca al resultado, pero suma de más y rompe la regularidad.",
        "e": "65: no conserva la relación observada en las dos primeras filas."
      },
      "visual": {
        "kind": "preformatted",
        "content": "3   4   15\n5   6   35\n7   8   __"
      },
      "sourceOrder": 6,
      "rangeStart": 1,
      "rangeEnd": 16
    },
    {
      "id": "reactivo-7",
      "number": 7,
      "areaId": "habilidad-matematica",
      "areaName": "Habilidad matemática",
      "block": "Figuras en secuencia",
      "prompt": "¿Cuál es la figura que continúa en la siguiente serie?",
      "options": [
        {
          "label": "a",
          "text": "○ ○\n○ ●",
          "kind": "preformatted"
        },
        {
          "label": "b",
          "text": "● ○\n○ ○",
          "kind": "preformatted"
        },
        {
          "label": "c",
          "text": "○ ●\n○ ○",
          "kind": "preformatted"
        },
        {
          "label": "d",
          "text": "○ ○\n● ○",
          "kind": "preformatted"
        },
        {
          "label": "e",
          "text": "● ○\n● ○",
          "kind": "preformatted"
        }
      ],
      "correctOption": "a",
      "correctOptionText": "○ ○\n○ ●",
      "hint": "El círculo negro cambia de lugar, pero el tamaño del cuadro no cambia.",
      "correctArgument": "El círculo negro se mueve una posición en sentido de las manecillas del reloj dentro del cuadro 2 × 2. Va de arriba izquierda a arriba derecha, luego abajo izquierda y después abajo derecha. Por eso la siguiente figura es la opción a).",
      "incorrectArgumentsByOption": {
        "b": "Regresa a la primera posición de la serie, así que no es la continuación.",
        "c": "Repite la segunda figura y detiene el movimiento.",
        "d": "Repite la tercera figura, por lo que no avanza la secuencia.",
        "e": "Agrega un círculo negro extra, y la serie siempre conserva solo uno."
      },
      "visual": {
        "kind": "preformatted",
        "content": "Figura 1        Figura 2        Figura 3\n● ○             ○ ●             ○ ○\n○ ○             ○ ○             ● ○"
      },
      "sourceOrder": 7,
      "rangeStart": 1,
      "rangeEnd": 16
    },
    {
      "id": "reactivo-8",
      "number": 8,
      "areaId": "habilidad-matematica",
      "areaName": "Habilidad matemática",
      "block": "Figuras en secuencia",
      "prompt": "¿Cuál es la figura que continúa en la siguiente serie?",
      "options": [
        {
          "label": "a",
          "text": "cuatro cuadros con un triángulo abajo",
          "kind": "image",
          "imageSrc": "assets/reactivo-8/options/reactivo-8-opcion-a.png",
          "imageAlt": "Opción A. Cuatro cuadros con un triángulo abajo.",
          "showCaption": false
        },
        {
          "label": "b",
          "text": "cuatro cuadros con un triángulo arriba",
          "kind": "image",
          "imageSrc": "assets/reactivo-8/options/reactivo-8-opcion-b.png",
          "imageAlt": "Opción B. Cuatro cuadros con un triángulo arriba.",
          "showCaption": false
        },
        {
          "label": "c",
          "text": "tres cuadros con un triángulo abajo",
          "kind": "image",
          "imageSrc": "assets/reactivo-8/options/reactivo-8-opcion-c.png",
          "imageAlt": "Opción C. Tres cuadros con un triángulo abajo.",
          "showCaption": false
        },
        {
          "label": "d",
          "text": "cinco cuadros con un triángulo abajo",
          "kind": "image",
          "imageSrc": "assets/reactivo-8/options/reactivo-8-opcion-d.png",
          "imageAlt": "Opción D. Cinco cuadros con un triángulo abajo.",
          "showCaption": false
        },
        {
          "label": "e",
          "text": "cuatro cuadros con un círculo al centro",
          "kind": "image",
          "imageSrc": "assets/reactivo-8/options/reactivo-8-opcion-e.png",
          "imageAlt": "Opción E. Cuatro cuadros con un círculo al centro.",
          "showCaption": false
        }
      ],
      "correctOption": "a",
      "correctOptionText": "cuatro cuadros con un triángulo abajo",
      "hint": "Observa dos cambios al mismo tiempo: cuántos cuadros hay y en qué posición aparece el triángulo.",
      "correctArgument": "La serie crece de uno en uno en el número de cuadros: 1, 2, 3, 4. Además, el triángulo alterna arriba, abajo, arriba, abajo. Por eso la figura que sigue debe tener cuatro cuadros y el triángulo abajo.",
      "incorrectArgumentsByOption": {
        "b": "Tiene el número correcto de cuadros, pero no respeta la alternancia arriba, abajo, arriba, abajo.",
        "c": "Mantiene tres cuadros y por eso no hay crecimiento en la serie.",
        "d": "Se adelanta una figura, porque agrega cinco cuadros en vez de cuatro.",
        "e": "Cambia el tipo de símbolo, y la serie siempre usa un triángulo."
      },
      "visual": {
        "kind": "image",
        "src": "assets/reactivo-8/prompt/reactivo-8-secuencia.png",
        "alt": "Secuencia con tres figuras. La primera tiene un cuadro y un triángulo arriba. La segunda tiene dos cuadros y un triángulo abajo. La tercera tiene tres cuadros y un triángulo arriba."
      },
      "sourceOrder": 8,
      "rangeStart": 1,
      "rangeEnd": 16
    },
    {
      "id": "reactivo-9",
      "number": 9,
      "areaId": "habilidad-matematica",
      "areaName": "Habilidad matemática",
      "block": "Giros de figuras",
      "prompt": "Observa la figura y selecciona la opción que la representa después de ser girada 90° en el sentido de las manecillas del reloj.",
      "options": [
        {
          "label": "a",
          "text": "■ ■\n● □",
          "kind": "preformatted"
        },
        {
          "label": "b",
          "text": "□ ■\n● ■",
          "kind": "preformatted"
        },
        {
          "label": "c",
          "text": "■ ●\n■ □",
          "kind": "preformatted"
        },
        {
          "label": "d",
          "text": "● ■\n□ ■",
          "kind": "preformatted"
        },
        {
          "label": "e",
          "text": "■ ■\n□ ●",
          "kind": "preformatted"
        }
      ],
      "correctOption": "a",
      "correctOptionText": "■ ■\n● □",
      "hint": "Al girar la figura completa, las piezas cambian de posición, pero no se modifican ni se intercambian entre sí.",
      "correctArgument": "Al girar 90° a la derecha, la columna izquierda de la figura original pasa a la fila superior. Por eso los dos cuadros negros quedan arriba. El punto que estaba abajo a la derecha pasa abajo a la izquierda, y el cuadro blanco queda abajo a la derecha. Esa disposición corresponde a la opción a).",
      "incorrectArgumentsByOption": {
        "b": "Cambia la ubicación del cuadro blanco y no respeta el giro completo.",
        "c": "Parece una reorganización parcial, no una rotación de 90°.",
        "d": "Coloca el punto en una esquina incorrecta respecto del giro horario.",
        "e": "Mantiene los dos cuadros negros arriba, pero deja mal colocado el punto."
      },
      "visual": {
        "kind": "preformatted",
        "content": "Figura original:\n■ □\n■ ●"
      },
      "sourceOrder": 9,
      "rangeStart": 1,
      "rangeEnd": 16
    },
    {
      "id": "reactivo-10",
      "number": 10,
      "areaId": "habilidad-matematica",
      "areaName": "Habilidad matemática",
      "block": "Giros de figuras",
      "prompt": "Selecciona la opción que representa la siguiente figura después de girarla 180°.",
      "options": [
        {
          "label": "a",
          "text": "○ ■ ■\n● ○ ▲",
          "kind": "preformatted"
        },
        {
          "label": "b",
          "text": "■ ■ ○\n▲ ○ ●",
          "kind": "preformatted"
        },
        {
          "label": "c",
          "text": "● ○ ▲\n○ ■ ■",
          "kind": "preformatted"
        },
        {
          "label": "d",
          "text": "○ ▲ ●\n■ ■ ○",
          "kind": "preformatted"
        },
        {
          "label": "e",
          "text": "■ ○ ○\n● ■ ▲",
          "kind": "preformatted"
        }
      ],
      "correctOption": "a",
      "correctOptionText": "○ ■ ■\n● ○ ▲",
      "hint": "Un giro de 180° equivale a dejar arriba lo de abajo y, además, invertir izquierda y derecha.",
      "correctArgument": "Al girar 180°, la figura se invierte completamente. La segunda fila pasa a ser la primera, pero en orden contrario: ○ ■ ■. La primera fila pasa a ser la segunda, también en orden contrario: ● ○ ▲. Esa forma coincide con la opción a).",
      "incorrectArgumentsByOption": {
        "b": "Repite la figura original, así que no hay giro real.",
        "c": "Cambia las filas, pero no conserva correctamente la posición de todas las piezas.",
        "d": "Mezcla símbolos en posiciones que no resultan del giro de 180°.",
        "e": "Modifica la distribución original y deja símbolos en lugares imposibles."
      },
      "visual": {
        "kind": "preformatted",
        "content": "Figura original:\n▲ ○ ●\n■ ■ ○"
      },
      "sourceOrder": 10,
      "rangeStart": 1,
      "rangeEnd": 16
    },
    {
      "id": "reactivo-11",
      "number": 11,
      "areaId": "habilidad-matematica",
      "areaName": "Habilidad matemática",
      "block": "Conteo visual",
      "prompt": "¿Cuántos cuadrados hay en la siguiente figura?",
      "options": [
        {
          "label": "a",
          "text": "6",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "7",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "8",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "9",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "10",
          "kind": "text"
        }
      ],
      "correctOption": "c",
      "correctOptionText": "8",
      "hint": "Cuenta primero los cuadrados pequeños y después los que se forman al unir cuatro pequeños.",
      "correctArgument": "La figura tiene 6 cuadrados pequeños, porque hay 2 filas por 3 columnas. Además, se forman 2 cuadrados grandes de tamaño 2 × 2: uno a la izquierda y otro a la derecha. En total hay 6 + 2 = 8 cuadrados.",
      "incorrectArgumentsByOption": {
        "a": "6: solo cuenta los cuadrados pequeños y omite los dos cuadrados mayores.",
        "b": "7: reconoce que hay más que los pequeños, pero deja fuera uno de los cuadrados grandes.",
        "d": "9: agrega un cuadrado que no existe, porque la figura no tiene altura suficiente para uno aún mayor.",
        "e": "10: sobrecuenta regiones que son rectángulos, no cuadrados."
      },
      "visual": {
        "kind": "image",
        "src": "assets/reactivo-11/prompt/reactivo-11-cuadricula.png",
        "alt": "Cuadrícula rectangular formada por 3 columnas y 2 filas de cuadrados iguales."
      },
      "sourceOrder": 11,
      "rangeStart": 1,
      "rangeEnd": 16
    },
    {
      "id": "reactivo-12",
      "number": 12,
      "areaId": "habilidad-matematica",
      "areaName": "Habilidad matemática",
      "block": "Conteo visual",
      "prompt": "Una figura está formada por un hexágono central rodeado por seis hexágonos iguales. Además, el contorno exterior de toda la figura forma un hexágono mayor. ¿Cuántos hexágonos hay en total?",
      "options": [
        {
          "label": "a",
          "text": "6",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "7",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "8",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "9",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "10",
          "kind": "text"
        }
      ],
      "correctOption": "c",
      "correctOptionText": "8",
      "hint": "No te detengas en los hexágonos pequeños; revisa si la unión completa forma uno adicional.",
      "correctArgument": "Hay 1 hexágono central y 6 hexágonos alrededor, lo que da 7 hexágonos pequeños. Además, todo el conjunto forma 1 hexágono grande exterior. Entonces el total es 7 + 1 = 8.",
      "incorrectArgumentsByOption": {
        "a": "6: deja fuera el hexágono central y el grande exterior.",
        "b": "7: cuenta solo los hexágonos pequeños y omite el hexágono mayor.",
        "d": "9: agrega un hexágono extra que no se forma en la figura descrita.",
        "e": "10: sobrecuenta regiones que no tienen contorno hexagonal completo."
      },
      "visual": {
        "kind": "image",
        "src": "assets/reactivo-12/prompt/reactivo-12-hexagonos.png",
        "alt": "Figura formada por un hexágono central rodeado por seis hexágonos iguales; el contorno exterior forma un hexágono mayor."
      },
      "sourceOrder": 12,
      "rangeStart": 1,
      "rangeEnd": 16
    },
    {
      "id": "reactivo-13",
      "number": 13,
      "areaId": "habilidad-matematica",
      "areaName": "Habilidad matemática",
      "block": "Problemas de razonamiento",
      "prompt": "Cuando un número se divide entre 4, el residuo es 3. Cuando se divide entre 5, el residuo es 4. Cuando se divide entre 3, el residuo es 0. ¿Cuál de los siguientes puede ser ese número?",
      "options": [
        {
          "label": "a",
          "text": "34",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "35",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "39",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "43",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "45",
          "kind": "text"
        }
      ],
      "correctOption": "c",
      "correctOptionText": "39",
      "hint": "Primero filtra los números que sí sean múltiplos de 3 y luego revisa los residuos.",
      "correctArgument": "39 es múltiplo de 3, así que cumple la tercera condición. Además:\n39 ÷ 4 deja residuo 3\n39 ÷ 5 deja residuo 4\nComo satisface las tres condiciones al mismo tiempo, 39 es el valor correcto.",
      "incorrectArgumentsByOption": {
        "a": "34: al dividirlo entre 3 no deja residuo 0.",
        "b": "35: al dividirlo entre 4 no deja residuo 3.",
        "d": "43: al dividirlo entre 5 no deja residuo 4 y tampoco es múltiplo de 3.",
        "e": "45: sí es múltiplo de 3, pero al dividirlo entre 4 no deja residuo 3."
      },
      "visual": {
        "kind": "image",
        "src": "assets/reactivo-13/prompt/reactivo-13-residuos.png",
        "alt": "Diagrama de un número N que debe cumplir tres condiciones: al dividirse entre 4 deja residuo 3, entre 5 deja residuo 4 y entre 3 deja residuo 0."
      },
      "sourceOrder": 13,
      "rangeStart": 1,
      "rangeEnd": 16
    },
    {
      "id": "reactivo-14",
      "number": 14,
      "areaId": "habilidad-matematica",
      "areaName": "Habilidad matemática",
      "block": "Problemas con dos datos que se cruzan",
      "prompt": "En una papelería, 2 cuadernos y 1 pluma cuestan 34 pesos. En esa misma papelería, 1 cuaderno y 2 plumas cuestan 26 pesos. ¿Cuánto cuesta una pluma?",
      "options": [
        {
          "label": "a",
          "text": "4 pesos",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "5 pesos",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "6 pesos",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "7 pesos",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "8 pesos",
          "kind": "text"
        }
      ],
      "correctOption": "c",
      "correctOptionText": "6 pesos",
      "hint": "Conviene comparar las dos compras para aislar el precio de un solo artículo.",
      "correctArgument": "Si duplicamos la segunda compra, obtenemos 2 cuadernos y 4 plumas por 52 pesos. Si a esa cantidad le restamos la primera compra, quedan 3 plumas por 18 pesos. Entonces cada pluma cuesta 6 pesos.",
      "incorrectArgumentsByOption": {
        "a": "4 pesos: con ese valor, 2 cuadernos y 1 pluma no llegarían a 34 pesos manteniendo la segunda compra.",
        "b": "5 pesos: al sustituirlo, las dos compras dan resultados distintos a 34 y 26.",
        "d": "7 pesos: al probarlo, una de las dos condiciones falla.",
        "e": "8 pesos: hace que el precio del cuaderno resulte incompatible con la otra compra."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 14,
      "rangeStart": 1,
      "rangeEnd": 16
    },
    {
      "id": "reactivo-15",
      "number": 15,
      "areaId": "habilidad-matematica",
      "areaName": "Habilidad matemática",
      "block": "Problemas de aplicación con razonamiento y proporciones",
      "prompt": "Un autobús recorre 180 kilómetros con 15 litros de gasolina. A la misma razón, ¿cuántos litros necesita para recorrer 300 kilómetros?",
      "options": [
        {
          "label": "a",
          "text": "20 litros",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "22 litros",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "24 litros",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "25 litros",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "27 litros",
          "kind": "text"
        }
      ],
      "correctOption": "d",
      "correctOptionText": "25 litros",
      "hint": "La cantidad de gasolina debe crecer en la misma proporción que la distancia recorrida.",
      "correctArgument": "Si con 15 litros recorre 180 km, entonces avanza 12 km por cada litro. Para recorrer 300 km se necesita dividir 300 entre 12, lo que da 25. Por eso se requieren 25 litros.",
      "incorrectArgumentsByOption": {
        "a": "20 litros: con esa cantidad solo alcanzaría para 240 km a la misma razón.",
        "b": "22 litros: no mantiene la proporción exacta entre kilómetros y litros.",
        "c": "24 litros: alcanzaría para 288 km, no para 300 km.",
        "e": "27 litros: excede lo necesario y rompe la razón original del problema."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 15,
      "rangeStart": 1,
      "rangeEnd": 16
    },
    {
      "id": "reactivo-16",
      "number": 16,
      "areaId": "habilidad-matematica",
      "areaName": "Habilidad matemática",
      "block": "Problemas de aplicación con razonamiento y proporciones",
      "prompt": "Una impresora saca 84 páginas en 7 minutos. A esta misma razón, ¿cuántos minutos tardará en imprimir 144 páginas?",
      "options": [
        {
          "label": "a",
          "text": "10",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "11",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "12",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "13",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "14",
          "kind": "text"
        }
      ],
      "correctOption": "c",
      "correctOptionText": "12",
      "hint": "Primero encuentra cuántas páginas imprime por minuto.",
      "correctArgument": "Si imprime 84 páginas en 7 minutos, entonces su ritmo es de 12 páginas por minuto. Para imprimir 144 páginas se divide 144 entre 12, lo que da 12 minutos. Por eso la respuesta correcta es 12.",
      "incorrectArgumentsByOption": {
        "a": "10: en 10 minutos imprimiría 120 páginas, que no son suficientes.",
        "b": "11: en 11 minutos imprimiría 132 páginas, todavía menos de 144.",
        "d": "13: en 13 minutos imprimiría 156 páginas, así que ya sería más tiempo del necesario.",
        "e": "14: corresponde a 168 páginas, no a 144."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 16,
      "rangeStart": 1,
      "rangeEnd": 16
    },
    {
      "id": "reactivo-17",
      "number": 17,
      "areaId": "biologia",
      "areaName": "Biología",
      "block": "Seres vivos, características generales",
      "prompt": "La capacidad de un ser vivo para mantener relativamente estables sus condiciones internas, como temperatura, agua y equilibrio químico, se llama",
      "options": [
        {
          "label": "a",
          "text": "irritabilidad",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "nutrición",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "homeostasis",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "reproducción",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "adaptación",
          "kind": "text"
        }
      ],
      "correctOption": "c",
      "correctOptionText": "homeostasis",
      "hint": "No se refiere a responder a estímulos, sino a conservar equilibrio dentro del organismo.",
      "correctArgument": "La homeostasis es la capacidad del organismo para regular su medio interno y conservar condiciones adecuadas para vivir, aunque cambie el ambiente exterior.",
      "incorrectArgumentsByOption": {
        "a": "irritabilidad: es la respuesta ante estímulos, no el equilibrio interno.",
        "b": "nutrición: se relaciona con obtención y uso de alimento, no con regulación interna general.",
        "d": "reproducción: es el proceso para originar nuevos individuos.",
        "e": "adaptación: es un ajuste a largo plazo de una especie o un organismo al ambiente, no el control inmediato del medio interno."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 17,
      "rangeStart": 17,
      "rangeEnd": 28
    },
    {
      "id": "reactivo-18",
      "number": 18,
      "areaId": "biologia",
      "areaName": "Biología",
      "block": "Evolución, selección natural",
      "prompt": "En una población de insectos hay individuos verdes y cafés. Las aves detectan con mayor facilidad a los verdes, por lo que sobreviven más los cafés y con el tiempo éstos predominan. ¿Qué proceso explica mejor esta situación?",
      "options": [
        {
          "label": "a",
          "text": "herencia de caracteres adquiridos",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "selección natural",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "generación espontánea",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "reproducción asexual",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "mutación dirigida",
          "kind": "text"
        }
      ],
      "correctOption": "b",
      "correctOptionText": "selección natural",
      "hint": "Observa qué individuos sobreviven más y dejan más descendencia.",
      "correctArgument": "La selección natural ocurre cuando algunos individuos tienen características que les permiten sobrevivir y reproducirse más. En este caso, los insectos cafés son menos visibles y por eso terminan predominando.",
      "incorrectArgumentsByOption": {
        "a": "herencia de caracteres adquiridos: propone transmitir cambios obtenidos durante la vida, lo cual no explica este caso.",
        "c": "generación espontánea: plantea origen de vida a partir de materia no viva, y no tiene relación aquí.",
        "d": "reproducción asexual: describe una forma de reproducirse, no el proceso que cambia la frecuencia de rasgos en la población.",
        "e": "mutación dirigida: supone cambios orientados por necesidad, lo cual no corresponde al ejemplo."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 18,
      "rangeStart": 17,
      "rangeEnd": 28
    },
    {
      "id": "reactivo-19",
      "number": 19,
      "areaId": "biologia",
      "areaName": "Biología",
      "block": "Biodiversidad, causas de pérdida",
      "prompt": "En una región se talan grandes extensiones de bosque para construir carreteras y zonas habitacionales. Esta situación afecta la biodiversidad principalmente porque",
      "options": [
        {
          "label": "a",
          "text": "aumenta la cantidad de lluvia en la zona",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "destruye el hábitat de muchas especies",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "mejora la reproducción de todos los animales",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "hace que las plantas produzcan más alimento",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "evita la migración de especies invasoras",
          "kind": "text"
        }
      ],
      "correctOption": "b",
      "correctOptionText": "destruye el hábitat de muchas especies",
      "hint": "Piensa en lo que necesitan los seres vivos para refugiarse, alimentarse y reproducirse.",
      "correctArgument": "Cuando se elimina el bosque, muchas especies pierden alimento, refugio y espacio para reproducirse. Eso reduce poblaciones y daña directamente la biodiversidad.",
      "incorrectArgumentsByOption": {
        "a": "aumenta la cantidad de lluvia en la zona: no es el efecto biológico principal del problema planteado.",
        "c": "mejora la reproducción de todos los animales: ocurre lo contrario, pues muchas especies quedan en desventaja.",
        "d": "hace que las plantas produzcan más alimento: la tala disminuye la vegetación disponible.",
        "e": "evita la migración de especies invasoras: no es la consecuencia principal de la destrucción del bosque."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 19,
      "rangeStart": 17,
      "rangeEnd": 28
    },
    {
      "id": "reactivo-20",
      "number": 20,
      "areaId": "biologia",
      "areaName": "Biología",
      "block": "Desarrollo sustentable",
      "prompt": "Una comunidad decide captar agua de lluvia, reducir el uso de plásticos y reforestar sin detener sus actividades económicas. Estas acciones buscan favorecer el",
      "options": [
        {
          "label": "a",
          "text": "crecimiento urbano desordenado",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "desarrollo sustentable",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "aislamiento ecológico",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "aprovechamiento inmediato de los recursos",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "aumento artificial de la población",
          "kind": "text"
        }
      ],
      "correctOption": "b",
      "correctOptionText": "desarrollo sustentable",
      "hint": "La idea central es satisfacer necesidades actuales sin dañar las del futuro.",
      "correctArgument": "El desarrollo sustentable busca usar los recursos de manera responsable para atender las necesidades presentes sin comprometer las de las generaciones futuras.",
      "incorrectArgumentsByOption": {
        "a": "crecimiento urbano desordenado: implica expansión sin planeación, que no es lo que describen las acciones.",
        "c": "aislamiento ecológico: no corresponde al objetivo de manejo responsable de recursos.",
        "d": "aprovechamiento inmediato de los recursos: se enfoca en consumir rápido, no en conservar.",
        "e": "aumento artificial de la población: no guarda relación con las medidas ambientales mencionadas."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 20,
      "rangeStart": 17,
      "rangeEnd": 28
    },
    {
      "id": "reactivo-21",
      "number": 21,
      "areaId": "biologia",
      "areaName": "Biología",
      "block": "Ciencia y tecnología en alimentos, transgénicos",
      "prompt": "La obtención de una planta capaz de resistir ciertas plagas mediante la inserción de genes específicos es un ejemplo de interacción entre",
      "options": [
        {
          "label": "a",
          "text": "ciencia y tecnología",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "conocimiento empírico y tradición",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "nutrición y reproducción",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "evolución y adaptación natural",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "ecología y geografía",
          "kind": "text"
        }
      ],
      "correctOption": "a",
      "correctOptionText": "ciencia y tecnología",
      "hint": "Se trata de aplicar conocimientos científicos mediante técnicas concretas.",
      "correctArgument": "La manipulación genética usa conocimientos científicos sobre genes y ADN, junto con técnicas tecnológicas para modificar características de un organismo.",
      "incorrectArgumentsByOption": {
        "b": "conocimiento empírico y tradición: no explican la modificación genética controlada en laboratorio.",
        "c": "nutrición y reproducción: son procesos biológicos, pero no describen la base del procedimiento.",
        "d": "evolución y adaptación natural: son procesos naturales, no intervención tecnológica directa.",
        "e": "ecología y geografía: estudian relaciones con el ambiente y el espacio, no la inserción de genes."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 21,
      "rangeStart": 17,
      "rangeEnd": 28
    },
    {
      "id": "reactivo-22",
      "number": 22,
      "areaId": "biologia",
      "areaName": "Biología",
      "block": "Fotosíntesis",
      "prompt": "Durante la fotosíntesis, las plantas elaboran su alimento utilizando principalmente",
      "options": [
        {
          "label": "a",
          "text": "oxígeno y proteínas",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "dióxido de carbono, agua y luz solar",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "glucosa y minerales",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "nitrógeno y calor",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "clorofila y oxígeno",
          "kind": "text"
        }
      ],
      "correctOption": "b",
      "correctOptionText": "dióxido de carbono, agua y luz solar",
      "hint": "Busca los materiales de entrada del proceso, no los productos.",
      "correctArgument": "En la fotosíntesis, las plantas usan agua, dióxido de carbono y energía de la luz para producir glucosa y liberar oxígeno.",
      "incorrectArgumentsByOption": {
        "a": "oxígeno y proteínas: no son los insumos principales de la fotosíntesis.",
        "c": "glucosa y minerales: la glucosa es producto del proceso, no material de entrada.",
        "d": "nitrógeno y calor: no son los elementos básicos que explican este proceso.",
        "e": "clorofila y oxígeno: la clorofila participa, pero el oxígeno es producto, no insumo."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 22,
      "rangeStart": 17,
      "rangeEnd": 28
    },
    {
      "id": "reactivo-23",
      "number": 23,
      "areaId": "biologia",
      "areaName": "Biología",
      "block": "Nutrición, autótrofos y heterótrofos",
      "prompt": "Los hongos se consideran organismos heterótrofos porque",
      "options": [
        {
          "label": "a",
          "text": "producen su alimento a partir de la luz solar",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "elaboran glucosa usando dióxido de carbono",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "dependen de otros seres vivos o de sus restos para alimentarse",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "únicamente viven dentro del agua",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "no realizan ningún intercambio con el ambiente",
          "kind": "text"
        }
      ],
      "correctOption": "c",
      "correctOptionText": "dependen de otros seres vivos o de sus restos para alimentarse",
      "hint": "Los heterótrofos no fabrican su propio alimento.",
      "correctArgument": "Los organismos heterótrofos obtienen materia orgánica de otros seres vivos o de restos de ellos. Los hongos se alimentan de esa forma y por eso pertenecen a este grupo.",
      "incorrectArgumentsByOption": {
        "a": "producen su alimento a partir de la luz solar: eso corresponde a organismos autótrofos.",
        "b": "elaboran glucosa usando dióxido de carbono: también describe a organismos autótrofos fotosintéticos.",
        "d": "únicamente viven dentro del agua: no define a los heterótrofos ni a los hongos.",
        "e": "no realizan ningún intercambio con el ambiente: todos los seres vivos intercambian materia y energía con su entorno."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 23,
      "rangeStart": 17,
      "rangeEnd": 28
    },
    {
      "id": "reactivo-24",
      "number": 24,
      "areaId": "biologia",
      "areaName": "Biología",
      "block": "Alimentación, alimentos con almidón",
      "prompt": "¿Cuál de los siguientes alimentos es una fuente importante de almidón?",
      "options": [
        {
          "label": "a",
          "text": "mantequilla",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "tortilla de maíz",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "queso",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "huevo",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "atún",
          "kind": "text"
        }
      ],
      "correctOption": "b",
      "correctOptionText": "tortilla de maíz",
      "hint": "El almidón es un carbohidrato abundante en cereales y tubérculos.",
      "correctArgument": "La tortilla de maíz contiene almidón, que es una forma de almacenamiento de carbohidratos presente en muchos vegetales y granos.",
      "incorrectArgumentsByOption": {
        "a": "mantequilla: contiene sobre todo grasas.",
        "c": "queso: aporta principalmente grasas y proteínas.",
        "d": "huevo: es fuente importante de proteínas y grasas, no de almidón.",
        "e": "atún: aporta proteínas, pero no es alimento rico en almidón."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 24,
      "rangeStart": 17,
      "rangeEnd": 28
    },
    {
      "id": "reactivo-25",
      "number": 25,
      "areaId": "biologia",
      "areaName": "Biología",
      "block": "Salud respiratoria, prevención",
      "prompt": "En días con alta contaminación del aire y bajas temperaturas, una medida adecuada para prevenir enfermedades respiratorias es",
      "options": [
        {
          "label": "a",
          "text": "exponerse más tiempo al aire libre para acostumbrarse",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "evitar la ventilación de las habitaciones todo el día",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "abrigarse bien y evitar cambios bruscos de temperatura",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "consumir únicamente alimentos fríos",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "realizar ejercicio intenso en calles con mucho tráfico",
          "kind": "text"
        }
      ],
      "correctOption": "c",
      "correctOptionText": "abrigarse bien y evitar cambios bruscos de temperatura",
      "hint": "Busca la opción que reduzca el impacto del ambiente sobre las vías respiratorias.",
      "correctArgument": "Protegerse del frío y evitar cambios bruscos de temperatura ayuda a disminuir irritación y riesgo de afectaciones respiratorias, sobre todo cuando el aire está contaminado.",
      "incorrectArgumentsByOption": {
        "a": "exponerse más tiempo al aire libre para acostumbrarse: aumenta la exposición a contaminantes.",
        "b": "evitar la ventilación de las habitaciones todo el día: favorece acumulación de aire poco saludable.",
        "d": "consumir únicamente alimentos fríos: no es una medida preventiva respiratoria adecuada.",
        "e": "realizar ejercicio intenso en calles con mucho tráfico: incrementa la inhalación de contaminantes."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 25,
      "rangeStart": 17,
      "rangeEnd": 28
    },
    {
      "id": "reactivo-26",
      "number": 26,
      "areaId": "biologia",
      "areaName": "Biología",
      "block": "Reproducción sexual y asexual",
      "prompt": "La reproducción sexual se distingue de la asexual porque",
      "options": [
        {
          "label": "a",
          "text": "produce descendientes exactamente iguales al progenitor",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "no intervienen células sexuales",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "requiere la unión de gametos y favorece la variación",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "ocurre solamente en organismos unicelulares",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "impide cualquier cambio hereditario",
          "kind": "text"
        }
      ],
      "correctOption": "c",
      "correctOptionText": "requiere la unión de gametos y favorece la variación",
      "hint": "La diferencia principal tiene que ver con las células reproductoras y la diversidad de los descendientes.",
      "correctArgument": "En la reproducción sexual intervienen gametos, como óvulos y espermatozoides, y eso da lugar a descendientes con combinación de características de los progenitores.",
      "incorrectArgumentsByOption": {
        "a": "produce descendientes exactamente iguales al progenitor: eso describe mejor la reproducción asexual.",
        "b": "no intervienen células sexuales: en la reproducción sexual sí intervienen.",
        "d": "ocurre solamente en organismos unicelulares: es falso, pues ocurre en muchos organismos pluricelulares.",
        "e": "impide cualquier cambio hereditario: ocurre lo contrario, porque favorece variación genética."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 26,
      "rangeStart": 17,
      "rangeEnd": 28
    },
    {
      "id": "reactivo-27",
      "number": 27,
      "areaId": "biologia",
      "areaName": "Biología",
      "block": "Métodos anticonceptivos",
      "prompt": "¿Cuál de los siguientes métodos anticonceptivos también ayuda a reducir el riesgo de infecciones de transmisión sexual?",
      "options": [
        {
          "label": "a",
          "text": "método del ritmo",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "coito interruptus",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "condón",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "calendario",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "espermicida usado solo",
          "kind": "text"
        }
      ],
      "correctOption": "c",
      "correctOptionText": "condón",
      "hint": "Busca el método que funciona como barrera física.",
      "correctArgument": "El condón actúa como barrera física y, además de ayudar a prevenir embarazos, disminuye el riesgo de transmisión de varias infecciones sexuales.",
      "incorrectArgumentsByOption": {
        "a": "método del ritmo: se basa en calcular días fértiles, pero no protege contra infecciones.",
        "b": "coito interruptus: no ofrece protección segura frente a infecciones.",
        "d": "calendario: solo intenta estimar fertilidad y no funciona como barrera.",
        "e": "espermicida usado solo: puede reducir probabilidad de embarazo, pero no protege de forma adecuada contra infecciones."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 27,
      "rangeStart": 17,
      "rangeEnd": 28
    },
    {
      "id": "reactivo-28",
      "number": 28,
      "areaId": "biologia",
      "areaName": "Biología",
      "block": "Manipulación genética",
      "prompt": "Una característica de la manipulación genética es",
      "options": [
        {
          "label": "a",
          "text": "modificar genes específicos para cambiar una característica de un organismo",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "cruzar organismos sin importar sus rasgos hereditarios",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "reproducir únicamente organismos asexuales",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "impedir que las células se dividan",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "eliminar todos los cromosomas de una especie",
          "kind": "text"
        }
      ],
      "correctOption": "a",
      "correctOptionText": "modificar genes específicos para cambiar una característica de un organismo",
      "hint": "Piensa en cambios dirigidos sobre el ADN, no en cruces al azar.",
      "correctArgument": "La manipulación genética consiste en intervenir sobre genes concretos para introducir, eliminar o modificar rasgos en un organismo de manera controlada.",
      "incorrectArgumentsByOption": {
        "b": "cruzar organismos sin importar sus rasgos hereditarios: eso no describe modificación genética directa.",
        "c": "reproducir únicamente organismos asexuales: no es la característica central del proceso.",
        "d": "impedir que las células se dividan: eso no define la manipulación genética.",
        "e": "eliminar todos los cromosomas de una especie: sería inviable y no corresponde al procedimiento real."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 28,
      "rangeStart": 17,
      "rangeEnd": 28
    },
    {
      "id": "reactivo-29",
      "number": 29,
      "areaId": "espanol",
      "areaName": "Español",
      "block": "Fichas para registrar fuentes",
      "prompt": "La ficha que permite registrar los datos de un libro, autor, título, editorial, lugar y año de publicación para identificar una fuente consultada es la ficha",
      "options": [
        {
          "label": "a",
          "text": "hemerográfica",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "de resumen",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "bibliográfica",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "de comentario",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "de paráfrasis",
          "kind": "text"
        }
      ],
      "correctOption": "c",
      "correctOptionText": "bibliográfica",
      "hint": "Piensa en la ficha que sirve para identificar una obra completa y no solo una idea tomada de ella.",
      "correctArgument": "La ficha bibliográfica se utiliza para anotar los datos generales de una obra y poder identificarla o localizarla posteriormente. Su función principal es registrar la fuente consultada.",
      "incorrectArgumentsByOption": {
        "a": "hemerográfica: se usa para publicaciones periódicas, como revistas o periódicos, no para libros en general.",
        "b": "de resumen: recoge contenido sintetizado de una obra, pero no se centra en registrar sus datos editoriales.",
        "d": "de comentario: sirve para expresar una opinión o valoración sobre una lectura.",
        "e": "de paráfrasis: reescribe una idea con otras palabras, pero no identifica formalmente la fuente completa."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 29,
      "rangeStart": 29,
      "rangeEnd": 40
    },
    {
      "id": "reactivo-30",
      "number": 30,
      "areaId": "espanol",
      "areaName": "Español",
      "block": "Orden de párrafos",
      "prompt": "Ordena cronológicamente los siguientes enunciados para formar un texto con sentido.\n\nI. Minutos después, todos los asistentes aplaudieron con entusiasmo al final de la presentación.\nII. Antes de comenzar, la maestra pidió silencio y recordó el tema que se expondría.\nIII. Al terminar su explicación, el alumno respondió algunas preguntas de sus compañeros.\nIV. Luego, el expositor pasó al frente y comenzó a explicar apoyándose en una cartulina.",
      "options": [
        {
          "label": "a",
          "text": "II, IV, III, I",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "I, II, IV, III",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "IV, II, III, I",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "II, III, IV, I",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "IV, III, II, I",
          "kind": "text"
        }
      ],
      "correctOption": "a",
      "correctOptionText": "II, IV, III, I",
      "hint": "Primero debe aparecer la preparación del momento, después el inicio, luego el cierre del desarrollo y al final la reacción del público.",
      "correctArgument": "El orden lógico inicia con la indicación previa de la maestra, continúa con el momento en que el expositor pasa al frente, después sigue la atención a preguntas al terminar la explicación y finalmente aparece el aplauso de los asistentes.",
      "incorrectArgumentsByOption": {
        "b": "I, II, IV, III: empieza con el final del evento y rompe la secuencia temporal.",
        "c": "IV, II, III, I: pone al expositor comenzando antes de la indicación previa de la maestra.",
        "d": "II, III, IV, I: hace que las preguntas ocurran antes de la exposición.",
        "e": "IV, III, II, I: desordena el inicio al colocar la instrucción de la maestra después de la explicación."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 30,
      "rangeStart": 29,
      "rangeEnd": 40
    },
    {
      "id": "reactivo-31",
      "number": 31,
      "areaId": "espanol",
      "areaName": "Español",
      "block": "Recursos para desarrollar ideas",
      "prompt": "Lee el siguiente fragmento.\n\nMuchos estudiantes desarrollan hábitos de estudio poco eficaces. Por ejemplo, algunos intentan memorizar todo una noche antes del examen, otros estudian con el celular en la mano y varios ni siquiera revisan sus apuntes con anticipación.\n\nEn el texto, el recurso empleado para desarrollar el tema es",
      "options": [
        {
          "label": "a",
          "text": "ejemplificación",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "contradicción",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "definición",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "reiteración",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "narración",
          "kind": "text"
        }
      ],
      "correctOption": "a",
      "correctOptionText": "ejemplificación",
      "hint": "Después de presentar una idea general, el texto muestra varios casos concretos.",
      "correctArgument": "El fragmento menciona una idea general sobre hábitos de estudio poco eficaces y luego presenta casos específicos que la ilustran. Eso corresponde al recurso de ejemplificación.",
      "incorrectArgumentsByOption": {
        "b": "contradicción: no se oponen dos ideas entre sí.",
        "c": "definición: no se explica el significado formal de un concepto.",
        "d": "reiteración: no se repite la misma idea con insistencia como recurso principal.",
        "e": "narración: no se relata una secuencia amplia de hechos, sino que se dan ejemplos."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 31,
      "rangeStart": 29,
      "rangeEnd": 40
    },
    {
      "id": "reactivo-32",
      "number": 32,
      "areaId": "espanol",
      "areaName": "Español",
      "block": "Conectores",
      "prompt": "Lee el siguiente enunciado.\n\nMuchos ríos están contaminados; por eso, varias comunidades han comenzado campañas de limpieza.\n\nLa expresión subrayada cumple la función de",
      "options": [
        {
          "label": "a",
          "text": "presentar una causa",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "introducir una consecuencia",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "indicar simultaneidad",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "contradecir una idea",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "ejemplificar una afirmación",
          "kind": "text"
        }
      ],
      "correctOption": "b",
      "correctOptionText": "introducir una consecuencia",
      "hint": "Primero se menciona un problema y luego lo que ocurre a partir de él.",
      "correctArgument": "La expresión «por eso» enlaza la primera idea con un resultado derivado de ella. La contaminación de los ríos provoca como consecuencia el inicio de campañas de limpieza.",
      "incorrectArgumentsByOption": {
        "a": "presentar una causa: la causa ya apareció antes, no en el conector.",
        "c": "indicar simultaneidad: no habla de acciones que ocurren al mismo tiempo.",
        "d": "contradecir una idea: no existe oposición, sino relación de efecto.",
        "e": "ejemplificar una afirmación: no se presenta un caso particular como ejemplo."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 32,
      "rangeStart": 29,
      "rangeEnd": 40
    },
    {
      "id": "reactivo-33",
      "number": 33,
      "areaId": "espanol",
      "areaName": "Español",
      "block": "Conectores de tiempo",
      "prompt": "Lee el siguiente fragmento.\n\nPrimero sonó la alarma, después los alumnos salieron del salón y finalmente se concentraron en el patio.\n\nLas palabras destacadas son nexos que",
      "options": [
        {
          "label": "a",
          "text": "presentan una causa",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "ordenan temporalmente las acciones",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "introducen una opinión",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "expresan una condición",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "señalan una comparación",
          "kind": "text"
        }
      ],
      "correctOption": "b",
      "correctOptionText": "ordenan temporalmente las acciones",
      "hint": "Las expresiones indican en qué orden ocurre cada acción.",
      "correctArgument": "«Primero», «después» y «finalmente» son conectores temporales que permiten organizar los hechos siguiendo una secuencia.",
      "incorrectArgumentsByOption": {
        "a": "presentan una causa: no explican por qué ocurre algo, sino cuándo ocurre dentro de la secuencia.",
        "c": "introducen una opinión: no muestran valoración personal.",
        "d": "expresan una condición: no plantean una situación de tipo «si sucede esto».",
        "e": "señalan una comparación: no relacionan semejanzas o diferencias entre elementos."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 33,
      "rangeStart": 29,
      "rangeEnd": 40
    },
    {
      "id": "reactivo-34",
      "number": 34,
      "areaId": "espanol",
      "areaName": "Español",
      "block": "Conectores, contraste y jerarquía de información",
      "prompt": "Lee el siguiente texto.\n\nEl uso de bicicletas ha crecido en muchas ciudades; sin embargo, todavía faltan ciclovías seguras en varias zonas.\n\nLa expresión destacada funciona principalmente para",
      "options": [
        {
          "label": "a",
          "text": "introducir una consecuencia",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "presentar una causa",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "marcar un contraste entre ideas",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "iniciar una enumeración",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "indicar simultaneidad",
          "kind": "text"
        }
      ],
      "correctOption": "c",
      "correctOptionText": "marcar un contraste entre ideas",
      "hint": "La segunda parte no continúa en el mismo sentido de la primera, sino que pone un límite o una oposición.",
      "correctArgument": "«Sin embargo» enlaza dos ideas relacionadas, pero con sentido opuesto: por un lado crece el uso de bicicletas y por otro todavía existen carencias en infraestructura.",
      "incorrectArgumentsByOption": {
        "a": "introducir una consecuencia: no señala resultado directo, sino contraste.",
        "b": "presentar una causa: no explica el motivo de un hecho.",
        "d": "iniciar una enumeración: no enumera elementos.",
        "e": "indicar simultaneidad: no expresa acciones al mismo tiempo."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 34,
      "rangeStart": 29,
      "rangeEnd": 40
    },
    {
      "id": "reactivo-35",
      "number": 35,
      "areaId": "espanol",
      "areaName": "Español",
      "block": "Puntuación para dar sentido",
      "prompt": "Las oraciones que conforman el siguiente texto deben estar separadas por\n\nEn la feria vendían tamales__ atole__ pan dulce y frutas de temporada.",
      "options": [
        {
          "label": "a",
          "text": "punto y coma",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "comas",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "punto y seguido",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "dos puntos",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "punto y aparte",
          "kind": "text"
        }
      ],
      "correctOption": "b",
      "correctOptionText": "comas",
      "hint": "Se trata de elementos de una misma enumeración dentro de una sola oración.",
      "correctArgument": "Las comas se usan para separar elementos de una enumeración sencilla dentro de una misma oración. Aquí se están enlistando productos vendidos en la feria.",
      "incorrectArgumentsByOption": {
        "a": "punto y coma: suele separar oraciones más complejas o enumeraciones que ya contienen comas internas.",
        "c": "punto y seguido: dividiría el enunciado en varias oraciones sin necesidad.",
        "d": "dos puntos: se usan para anunciar una enumeración, no para separar cada elemento de ella.",
        "e": "punto y aparte: separa párrafos, no palabras dentro de una lista."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 35,
      "rangeStart": 29,
      "rangeEnd": 40
    },
    {
      "id": "reactivo-36",
      "number": 36,
      "areaId": "espanol",
      "areaName": "Español",
      "block": "Puntuación para dar sentido",
      "prompt": "El signo de puntuación que se utiliza para introducir una definición, anunciar una enumeración o presentar una cita textual es",
      "options": [
        {
          "label": "a",
          "text": "coma",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "punto y coma",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "dos puntos",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "punto final",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "signos de admiración",
          "kind": "text"
        }
      ],
      "correctOption": "c",
      "correctOptionText": "dos puntos",
      "hint": "Busca el signo que suele abrir una explicación o una lista.",
      "correctArgument": "Los dos puntos se emplean para introducir definiciones, explicaciones, enumeraciones y citas textuales. Su función es anunciar que a continuación viene una ampliación de lo anterior.",
      "incorrectArgumentsByOption": {
        "a": "coma: separa elementos o incisos, pero no introduce formalmente estos casos.",
        "b": "punto y coma: une o separa oraciones con mayor pausa que la coma, pero no cumple esa función principal.",
        "d": "punto final: cierra un enunciado, no lo desarrolla.",
        "e": "signos de admiración: expresan énfasis o emoción, no introducen definiciones ni listas."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 36,
      "rangeStart": 29,
      "rangeEnd": 40
    },
    {
      "id": "reactivo-37",
      "number": 37,
      "areaId": "espanol",
      "areaName": "Español",
      "block": "Gramática en contexto, adjetivos",
      "prompt": "Lee el siguiente fragmento.\n\nLa vieja casona tenía muros altos, ventanas angostas y un patio silencioso.\n\nLas palabras subrayadas pertenecen a la categoría de",
      "options": [
        {
          "label": "a",
          "text": "sustantivos",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "verbos",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "adjetivos",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "adverbios",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "pronombres",
          "kind": "text"
        }
      ],
      "correctOption": "c",
      "correctOptionText": "adjetivos",
      "hint": "Son palabras que describen características de los sustantivos.",
      "correctArgument": "«Vieja», «altos», «angostas» y «silencioso» expresan cualidades o características de los sustantivos a los que acompañan. Por eso son adjetivos.",
      "incorrectArgumentsByOption": {
        "a": "sustantivos: los sustantivos son «casona», «muros», «ventanas» y «patio», no las palabras que los califican.",
        "b": "verbos: no expresan acciones ni estados verbales.",
        "d": "adverbios: no modifican verbos, adjetivos u otros adverbios.",
        "e": "pronombres: no sustituyen nombres, sino que describen cómo son."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 37,
      "rangeStart": 29,
      "rangeEnd": 40
    },
    {
      "id": "reactivo-38",
      "number": 38,
      "areaId": "espanol",
      "areaName": "Español",
      "block": "Tipos de texto, narración",
      "prompt": "El fragmento pertenece a una narración porque\n\nA las seis de la tarde, Julia cerró la tienda, guardó el dinero en una caja metálica y caminó deprisa hacia la parada del autobús. Mientras esperaba, recordó la llamada que había recibido por la mañana.",
      "options": [
        {
          "label": "a",
          "text": "define un concepto de manera objetiva",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "expresa una opinión sobre un tema social",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "presenta una secuencia de acciones y hechos",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "enumera características de un objeto",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "explica instrucciones paso a paso",
          "kind": "text"
        }
      ],
      "correctOption": "c",
      "correctOptionText": "presenta una secuencia de acciones y hechos",
      "hint": "Observa si el texto cuenta lo que hizo un personaje en determinado momento.",
      "correctArgument": "Una narración relata acontecimientos en un orden temporal. En el fragmento se cuentan acciones de un personaje: cerrar, guardar, caminar, esperar y recordar.",
      "incorrectArgumentsByOption": {
        "a": "define un concepto de manera objetiva: no se está explicando el significado de algo.",
        "b": "expresa una opinión sobre un tema social: no predomina una postura argumentativa.",
        "d": "enumera características de un objeto: el texto no se concentra en describir rasgos.",
        "e": "explica instrucciones paso a paso: no da indicaciones al lector."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 38,
      "rangeStart": 29,
      "rangeEnd": 40
    },
    {
      "id": "reactivo-39",
      "number": 39,
      "areaId": "espanol",
      "areaName": "Español",
      "block": "Publicidad, eslogan e intención del mensaje",
      "prompt": "Señala el eslogan que pretende modificar la conducta del receptor.",
      "options": [
        {
          "label": "a",
          "text": "«El sabor que acompaña a tu familia»",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "«La tienda que siempre prefieres»",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "«Usa el cinturón, tu vida va primero»",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "«La frescura que se nota»",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "«Calidad que inspira confianza»",
          "kind": "text"
        }
      ],
      "correctOption": "c",
      "correctOptionText": "«Usa el cinturón, tu vida va primero»",
      "hint": "No busca vender solo una imagen de producto, sino lograr que la persona haga o deje de hacer algo.",
      "correctArgument": "Ese eslogan intenta influir en la conducta del receptor, ya que promueve una acción concreta de prevención y seguridad.",
      "incorrectArgumentsByOption": {
        "a": "resalta una cualidad afectiva del producto, pero no busca cambio directo de conducta.",
        "b": "intenta posicionar una preferencia comercial, no una acción preventiva específica.",
        "d": "destaca una cualidad del producto, no una conducta a modificar.",
        "e": "construye imagen de marca, pero no da una instrucción de comportamiento."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 39,
      "rangeStart": 29,
      "rangeEnd": 40
    },
    {
      "id": "reactivo-40",
      "number": 40,
      "areaId": "espanol",
      "areaName": "Español",
      "block": "Publicidad, exageración de cualidades",
      "prompt": "Selecciona el ejemplo de texto publicitario donde se exageran las cualidades de un producto.",
      "options": [
        {
          "label": "a",
          "text": "«Con este jabón, tu ropa queda limpia»",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "«El pan recién hecho de cada mañana»",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "«El café que despierta hasta a los sueños»",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "«Jugo de naranja con vitamina C»",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "«Crema para manos de uso diario»",
          "kind": "text"
        }
      ],
      "correctOption": "c",
      "correctOptionText": "«El café que despierta hasta a los sueños»",
      "hint": "Busca la frase que atribuye al producto un efecto imposible o claramente exagerado.",
      "correctArgument": "La frase exagera el efecto del producto al atribuirle una acción imposible en sentido literal. Esa exageración es un recurso común de la publicidad.",
      "incorrectArgumentsByOption": {
        "a": "describe un resultado esperado, pero no exagerado.",
        "b": "menciona una característica sencilla del producto, no una exageración.",
        "d": "presenta información directa sobre el contenido del producto.",
        "e": "enuncia un uso cotidiano sin exagerar cualidades."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 40,
      "rangeStart": 29,
      "rangeEnd": 40
    },
    {
      "id": "reactivo-41",
      "number": 41,
      "areaId": "quimica",
      "areaName": "Química",
      "block": "Materia y estados, propiedades de gases",
      "prompt": "¿Cuál de las siguientes opciones menciona dos propiedades físicas de los gases?",
      "options": [
        {
          "label": "a",
          "text": "forma definida y volumen propio",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "volumen fijo y dureza",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "forma indefinida y volumen indefinido",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "maleabilidad y brillo",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "elasticidad y fragilidad",
          "kind": "text"
        }
      ],
      "correctOption": "c",
      "correctOptionText": "forma indefinida y volumen indefinido",
      "hint": "Piensa en cómo se comporta un gas dentro de un recipiente.",
      "correctArgument": "Los gases no tienen forma propia ni volumen fijo. Se expanden y ocupan todo el espacio disponible del recipiente que los contiene.",
      "incorrectArgumentsByOption": {
        "a": "forma definida y volumen propio: esas características no corresponden a los gases.",
        "b": "volumen fijo y dureza: un gas no tiene volumen fijo ni es duro.",
        "d": "maleabilidad y brillo: son propiedades más asociadas a sólidos metálicos.",
        "e": "elasticidad y fragilidad: no describen de manera adecuada el comportamiento general de los gases."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 41,
      "rangeStart": 41,
      "rangeEnd": 52
    },
    {
      "id": "reactivo-42",
      "number": 42,
      "areaId": "quimica",
      "areaName": "Química",
      "block": "Propiedades físicas, masa y volumen",
      "prompt": "Las propiedades físicas que permiten medir la cantidad de materia de una sustancia son",
      "options": [
        {
          "label": "a",
          "text": "masa y volumen",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "color y olor",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "dureza y brillo",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "solubilidad y fusión",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "temperatura y presión",
          "kind": "text"
        }
      ],
      "correctOption": "a",
      "correctOptionText": "masa y volumen",
      "hint": "Una indica cuánta materia hay y la otra cuánto espacio ocupa.",
      "correctArgument": "La masa permite cuantificar la cantidad de materia y el volumen indica el espacio que ocupa una sustancia. Por eso ambas se usan para medir cantidad física de materia.",
      "incorrectArgumentsByOption": {
        "b": "color y olor: ayudan a describir una sustancia, pero no a medir directamente cuánta hay.",
        "c": "dureza y brillo: son propiedades descriptivas, no de cantidad.",
        "d": "solubilidad y fusión: son propiedades físicas, pero no se usan para medir la cantidad de materia.",
        "e": "temperatura y presión: son variables físicas, pero no expresan por sí mismas cantidad de sustancia."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 42,
      "rangeStart": 41,
      "rangeEnd": 52
    },
    {
      "id": "reactivo-43",
      "number": 43,
      "areaId": "quimica",
      "areaName": "Química",
      "block": "Cambios físicos, cambios de estado",
      "prompt": "Si una cierta cantidad de cera pasa del estado sólido al estado líquido, permanece constante su",
      "options": [
        {
          "label": "a",
          "text": "forma",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "volumen",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "masa",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "densidad",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "temperatura",
          "kind": "text"
        }
      ],
      "correctOption": "c",
      "correctOptionText": "masa",
      "hint": "En un cambio físico, la sustancia sigue siendo la misma, aunque cambie su estado.",
      "correctArgument": "Cuando una sustancia cambia de estado físico, su masa se conserva porque no cambia la cantidad de materia presente. Solo cambia su forma de agregación.",
      "incorrectArgumentsByOption": {
        "a": "forma: cambia al pasar de sólido a líquido.",
        "b": "volumen: puede variar según el estado físico.",
        "d": "densidad: suele cambiar entre sólido y líquido.",
        "e": "temperatura: puede cambiar durante el proceso o mantenerse solo en condiciones específicas, no es la respuesta general más adecuada."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 43,
      "rangeStart": 41,
      "rangeEnd": 52
    },
    {
      "id": "reactivo-44",
      "number": 44,
      "areaId": "quimica",
      "areaName": "Química",
      "block": "Sustancias puras y mezclas",
      "prompt": "Si en un modelo de partículas se observa que X está formado por un solo tipo de átomo, Q por partículas iguales hechas de dos átomos distintos unidos y Z por varias partículas diferentes mezcladas entre sí, se puede afirmar que X es ________, Q es ________ y Z es ________.",
      "options": [
        {
          "label": "a",
          "text": "mezcla, compuesto, elemento",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "elemento, compuesto, mezcla",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "compuesto, elemento, mezcla",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "mezcla, elemento, compuesto",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "compuesto, mezcla, elemento",
          "kind": "text"
        }
      ],
      "correctOption": "b",
      "correctOptionText": "elemento, compuesto, mezcla",
      "hint": "Distingue entre un solo tipo de átomo, una sustancia unida químicamente y una combinación física de partículas.",
      "correctArgument": "Un elemento está formado por un solo tipo de átomo. Un compuesto está formado por átomos distintos unidos químicamente en proporción definida. Una mezcla contiene distintas sustancias sin unión química fija entre todas sus partículas.",
      "incorrectArgumentsByOption": {
        "a": "mezcla, compuesto, elemento: confunde el modelo del elemento con el de la mezcla.",
        "c": "compuesto, elemento, mezcla: invierte elemento y compuesto.",
        "d": "mezcla, elemento, compuesto: clasifica mal los tres modelos.",
        "e": "compuesto, mezcla, elemento: no respeta la descripción de cada conjunto de partículas."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 44,
      "rangeStart": 41,
      "rangeEnd": 52
    },
    {
      "id": "reactivo-45",
      "number": 45,
      "areaId": "quimica",
      "areaName": "Química",
      "block": "Estructura del átomo",
      "prompt": "Los ________ tienen carga ________ y se localizan en el núcleo del átomo.",
      "options": [
        {
          "label": "a",
          "text": "electrones, negativa",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "protones, positiva",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "electrones, positiva",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "neutrones, negativa",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "protones, neutra",
          "kind": "text"
        }
      ],
      "correctOption": "b",
      "correctOptionText": "protones, positiva",
      "hint": "Busca la partícula del núcleo que sí tiene carga eléctrica distinta de cero.",
      "correctArgument": "Los protones se encuentran en el núcleo atómico y poseen carga positiva. Son una de las partículas fundamentales del átomo.",
      "incorrectArgumentsByOption": {
        "a": "electrones, negativa: los electrones tienen carga negativa, pero se ubican alrededor del núcleo.",
        "c": "electrones, positiva: mezcla mal la carga y la ubicación.",
        "d": "neutrones, negativa: los neutrones están en el núcleo, pero no tienen carga negativa.",
        "e": "protones, neutra: los protones no son neutros, sino positivos."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 45,
      "rangeStart": 41,
      "rangeEnd": 52
    },
    {
      "id": "reactivo-46",
      "number": 46,
      "areaId": "quimica",
      "areaName": "Química",
      "block": "Número de masa",
      "prompt": "El número de masa de un átomo que tiene 16 protones y 18 neutrones es",
      "options": [
        {
          "label": "a",
          "text": "16",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "18",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "32",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "34",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "36",
          "kind": "text"
        }
      ],
      "correctOption": "d",
      "correctOptionText": "34",
      "hint": "El número de masa se obtiene sumando protones y neutrones.",
      "correctArgument": "El número de masa se calcula así:\nprotones + neutrones = 16 + 18 = 34.\nPor eso el número de masa del átomo es 34.",
      "incorrectArgumentsByOption": {
        "a": "16: solo considera los protones.",
        "b": "18: solo considera los neutrones.",
        "c": "32: corresponde a una suma incorrecta.",
        "e": "36: agrega partículas de más y rompe la definición de número de masa."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 46,
      "rangeStart": 41,
      "rangeEnd": 52
    },
    {
      "id": "reactivo-47",
      "number": 47,
      "areaId": "quimica",
      "areaName": "Química",
      "block": "Fórmulas químicas, átomos y moléculas",
      "prompt": "En la fórmula del dióxido de carbono, CO₂, hay",
      "options": [
        {
          "label": "a",
          "text": "1 molécula de carbono y 2 moléculas de oxígeno",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "1 átomo de carbono y 2 átomos de oxígeno",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "2 átomos de carbono y 1 átomo de oxígeno",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "2 moléculas de carbono y 1 molécula de oxígeno",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "1 átomo de carbono y 1 molécula de oxígeno",
          "kind": "text"
        }
      ],
      "correctOption": "b",
      "correctOptionText": "1 átomo de carbono y 2 átomos de oxígeno",
      "hint": "El subíndice indica cuántos átomos hay del elemento que lo lleva.",
      "correctArgument": "En CO₂, la ausencia de subíndice en C indica 1 átomo de carbono. El subíndice 2 en O indica 2 átomos de oxígeno dentro de la misma molécula.",
      "incorrectArgumentsByOption": {
        "a": "1 molécula de carbono y 2 moléculas de oxígeno: confunde átomos con moléculas.",
        "c": "2 átomos de carbono y 1 átomo de oxígeno: invierte la composición real.",
        "d": "2 moléculas de carbono y 1 molécula de oxígeno: no interpreta bien la fórmula.",
        "e": "1 átomo de carbono y 1 molécula de oxígeno: el oxígeno aquí está representado por átomos dentro de la molécula, no por una molécula aparte."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 47,
      "rangeStart": 41,
      "rangeEnd": 52
    },
    {
      "id": "reactivo-48",
      "number": 48,
      "areaId": "quimica",
      "areaName": "Química",
      "block": "Tabla periódica",
      "prompt": "En la tabla periódica moderna, los elementos químicos están ordenados de acuerdo con su",
      "options": [
        {
          "label": "a",
          "text": "volumen atómico",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "masa molecular",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "número atómico creciente",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "densidad creciente",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "número de neutrones decreciente",
          "kind": "text"
        }
      ],
      "correctOption": "c",
      "correctOptionText": "número atómico creciente",
      "hint": "El criterio de organización depende de la cantidad de protones en el átomo.",
      "correctArgument": "La tabla periódica moderna organiza los elementos según su número atómico, es decir, según la cantidad de protones de sus átomos.",
      "incorrectArgumentsByOption": {
        "a": "volumen atómico: no es el criterio general de ordenamiento.",
        "b": "masa molecular: la tabla clasifica elementos, no moléculas.",
        "d": "densidad creciente: la densidad varía, pero no define el orden principal.",
        "e": "número de neutrones decreciente: los neutrones no son la base del arreglo periódico."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 48,
      "rangeStart": 41,
      "rangeEnd": 52
    },
    {
      "id": "reactivo-49",
      "number": 49,
      "areaId": "quimica",
      "areaName": "Química",
      "block": "Enlace químico",
      "prompt": "Los enlaces químicos se forman por fuerzas de naturaleza ________ que mantienen unidos a los átomos.",
      "options": [
        {
          "label": "a",
          "text": "gravitacional",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "mecánica",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "eléctrica",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "térmica",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "sonora",
          "kind": "text"
        }
      ],
      "correctOption": "c",
      "correctOptionText": "eléctrica",
      "hint": "Piensa en la atracción entre cargas de las partículas del átomo.",
      "correctArgument": "Los enlaces químicos dependen de interacciones eléctricas entre cargas, principalmente entre núcleos y electrones o entre iones con cargas opuestas.",
      "incorrectArgumentsByOption": {
        "a": "gravitacional: esa fuerza es despreciable a escala atómica frente a la eléctrica.",
        "b": "mecánica: no explica la unión entre átomos.",
        "d": "térmica: el calor puede afectar enlaces, pero no es la fuerza que los forma.",
        "e": "sonora: no tiene relación con la unión química de partículas."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 49,
      "rangeStart": 41,
      "rangeEnd": 52
    },
    {
      "id": "reactivo-50",
      "number": 50,
      "areaId": "quimica",
      "areaName": "Química",
      "block": "Cambios físicos y cambios químicos",
      "prompt": "¿Cuál de los siguientes casos representa un fenómeno químico?",
      "options": [
        {
          "label": "a",
          "text": "derretir hielo",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "evaporar alcohol",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "quemar madera",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "triturar sal",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "disolver azúcar en agua",
          "kind": "text"
        }
      ],
      "correctOption": "c",
      "correctOptionText": "quemar madera",
      "hint": "Busca el caso donde se formen sustancias nuevas.",
      "correctArgument": "Al quemar madera ocurre una combustión y se forman sustancias distintas, como cenizas, gases y vapor. Por eso es un cambio químico.",
      "incorrectArgumentsByOption": {
        "a": "derretir hielo: solo cambia el estado físico del agua.",
        "b": "evaporar alcohol: sigue siendo la misma sustancia en otro estado.",
        "d": "triturar sal: solo cambia el tamaño de las partículas visibles.",
        "e": "disolver azúcar en agua: no se forman sustancias nuevas, aunque cambie la apariencia de la mezcla."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 50,
      "rangeStart": 41,
      "rangeEnd": 52
    },
    {
      "id": "reactivo-51",
      "number": 51,
      "areaId": "quimica",
      "areaName": "Química",
      "block": "Ecuaciones químicas",
      "prompt": "Interpreta la siguiente ecuación química:\n\n2H₂ + O₂ → 2H₂O",
      "options": [
        {
          "label": "a",
          "text": "2 moléculas de hidrógeno más 1 molécula de oxígeno forman 2 moléculas de agua",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "1 molécula de hidrógeno más 2 moléculas de oxígeno forman 2 moléculas de agua",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "2 átomos de hidrógeno más 1 átomo de oxígeno forman 2 átomos de agua",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "2 moléculas de agua forman 2 moléculas de hidrógeno y 1 molécula de oxígeno",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "1 molécula de hidrógeno más 1 molécula de oxígeno forman 1 molécula de agua",
          "kind": "text"
        }
      ],
      "correctOption": "a",
      "correctOptionText": "2 moléculas de hidrógeno más 1 molécula de oxígeno forman 2 moléculas de agua",
      "hint": "Los coeficientes indican cuántas moléculas participan en la reacción.",
      "correctArgument": "La ecuación indica que 2 moléculas de H₂ reaccionan con 1 molécula de O₂ para formar 2 moléculas de H₂O. Esa es la lectura correcta de los coeficientes.",
      "incorrectArgumentsByOption": {
        "b": "altera la proporción real de las moléculas reactivas.",
        "c": "confunde átomos con moléculas y además usa una expresión incorrecta para el producto.",
        "d": "invierte el sentido de la reacción mostrada.",
        "e": "cambia los coeficientes y deja de representar la ecuación dada."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 51,
      "rangeStart": 41,
      "rangeEnd": 52
    },
    {
      "id": "reactivo-52",
      "number": 52,
      "areaId": "quimica",
      "areaName": "Química",
      "block": "Óxido-reducción",
      "prompt": "¿Cuál conjunto contiene únicamente ejemplos de procesos de óxido-reducción?",
      "options": [
        {
          "label": "a",
          "text": "oxidación de una manzana, corrosión de un clavo y combustión de papel",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "evaporación del agua, fusión del hielo y condensación del vapor",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "triturar una roca, disolver sal y sublimar yodo",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "mezclar arena con agua, filtrar café y cortar madera",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "hervir agua, romper vidrio y congelar aceite",
          "kind": "text"
        }
      ],
      "correctOption": "a",
      "correctOptionText": "oxidación de una manzana, corrosión de un clavo y combustión de papel",
      "hint": "Busca procesos donde haya cambio químico relacionado con pérdida o ganancia de electrones.",
      "correctArgument": "La oxidación de una manzana, la corrosión de un clavo y la combustión son cambios químicos donde intervienen procesos de oxidación y reducción. Por eso pertenecen a reacciones de óxido-reducción.",
      "incorrectArgumentsByOption": {
        "b": "evaporación del agua, fusión del hielo y condensación del vapor: son cambios físicos de estado.",
        "c": "triturar una roca, disolver sal y sublimar yodo: son procesos físicos, no de óxido-reducción.",
        "d": "mezclar arena con agua, filtrar café y cortar madera: no implican reacción redox.",
        "e": "hervir agua, romper vidrio y congelar aceite: son cambios físicos o mecánicos, no reacciones químicas de oxidación y reducción."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 52,
      "rangeStart": 41,
      "rangeEnd": 52
    },
    {
      "id": "reactivo-53",
      "number": 53,
      "areaId": "historia",
      "areaName": "Historia",
      "block": "Constantinopla, rutas y comercio",
      "prompt": "A finales de la Edad Media, varios reinos europeos buscaron nuevas rutas comerciales hacia Asia principalmente porque",
      "options": [
        {
          "label": "a",
          "text": "comenzó la Revolución Industrial en Inglaterra",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "Constantinopla fue tomada por los turcos otomanos",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "España perdió todas sus colonias americanas",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "se prohibió la navegación en el océano Atlántico",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "desaparecieron los puertos del mar Mediterráneo",
          "kind": "text"
        }
      ],
      "correctOption": "b",
      "correctOptionText": "Constantinopla fue tomada por los turcos otomanos",
      "hint": "Piensa en el hecho que dificultó el comercio europeo con Oriente por las rutas tradicionales.",
      "correctArgument": "La toma de Constantinopla en 1453 afectó rutas comerciales entre Europa y Asia. Eso impulsó la búsqueda de rutas alternas por mar para llegar al Oriente.",
      "incorrectArgumentsByOption": {
        "a": "comenzó la Revolución Industrial en Inglaterra: ocurrió siglos después y no explica ese cambio inicial de rutas.",
        "c": "España perdió todas sus colonias americanas: eso pertenece a otra etapa histórica.",
        "d": "se prohibió la navegación en el océano Atlántico: no fue el motivo real de las exploraciones.",
        "e": "desaparecieron los puertos del mar Mediterráneo: los puertos no desaparecieron; el problema fue el control de rutas."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 53,
      "rangeStart": 53,
      "rangeEnd": 64
    },
    {
      "id": "reactivo-54",
      "number": 54,
      "areaId": "historia",
      "areaName": "Historia",
      "block": "Revolución Francesa e influencia en América",
      "prompt": "Uno de los principios difundidos por la Revolución Francesa que influyó en los movimientos de independencia en América fue",
      "options": [
        {
          "label": "a",
          "text": "el derecho divino de los reyes",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "la soberanía popular",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "la obediencia al absolutismo",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "el privilegio de la nobleza",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "la desigualdad legal entre grupos",
          "kind": "text"
        }
      ],
      "correctOption": "b",
      "correctOptionText": "la soberanía popular",
      "hint": "Busca la idea que sostiene que el poder político proviene del pueblo.",
      "correctArgument": "La Revolución Francesa difundió ideas como libertad, igualdad y soberanía popular. Esta última afirma que la autoridad debe emanar del pueblo y no de un monarca absoluto.",
      "incorrectArgumentsByOption": {
        "a": "el derecho divino de los reyes: justifica monarquías absolutas, no movimientos de independencia.",
        "c": "la obediencia al absolutismo: se opone a los ideales revolucionarios franceses.",
        "d": "el privilegio de la nobleza: fue precisamente algo cuestionado por la revolución.",
        "e": "la desigualdad legal entre grupos: contradice el principio de igualdad ante la ley."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 54,
      "rangeStart": 53,
      "rangeEnd": 64
    },
    {
      "id": "reactivo-55",
      "number": 55,
      "areaId": "historia",
      "areaName": "Historia",
      "block": "Primera Guerra Mundial, características",
      "prompt": "Una de las características militares más representativas de la Primera Guerra Mundial fue",
      "options": [
        {
          "label": "a",
          "text": "el uso prolongado de trincheras",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "la guerra con misiles nucleares",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "el combate exclusivo en territorio americano",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "la desaparición total de la artillería",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "el uso único de ejércitos mercenarios",
          "kind": "text"
        }
      ],
      "correctOption": "a",
      "correctOptionText": "el uso prolongado de trincheras",
      "hint": "Piensa en la forma de combate estático que se volvió común en el frente occidental.",
      "correctArgument": "La Primera Guerra Mundial se distinguió por la guerra de trincheras, especialmente en Europa occidental, donde los ejércitos permanecieron durante largos periodos en posiciones fijas.",
      "incorrectArgumentsByOption": {
        "b": "la guerra con misiles nucleares: las armas nucleares no se usaron en esa guerra.",
        "c": "el combate exclusivo en territorio americano: el conflicto se desarrolló sobre todo en Europa y otras regiones.",
        "d": "la desaparición total de la artillería: la artillería fue muy importante en ese conflicto.",
        "e": "el uso único de ejércitos mercenarios: no fue la característica principal de la guerra."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 55,
      "rangeStart": 53,
      "rangeEnd": 64
    },
    {
      "id": "reactivo-56",
      "number": 56,
      "areaId": "historia",
      "areaName": "Historia",
      "block": "Primera Guerra Mundial, consecuencias",
      "prompt": "Una consecuencia política de la Primera Guerra Mundial fue",
      "options": [
        {
          "label": "a",
          "text": "el fortalecimiento del feudalismo europeo",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "la formación de nuevos Estados tras la caída de imperios",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "la restauración inmediata del poder zarista en Rusia",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "la desaparición de toda rivalidad entre potencias",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "la unión política de toda Europa en un solo país",
          "kind": "text"
        }
      ],
      "correctOption": "b",
      "correctOptionText": "la formación de nuevos Estados tras la caída de imperios",
      "hint": "Observa qué ocurrió con imperios como el austrohúngaro y el otomano.",
      "correctArgument": "Después de la Primera Guerra Mundial se desintegraron varios imperios y surgieron nuevos Estados nacionales en Europa y otras zonas.",
      "incorrectArgumentsByOption": {
        "a": "el fortalecimiento del feudalismo europeo: el feudalismo no fue una consecuencia de ese conflicto.",
        "c": "la restauración inmediata del poder zarista en Rusia: ocurrió lo contrario, pues el zarismo cayó.",
        "d": "la desaparición de toda rivalidad entre potencias: las tensiones internacionales continuaron.",
        "e": "la unión política de toda Europa en un solo país: eso no ocurrió tras la guerra."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 56,
      "rangeStart": 53,
      "rangeEnd": 64
    },
    {
      "id": "reactivo-57",
      "number": 57,
      "areaId": "historia",
      "areaName": "Historia",
      "block": "Guerra Fría",
      "prompt": "La Guerra Fría se caracterizó principalmente por",
      "options": [
        {
          "label": "a",
          "text": "una alianza militar permanente entre Estados Unidos y la Unión Soviética",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "una rivalidad ideológica y política sin guerra frontal directa entre ambas potencias",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "una guerra colonial entre España y Portugal en América",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "un conflicto religioso entre el Vaticano y la Iglesia ortodoxa",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "una invasión directa de Europa por parte de Japón",
          "kind": "text"
        }
      ],
      "correctOption": "b",
      "correctOptionText": "una rivalidad ideológica y política sin guerra frontal directa entre ambas potencias",
      "hint": "No fue una guerra abierta entre los dos bloques, sino una confrontación indirecta.",
      "correctArgument": "La Guerra Fría enfrentó a Estados Unidos y a la Unión Soviética en lo ideológico, político, militar y económico, pero sin combate directo a gran escala entre ambos.",
      "incorrectArgumentsByOption": {
        "a": "una alianza militar permanente entre Estados Unidos y la Unión Soviética: ocurrió lo contrario, fueron bloques rivales.",
        "c": "una guerra colonial entre España y Portugal en América: no corresponde a ese periodo.",
        "d": "un conflicto religioso entre el Vaticano y la Iglesia ortodoxa: no define la Guerra Fría.",
        "e": "una invasión directa de Europa por parte de Japón: no fue el eje de ese enfrentamiento."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 57,
      "rangeStart": 53,
      "rangeEnd": 64
    },
    {
      "id": "reactivo-58",
      "number": 58,
      "areaId": "historia",
      "areaName": "Historia",
      "block": "Guerra del Golfo",
      "prompt": "La Guerra del Golfo de 1990 a 1991 comenzó cuando",
      "options": [
        {
          "label": "a",
          "text": "Iraq invadió Kuwait",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "Irán ocupó Arabia Saudita",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "Turquía invadió Siria",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "Egipto ocupó Jordania",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "Israel invadió Líbano",
          "kind": "text"
        }
      ],
      "correctOption": "a",
      "correctOptionText": "Iraq invadió Kuwait",
      "hint": "Recuerda el conflicto por la ocupación de un territorio con importancia petrolera.",
      "correctArgument": "La Guerra del Golfo se desencadenó cuando Iraq invadió Kuwait, lo que provocó la intervención de una coalición internacional encabezada por Estados Unidos.",
      "incorrectArgumentsByOption": {
        "b": "Irán ocupó Arabia Saudita: no fue el hecho que inició esa guerra.",
        "c": "Turquía invadió Siria: no corresponde al origen del conflicto.",
        "d": "Egipto ocupó Jordania: no fue el acontecimiento detonante.",
        "e": "Israel invadió Líbano: pertenece a otros conflictos de la región."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 58,
      "rangeStart": 53,
      "rangeEnd": 64
    },
    {
      "id": "reactivo-59",
      "number": 59,
      "areaId": "historia",
      "areaName": "Historia",
      "block": "Santo Oficio en Nueva España",
      "prompt": "La institución novohispana encargada de vigilar la ortodoxia religiosa y perseguir herejías fue",
      "options": [
        {
          "label": "a",
          "text": "el Ayuntamiento",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "el Tribunal del Santo Oficio",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "la Casa de Contratación",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "la Audiencia de México",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "el Consulado de Comerciantes",
          "kind": "text"
        }
      ],
      "correctOption": "b",
      "correctOptionText": "el Tribunal del Santo Oficio",
      "hint": "Busca la institución relacionada con el control ideológico y religioso.",
      "correctArgument": "El Tribunal del Santo Oficio de la Inquisición fue el órgano encargado de vigilar las creencias y castigar conductas consideradas contrarias a la fe católica en la Nueva España.",
      "incorrectArgumentsByOption": {
        "a": "el Ayuntamiento: se vinculaba al gobierno local, no al control de la ortodoxia religiosa.",
        "c": "la Casa de Contratación: regulaba asuntos comerciales y de navegación con América.",
        "d": "la Audiencia de México: tenía funciones judiciales y administrativas, no ese papel específico.",
        "e": "el Consulado de Comerciantes: agrupaba intereses mercantiles, no religiosos."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 59,
      "rangeStart": 53,
      "rangeEnd": 64
    },
    {
      "id": "reactivo-60",
      "number": 60,
      "areaId": "historia",
      "areaName": "Historia",
      "block": "Nueva España, economía minera",
      "prompt": "La actividad económica que sostuvo gran parte de la riqueza de la Nueva España fue la",
      "options": [
        {
          "label": "a",
          "text": "extracción de metales preciosos",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "pesca comercial en el Pacífico",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "producción masiva de café",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "industria automotriz colonial",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "exportación de caucho natural",
          "kind": "text"
        }
      ],
      "correctOption": "a",
      "correctOptionText": "extracción de metales preciosos",
      "hint": "Piensa en la actividad que dio fama a regiones como Zacatecas y Guanajuato.",
      "correctArgument": "La minería, especialmente de plata, fue base de la economía novohispana y generó gran parte de la riqueza y del comercio colonial.",
      "incorrectArgumentsByOption": {
        "b": "pesca comercial en el Pacífico: no fue la base principal de la economía colonial.",
        "c": "producción masiva de café: corresponde a otra etapa y no fue el eje económico novohispano.",
        "d": "industria automotriz colonial: es anacrónica y no existía en ese periodo.",
        "e": "exportación de caucho natural: no fue la actividad central de la Nueva España."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 60,
      "rangeStart": 53,
      "rangeEnd": 64
    },
    {
      "id": "reactivo-61",
      "number": 61,
      "areaId": "historia",
      "areaName": "Historia",
      "block": "Guerra entre México y Estados Unidos de 1846 a 1847",
      "prompt": "Uno de los factores que favoreció la guerra entre México y Estados Unidos de América de 1846 a 1847 fue",
      "options": [
        {
          "label": "a",
          "text": "la anexión de Texas por Estados Unidos y su política expansionista",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "la invasión francesa a Veracruz y la caída del Segundo Imperio",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "la pérdida de Cuba por parte de España",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "la independencia de Brasil y su expansión territorial",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "la unificación alemana y el reparto colonial europeo",
          "kind": "text"
        }
      ],
      "correctOption": "a",
      "correctOptionText": "la anexión de Texas por Estados Unidos y su política expansionista",
      "hint": "Busca el conflicto relacionado con el territorio texano y la idea de expandirse hacia el oeste.",
      "correctArgument": "La anexión de Texas y el expansionismo estadounidense fueron factores directos que llevaron al conflicto armado con México.",
      "incorrectArgumentsByOption": {
        "b": "la invasión francesa a Veracruz y la caída del Segundo Imperio: corresponde a otro proceso histórico.",
        "c": "la pérdida de Cuba por parte de España: no explica la guerra entre México y Estados Unidos.",
        "d": "la independencia de Brasil y su expansión territorial: no se relaciona con ese conflicto.",
        "e": "la unificación alemana y el reparto colonial europeo: pertenecen a otro contexto histórico."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 61,
      "rangeStart": 53,
      "rangeEnd": 64
    },
    {
      "id": "reactivo-62",
      "number": 62,
      "areaId": "historia",
      "areaName": "Historia",
      "block": "Constitución de 1917, artículo 27",
      "prompt": "El artículo 27 de la Constitución de 1917 fue muy importante porque estableció que",
      "options": [
        {
          "label": "a",
          "text": "la propiedad de tierras y recursos naturales corresponde originariamente a la Nación",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "todos los cargos públicos serían hereditarios",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "la Iglesia controlaría la educación nacional",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "los extranjeros tendrían prioridad sobre los mexicanos en el campo",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "las haciendas conservarían todos sus privilegios coloniales",
          "kind": "text"
        }
      ],
      "correctOption": "a",
      "correctOptionText": "la propiedad de tierras y recursos naturales corresponde originariamente a la Nación",
      "hint": "Se relaciona con el control de la tierra, el subsuelo y otros recursos del país.",
      "correctArgument": "El artículo 27 reconoció que la Nación tiene dominio original sobre tierras, aguas y recursos naturales, lo cual permitió regular su aprovechamiento y la propiedad.",
      "incorrectArgumentsByOption": {
        "b": "todos los cargos públicos serían hereditarios: eso contradice el marco constitucional moderno.",
        "c": "la Iglesia controlaría la educación nacional: no es el contenido de ese artículo.",
        "d": "los extranjeros tendrían prioridad sobre los mexicanos en el campo: no fue su propósito.",
        "e": "las haciendas conservarían todos sus privilegios coloniales: el artículo fue contrario a esos privilegios."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 62,
      "rangeStart": 53,
      "rangeEnd": 64
    },
    {
      "id": "reactivo-63",
      "number": 63,
      "areaId": "historia",
      "areaName": "Historia",
      "block": "Modernismo en México",
      "prompt": "Uno de los autores mexicanos más representativos del Modernismo literario fue",
      "options": [
        {
          "label": "a",
          "text": "Manuel Gutiérrez Nájera",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "José Joaquín Fernández de Lizardi",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "Ignacio Manuel Altamirano",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "Lucas Alamán",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "Sor Juana Inés de la Cruz",
          "kind": "text"
        }
      ],
      "correctOption": "a",
      "correctOptionText": "Manuel Gutiérrez Nájera",
      "hint": "Busca al escritor vinculado con la renovación estética y el cuidado formal del lenguaje a fines del siglo XIX.",
      "correctArgument": "Manuel Gutiérrez Nájera es reconocido como uno de los autores mexicanos representativos y precursores del Modernismo literario.",
      "incorrectArgumentsByOption": {
        "b": "José Joaquín Fernández de Lizardi: pertenece a una etapa literaria anterior.",
        "c": "Ignacio Manuel Altamirano: fue importante en la literatura mexicana, pero no es la respuesta más representativa aquí.",
        "d": "Lucas Alamán: destacó en la vida política e histórica, no como autor modernista.",
        "e": "Sor Juana Inés de la Cruz: pertenece al periodo virreinal y a otra corriente literaria."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 63,
      "rangeStart": 53,
      "rangeEnd": 64
    },
    {
      "id": "reactivo-64",
      "number": 64,
      "areaId": "historia",
      "areaName": "Historia",
      "block": "México contemporáneo",
      "prompt": "Después de la crisis de legitimidad electoral de 1988, se creó en México la institución encargada de organizar las elecciones federales llamada",
      "options": [
        {
          "label": "a",
          "text": "Instituto Federal Electoral",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "Comisión Nacional de los Derechos Humanos",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "Instituto Nacional de Estadística y Geografía",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "Instituto Federal de Telecomunicaciones",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "Tribunal de Justicia Administrativa",
          "kind": "text"
        }
      ],
      "correctOption": "a",
      "correctOptionText": "Instituto Federal Electoral",
      "hint": "Busca la institución electoral creada antes del actual INE.",
      "correctArgument": "El Instituto Federal Electoral fue creado para fortalecer la organización de las elecciones y recuperar confianza en los procesos electorales federales.",
      "incorrectArgumentsByOption": {
        "b": "Comisión Nacional de los Derechos Humanos: atiende temas de derechos humanos, no la organización electoral.",
        "c": "Instituto Nacional de Estadística y Geografía: produce información estadística y geográfica.",
        "d": "Instituto Federal de Telecomunicaciones: regula el sector de telecomunicaciones y radiodifusión.",
        "e": "Tribunal de Justicia Administrativa: resuelve asuntos administrativos, no organiza elecciones."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 64,
      "rangeStart": 53,
      "rangeEnd": 64
    },
    {
      "id": "reactivo-65",
      "number": 65,
      "areaId": "matematicas",
      "areaName": "Matemáticas",
      "block": "Operaciones con números con signo",
      "prompt": "Resultado de realizar la siguiente operación:\n\n(-24) ÷ 3 + (5)(-2) - (-6)",
      "options": [
        {
          "label": "a",
          "text": "-24",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "-12",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "-4",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "4",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "12",
          "kind": "text"
        }
      ],
      "correctOption": "b",
      "correctOptionText": "-12",
      "hint": "Primero resuelve división y multiplicación; después suma y resta de izquierda a derecha.",
      "correctArgument": "Primero:\n(-24) ÷ 3 = -8\n(5)(-2) = -10\nEntonces la expresión queda:\n-8 + (-10) - (-6)\nAhora:\n-8 - 10 + 6 = -18 + 6 = -12\nPor eso el resultado correcto es -12.",
      "incorrectArgumentsByOption": {
        "a": "-24: no corresponde al resultado de operar todos los términos.",
        "c": "-4: aparece si se cometen errores con los signos al final.",
        "d": "4: resulta de tratar mal la resta de un número negativo.",
        "e": "12: ignora que los dos primeros resultados parciales son negativos."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 65,
      "rangeStart": 65,
      "rangeEnd": 76
    },
    {
      "id": "reactivo-66",
      "number": 66,
      "areaId": "matematicas",
      "areaName": "Matemáticas",
      "block": "Jerarquía de operaciones",
      "prompt": "Agrega paréntesis para indicar el orden correcto de las operaciones en la expresión:\n\n8 + 12 ÷ 3 - 2 × 4",
      "options": [
        {
          "label": "a",
          "text": "(8 + 12) ÷ (3 - 2) × 4",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "8 + (12 ÷ 3) - (2 × 4)",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "(8 + 12) ÷ 3 - (2 × 4)",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "8 + 12 ÷ (3 - 2) × 4",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "(8 + 12 ÷ 3 - 2) × 4",
          "kind": "text"
        }
      ],
      "correctOption": "b",
      "correctOptionText": "8 + (12 ÷ 3) - (2 × 4)",
      "hint": "La jerarquía normal resuelve primero división y multiplicación, no las sumas iniciales.",
      "correctArgument": "En la expresión original, primero se resuelven la división y la multiplicación:\n12 ÷ 3 y 2 × 4\nDespués se hace:\n8 + resultado - resultado\nLa opción b) respeta exactamente ese orden sin alterar la expresión.",
      "incorrectArgumentsByOption": {
        "a": "obliga a sumar y restar antes de tiempo, cambiando por completo la operación original.",
        "c": "hace primero 8 + 12, lo cual rompe la jerarquía correcta.",
        "d": "convierte 3 - 2 en una operación previa que no existía como prioridad.",
        "e": "agrupa casi toda la expresión y modifica el orden natural de cálculo."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 66,
      "rangeStart": 65,
      "rangeEnd": 76
    },
    {
      "id": "reactivo-67",
      "number": 67,
      "areaId": "matematicas",
      "areaName": "Matemáticas",
      "block": "Porcentajes",
      "prompt": "Una mochila cuesta 480 pesos y tiene un descuento del 25%. ¿Cuál es su precio final?",
      "options": [
        {
          "label": "a",
          "text": "120 pesos",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "360 pesos",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "400 pesos",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "420 pesos",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "455 pesos",
          "kind": "text"
        }
      ],
      "correctOption": "b",
      "correctOptionText": "360 pesos",
      "hint": "Primero calcula cuánto representa el 25% de 480 y luego réstalo del precio original.",
      "correctArgument": "El 25% de 480 es:\n480 × 0.25 = 120\nEse es el descuento. Entonces el precio final es:\n480 - 120 = 360\nPor eso la respuesta correcta es 360 pesos.",
      "incorrectArgumentsByOption": {
        "a": "120 pesos: es el valor del descuento, no el precio final.",
        "c": "400 pesos: no corresponde al 25% de descuento aplicado correctamente.",
        "d": "420 pesos: deja un descuento menor al indicado.",
        "e": "455 pesos: casi no reduce el precio y no respeta el porcentaje dado."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 67,
      "rangeStart": 65,
      "rangeEnd": 76
    },
    {
      "id": "reactivo-68",
      "number": 68,
      "areaId": "matematicas",
      "areaName": "Matemáticas",
      "block": "Álgebra básica",
      "prompt": "Simplifica la siguiente expresión algebraica:\n\n4x - 3 + 2x + 5",
      "options": [
        {
          "label": "a",
          "text": "6x + 2",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "6x - 2",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "8x + 2",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "2x + 8",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "4x + 7",
          "kind": "text"
        }
      ],
      "correctOption": "a",
      "correctOptionText": "6x + 2",
      "hint": "Junta términos semejantes: las x con las x y los números con los números.",
      "correctArgument": "Se suman los términos con x:\n4x + 2x = 6x\nLuego los números:\n-3 + 5 = 2\nPor tanto, la expresión simplificada es:\n6x + 2",
      "incorrectArgumentsByOption": {
        "b": "6x - 2: suma mal los términos independientes.",
        "c": "8x + 2: suma de forma incorrecta los coeficientes de x.",
        "d": "2x + 8: altera tanto el término literal como el independiente.",
        "e": "4x + 7: no combina correctamente los términos semejantes."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 68,
      "rangeStart": 65,
      "rangeEnd": 76
    },
    {
      "id": "reactivo-69",
      "number": 69,
      "areaId": "matematicas",
      "areaName": "Matemáticas",
      "block": "Ecuaciones de primer grado",
      "prompt": "Al doble de un número se le suman 7 y se obtiene 25. ¿Cuál es ese número?",
      "options": [
        {
          "label": "a",
          "text": "7",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "8",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "9",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "10",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "11",
          "kind": "text"
        }
      ],
      "correctOption": "c",
      "correctOptionText": "9",
      "hint": "Primero resta 7 al resultado total y después divide entre 2.",
      "correctArgument": "Sea x el número.\nLa ecuación es:\n2x + 7 = 25\nRestando 7 en ambos lados:\n2x = 18\nDividiendo entre 2:\nx = 9\nPor eso el número correcto es 9.",
      "incorrectArgumentsByOption": {
        "a": "7: si se sustituye, da 14 + 7 = 21, no 25.",
        "b": "8: al sustituirlo, resulta 16 + 7 = 23.",
        "d": "10: al sustituirlo, resulta 20 + 7 = 27.",
        "e": "11: al sustituirlo, resulta 22 + 7 = 29."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 69,
      "rangeStart": 65,
      "rangeEnd": 76
    },
    {
      "id": "reactivo-70",
      "number": 70,
      "areaId": "matematicas",
      "areaName": "Matemáticas",
      "block": "Sistemas de 2 × 2",
      "prompt": "Resuelve el siguiente sistema de ecuaciones:\n\n2x + y = 11\nx - y = 1",
      "options": [
        {
          "label": "a",
          "text": "x = 3, y = 5",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "x = 4, y = 3",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "x = 5, y = 1",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "x = 6, y = -1",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "x = 2, y = 7",
          "kind": "text"
        }
      ],
      "correctOption": "b",
      "correctOptionText": "x = 4, y = 3",
      "hint": "Puedes sumar ambas ecuaciones para eliminar una variable rápidamente.",
      "correctArgument": "Si sumamos las ecuaciones:\n2x + y = 11\nx - y = 1\nSe obtiene:\n3x = 12\nEntonces:\nx = 4\nSustituyendo en la segunda:\n4 - y = 1\ny = 3\nPor eso la solución es x = 4, y = 3.",
      "incorrectArgumentsByOption": {
        "a": "x = 3, y = 5: cumple la primera, pero no la segunda.",
        "c": "x = 5, y = 1: cumple 2x + y = 11, pero no x - y = 1.",
        "d": "x = 6, y = -1: no satisface ambas ecuaciones al mismo tiempo.",
        "e": "x = 2, y = 7: cumple la primera, pero falla en la segunda."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 70,
      "rangeStart": 65,
      "rangeEnd": 76
    },
    {
      "id": "reactivo-71",
      "number": 71,
      "areaId": "matematicas",
      "areaName": "Matemáticas",
      "block": "Ecuación cuadrática",
      "prompt": "Selecciona los valores de x que satisfacen la ecuación:\n\nx² - 7x + 12 = 0",
      "options": [
        {
          "label": "a",
          "text": "2 y 6",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "3 y 4",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "-3 y -4",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "1 y 12",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "-2 y 6",
          "kind": "text"
        }
      ],
      "correctOption": "b",
      "correctOptionText": "3 y 4",
      "hint": "Busca dos números que multiplicados den 12 y sumados den 7.",
      "correctArgument": "La ecuación se puede factorizar así:\nx² - 7x + 12 = (x - 3)(x - 4)\nEntonces:\nx - 3 = 0  o  x - 4 = 0\nPor lo tanto:\nx = 3  y  x = 4\nEsa es la opción correcta.",
      "incorrectArgumentsByOption": {
        "a": "2 y 6: multiplican 12, pero suman 8, no 7.",
        "c": "-3 y -4: sus signos no corresponden a la factorización de la ecuación.",
        "d": "1 y 12: multiplican 12, pero suman 13.",
        "e": "-2 y 6: multiplican -12, no 12."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 71,
      "rangeStart": 65,
      "rangeEnd": 76
    },
    {
      "id": "reactivo-72",
      "number": 72,
      "areaId": "matematicas",
      "areaName": "Matemáticas",
      "block": "Lectura de tablas y datos",
      "prompt": "La siguiente tabla muestra las ventas de una papelería durante tres días.\n\n¿Cuál producto tuvo la mayor venta total en los tres días?",
      "options": [
        {
          "label": "a",
          "text": "Cuadernos",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "Plumas",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "Colores",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "Cuadernos y colores",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "Todos vendieron lo mismo",
          "kind": "text"
        }
      ],
      "correctOption": "b",
      "correctOptionText": "Plumas",
      "hint": "Suma las ventas de cada renglón y luego compara los totales.",
      "correctArgument": "Sumando por producto:\nCuadernos: 8 + 12 + 10 = 30\nPlumas: 15 + 9 + 11 = 35\nColores: 6 + 7 + 8 = 21\nEl total más alto es 35, correspondiente a plumas.",
      "incorrectArgumentsByOption": {
        "a": "Cuadernos: su total es 30, menor que 35.",
        "c": "Colores: su total es 21, el menor de los tres.",
        "d": "Cuadernos y colores: sus totales no coinciden y ninguno supera a plumas.",
        "e": "Todos vendieron lo mismo: los datos muestran totales diferentes."
      },
      "visual": {
        "kind": "preformatted",
        "content": "Producto      Lunes   Martes   Miércoles\nCuadernos       8       12         10\nPlumas         15        9         11\nColores         6        7          8"
      },
      "sourceOrder": 72,
      "rangeStart": 65,
      "rangeEnd": 76
    },
    {
      "id": "reactivo-73",
      "number": 73,
      "areaId": "matematicas",
      "areaName": "Matemáticas",
      "block": "Promedio",
      "prompt": "Las calificaciones de Andrea en cinco materias fueron:\n8, 7, 9, 6 y 10\n\nLa media aritmética es",
      "options": [
        {
          "label": "a",
          "text": "7",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "7.5",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "8",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "8.5",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "9",
          "kind": "text"
        }
      ],
      "correctOption": "c",
      "correctOptionText": "8",
      "hint": "Suma todas las calificaciones y divide entre el número total de materias.",
      "correctArgument": "Primero se suman las calificaciones:\n8 + 7 + 9 + 6 + 10 = 40\nLuego se divide entre 5:\n40 ÷ 5 = 8\nPor eso la media aritmética es 8.",
      "incorrectArgumentsByOption": {
        "a": "7: queda por debajo del promedio real.",
        "b": "7.5: resulta de una división incorrecta.",
        "d": "8.5: está por encima del valor correcto.",
        "e": "9: sería demasiado alto para el conjunto dado."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 73,
      "rangeStart": 65,
      "rangeEnd": 76
    },
    {
      "id": "reactivo-74",
      "number": 74,
      "areaId": "matematicas",
      "areaName": "Matemáticas",
      "block": "Geometría, ángulos alternos internos",
      "prompt": "Dos rectas paralelas son cortadas por una transversal. En la intersección superior los ángulos se numeran así:\n1 arriba a la izquierda, 2 arriba a la derecha, 3 abajo a la derecha y 4 abajo a la izquierda.\nEn la intersección inferior:\n5 arriba a la izquierda, 6 arriba a la derecha, 7 abajo a la derecha y 8 abajo a la izquierda.\n\n¿Cuál de los siguientes pares forma ángulos alternos internos?",
      "options": [
        {
          "label": "a",
          "text": "4 y 6",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "4 y 5",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "3 y 6",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "1 y 8",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "2 y 7",
          "kind": "text"
        }
      ],
      "correctOption": "a",
      "correctOptionText": "4 y 6",
      "hint": "Los alternos internos están dentro de las paralelas y en lados opuestos de la transversal.",
      "correctArgument": "Los ángulos interiores son 3, 4, 5 y 6. Los alternos internos son los que están dentro de las paralelas y a lados contrarios de la transversal. Uno de esos pares es 4 y 6.",
      "incorrectArgumentsByOption": {
        "b": "4 y 5: son interiores, pero están del mismo lado de la transversal.",
        "c": "3 y 6: también son interiores del mismo lado.",
        "d": "1 y 8: son exteriores, no interiores.",
        "e": "2 y 7: son exteriores, por eso no forman un par alterno interno."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 74,
      "rangeStart": 65,
      "rangeEnd": 76
    },
    {
      "id": "reactivo-75",
      "number": 75,
      "areaId": "matematicas",
      "areaName": "Matemáticas",
      "block": "Medición, área",
      "prompt": "Determina el área de un rectángulo que mide 12.5 cm de largo y 4.8 cm de ancho.",
      "options": [
        {
          "label": "a",
          "text": "55 cm²",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "60 cm²",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "62.5 cm²",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "17.3 cm²",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "30 cm²",
          "kind": "text"
        }
      ],
      "correctOption": "b",
      "correctOptionText": "60 cm²",
      "hint": "El área del rectángulo se obtiene multiplicando largo por ancho.",
      "correctArgument": "El área de un rectángulo se calcula así:\nÁrea = largo × ancho\nEntonces:\n12.5 × 4.8 = 60\nPor lo tanto, el área correcta es 60 cm².",
      "incorrectArgumentsByOption": {
        "a": "55 cm²: resulta de una multiplicación incorrecta.",
        "c": "62.5 cm²: corresponde a usar mal uno de los datos.",
        "d": "17.3 cm²: es demasiado pequeño para esas medidas.",
        "e": "30 cm²: representa solo la mitad del área correcta."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 75,
      "rangeStart": 65,
      "rangeEnd": 76
    },
    {
      "id": "reactivo-76",
      "number": 76,
      "areaId": "matematicas",
      "areaName": "Matemáticas",
      "block": "Medición, volumen",
      "prompt": "¿Cuál es el volumen de un prisma rectangular de 6 cm de largo, 4 cm de ancho y 5 cm de alto?",
      "options": [
        {
          "label": "a",
          "text": "60 cm³",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "90 cm³",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "120 cm³",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "150 cm³",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "200 cm³",
          "kind": "text"
        }
      ],
      "correctOption": "c",
      "correctOptionText": "120 cm³",
      "hint": "Multiplica las tres dimensiones del prisma.",
      "correctArgument": "El volumen de un prisma rectangular se obtiene multiplicando largo × ancho × alto:\n6 × 4 × 5 = 120\nPor eso el volumen correcto es 120 cm³.",
      "incorrectArgumentsByOption": {
        "a": "60 cm³: toma solo parte de las dimensiones y deja una fuera.",
        "b": "90 cm³: no corresponde al producto real de 6, 4 y 5.",
        "d": "150 cm³: aumenta de más el resultado correcto.",
        "e": "200 cm³: no guarda relación con la multiplicación de los datos dados."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 76,
      "rangeStart": 65,
      "rangeEnd": 76
    },
    {
      "id": "reactivo-77",
      "number": 77,
      "areaId": "habilidad-verbal",
      "areaName": "Habilidad verbal",
      "block": "Comprensión lectora, sentido global",
      "prompt": "Según el sentido global del texto, los avances en la exploración de las profundidades marinas han sido",
      "options": [
        {
          "label": "a",
          "text": "inexistentes",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "irrelevantes",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "notables",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "definitivos",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "exagerados",
          "kind": "text"
        }
      ],
      "correctOption": "c",
      "correctOptionText": "notables",
      "hint": "El texto reconoce avances importantes, pero también deja claro que todavía hay mucho por conocer.",
      "correctArgument": "El texto afirma que en las últimas décadas se han obtenido imágenes, muestras y registros que antes eran imposibles. Eso indica que los avances sí han sido importantes o notables, aunque no definitivos.",
      "incorrectArgumentsByOption": {
        "a": "inexistentes: es falsa porque el texto sí menciona logros recientes.",
        "b": "irrelevantes: contradice la idea de que ahora se conocen mejor varias zonas y organismos.",
        "d": "definitivos: no, porque el texto insiste en que aún hay muchas limitaciones y preguntas abiertas.",
        "e": "exagerados: el texto no los presenta como inflados, sino como reales pero todavía insuficientes."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 77,
      "rangeStart": 77,
      "rangeEnd": 92
    },
    {
      "id": "reactivo-78",
      "number": 78,
      "areaId": "habilidad-verbal",
      "areaName": "Habilidad verbal",
      "block": "Comprensión lectora, idea secundaria",
      "prompt": "Las profundidades marinas siguen guardando muchos misterios para el ser humano debido principalmente a",
      "options": [
        {
          "label": "a",
          "text": "la falta de interés de los científicos",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "la desaparición de los océanos más profundos",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "las limitaciones tecnológicas y materiales para explorarlas",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "la ausencia total de vida en esas regiones",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "la prohibición mundial de investigar el fondo oceánico",
          "kind": "text"
        }
      ],
      "correctOption": "c",
      "correctOptionText": "las limitaciones tecnológicas y materiales para explorarlas",
      "hint": "El segundo párrafo menciona presión, oscuridad y costos elevados.",
      "correctArgument": "El texto explica que la presión extrema, la oscuridad permanente y el alto costo de las expediciones dificultan el estudio directo. Esas son limitaciones técnicas y materiales que frenan el conocimiento completo de esas zonas.",
      "incorrectArgumentsByOption": {
        "a": "la falta de interés de los científicos: el texto muestra lo contrario, pues sí existe investigación constante.",
        "b": "la desaparición de los océanos más profundos: eso no aparece en el texto.",
        "d": "la ausencia total de vida en esas regiones: también es falsa, ya que se mencionan comunidades de organismos.",
        "e": "la prohibición mundial de investigar el fondo oceánico: no se menciona ninguna prohibición de ese tipo."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 78,
      "rangeStart": 77,
      "rangeEnd": 92
    },
    {
      "id": "reactivo-79",
      "number": 79,
      "areaId": "habilidad-verbal",
      "areaName": "Habilidad verbal",
      "block": "Comprensión lectora, hipótesis",
      "prompt": "¿Cuál de los siguientes enunciados funciona como una hipótesis dentro del texto?",
      "options": [
        {
          "label": "a",
          "text": "Los océanos cubren gran parte de la superficie terrestre.",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "Los robots de alta presión han permitido obtener registros antes imposibles.",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "La presión extrema y la oscuridad dificultan las expediciones.",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "Podrían existir organismos aún desconocidos con utilidad para la medicina.",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "Ya se conocen con precisión todas las especies del fondo marino.",
          "kind": "text"
        }
      ],
      "correctOption": "d",
      "correctOptionText": "Podrían existir organismos aún desconocidos con utilidad para la medicina.",
      "hint": "Una hipótesis plantea una posibilidad, no un hecho ya comprobado.",
      "correctArgument": "Ese enunciado expresa una posibilidad planteada por especialistas, no una certeza demostrada. Por eso funciona como hipótesis dentro del texto.",
      "incorrectArgumentsByOption": {
        "a": "es un dato general presentado como hecho.",
        "b": "describe un avance ya logrado, no una suposición.",
        "c": "menciona obstáculos actuales confirmados en el texto.",
        "e": "contradice directamente el contenido, porque el texto dice que todavía no se sabe con precisión cuántas especies existen."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 79,
      "rangeStart": 77,
      "rangeEnd": 92
    },
    {
      "id": "reactivo-80",
      "number": 80,
      "areaId": "habilidad-verbal",
      "areaName": "Habilidad verbal",
      "block": "Comprensión lectora, tema",
      "prompt": "¿Cuál es el tema central del texto?",
      "options": [
        {
          "label": "a",
          "text": "La pesca comercial en mares profundos",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "La exploración científica de las profundidades marinas",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "Los viajes turísticos en submarinos",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "La historia completa de todos los océanos",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "La contaminación de los puertos industriales",
          "kind": "text"
        }
      ],
      "correctOption": "b",
      "correctOptionText": "La exploración científica de las profundidades marinas",
      "hint": "El texto se concentra en lo que se ha podido estudiar del fondo marino y en lo que aún falta por conocer.",
      "correctArgument": "Todo el texto gira alrededor del estudio del fondo marino, los avances recientes y las limitaciones que aún existen para conocerlo mejor. Ese es el tema central.",
      "incorrectArgumentsByOption": {
        "a": "La pesca comercial en mares profundos: no es el asunto principal del texto.",
        "c": "Los viajes turísticos en submarinos: no se menciona turismo.",
        "d": "La historia completa de todos los océanos: el texto no pretende abarcar todo eso.",
        "e": "La contaminación de los puertos industriales: ese tema no aparece en la lectura.\n\nTEXTO BASE PARA LOS REACTIVOS 81 AL 83\n\nEl cuervo y el gorrión\n\nEn un verano muy seco, un cuervo y un gorrión encontraron una jarra con un poco de agua en el fondo. El gorrión, desesperado, intentó volcarla de inmediato, pero solo consiguió moverla un poco y derramar unas gotas. El cuervo observó con calma, recogió pequeñas piedras y comenzó a dejarlas caer dentro de la jarra. Poco a poco, el nivel del agua subió hasta que pudo beber. El gorrión, avergonzado, preguntó cómo lo había logrado. El cuervo respondió: «Quien se deja dominar por la prisa pierde lo que la paciencia y la reflexión pueden alcanzar»."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 80,
      "rangeStart": 77,
      "rangeEnd": 92
    },
    {
      "id": "reactivo-81",
      "number": 81,
      "areaId": "habilidad-verbal",
      "areaName": "Habilidad verbal",
      "block": "Lectura aplicada, comprensión de fábula",
      "prompt": "En la narración, el gorrión no logró beber agua porque",
      "options": [
        {
          "label": "a",
          "text": "la jarra estaba completamente vacía",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "el cuervo le quitó toda el agua",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "actuó con desesperación y sin pensar",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "las piedras absorbieron el agua de la jarra",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "el verano no era realmente seco",
          "kind": "text"
        }
      ],
      "correctOption": "c",
      "correctOptionText": "actuó con desesperación y sin pensar",
      "hint": "Observa la diferencia entre la conducta del gorrión y la del cuervo.",
      "correctArgument": "El gorrión quiso resolver el problema con prisa, sin analizar otra forma de hacerlo. Esa desesperación lo llevó a fallar.",
      "incorrectArgumentsByOption": {
        "a": "la jarra estaba completamente vacía: el texto dice que sí tenía agua en el fondo.",
        "b": "el cuervo le quitó toda el agua: el cuervo resolvió el problema con ingenio, no por despojo.",
        "d": "las piedras absorbieron el agua de la jarra: las piedras elevaron el nivel, no la absorbieron.",
        "e": "el verano no era realmente seco: el texto sí presenta un ambiente de sequía y eso no explica el fracaso del gorrión."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 81,
      "rangeStart": 77,
      "rangeEnd": 92
    },
    {
      "id": "reactivo-82",
      "number": 82,
      "areaId": "habilidad-verbal",
      "areaName": "Habilidad verbal",
      "block": "Lectura aplicada, tipo de texto",
      "prompt": "Los animales hablan en el texto porque se trata de una",
      "options": [
        {
          "label": "a",
          "text": "noticia periodística",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "biografía",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "fábula",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "crónica deportiva",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "descripción científica",
          "kind": "text"
        }
      ],
      "correctOption": "c",
      "correctOptionText": "fábula",
      "hint": "Es un texto breve con animales que actúan como personas y deja una enseñanza.",
      "correctArgument": "La fábula es un texto narrativo breve en el que suelen intervenir animales con rasgos humanos y que termina dejando una enseñanza o moraleja.",
      "incorrectArgumentsByOption": {
        "a": "noticia periodística: no informa un hecho real y verificable.",
        "b": "biografía: no cuenta la vida real de una persona.",
        "d": "crónica deportiva: no relata un evento deportivo.",
        "e": "descripción científica: no explica objetivamente características de una especie."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 82,
      "rangeStart": 77,
      "rangeEnd": 92
    },
    {
      "id": "reactivo-83",
      "number": 83,
      "areaId": "habilidad-verbal",
      "areaName": "Habilidad verbal",
      "block": "Lectura aplicada, moraleja",
      "prompt": "La moraleja del texto es que",
      "options": [
        {
          "label": "a",
          "text": "la fuerza siempre vale más que la inteligencia",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "la paciencia y la reflexión permiten resolver mejor los problemas",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "los animales no deben compartir el agua",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "quien actúa primero siempre obtiene la recompensa",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "la vergüenza impide aprender de los errores",
          "kind": "text"
        }
      ],
      "correctOption": "b",
      "correctOptionText": "la paciencia y la reflexión permiten resolver mejor los problemas",
      "hint": "La respuesta está casi expresada en la frase final del cuervo.",
      "correctArgument": "El cuervo resuelve el problema con calma e ingenio, mientras el gorrión fracasa por actuar con prisa. La enseñanza es que pensar y mantener paciencia ayuda a encontrar soluciones.",
      "incorrectArgumentsByOption": {
        "a": "la fuerza siempre vale más que la inteligencia: el texto demuestra lo contrario.",
        "c": "los animales no deben compartir el agua: ese no es el mensaje central.",
        "d": "quien actúa primero siempre obtiene la recompensa: el gorrión actúa primero y falla.",
        "e": "la vergüenza impide aprender de los errores: la vergüenza aparece, pero no es la enseñanza principal."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 83,
      "rangeStart": 77,
      "rangeEnd": 92
    },
    {
      "id": "reactivo-84",
      "number": 84,
      "areaId": "habilidad-verbal",
      "areaName": "Habilidad verbal",
      "block": "Analogías",
      "prompt": "Selecciona la opción con el par de palabras que muestra una relación análoga a la de LEALTAD – VIRTUD.",
      "options": [
        {
          "label": "a",
          "text": "engaño – mentira",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "avaricia – defecto",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "amistad – persona",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "valor – valentía",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "trabajo – empleo",
          "kind": "text"
        }
      ],
      "correctOption": "b",
      "correctOptionText": "avaricia – defecto",
      "hint": "La primera palabra pertenece a una categoría más amplia expresada en la segunda.",
      "correctArgument": "La relación es de pertenencia a una categoría: la lealtad es una virtud; de manera semejante, la avaricia es un defecto.",
      "incorrectArgumentsByOption": {
        "a": "engaño – mentira: son términos cercanos, pero no relación de categoría como la del modelo.",
        "c": "amistad – persona: una amistad no es un tipo de persona.",
        "d": "valor – valentía: son términos próximos, no una relación clara de especie y categoría.",
        "e": "trabajo – empleo: se relacionan, pero no con la misma lógica de clasificación moral."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 84,
      "rangeStart": 77,
      "rangeEnd": 92
    },
    {
      "id": "reactivo-85",
      "number": 85,
      "areaId": "habilidad-verbal",
      "areaName": "Habilidad verbal",
      "block": "Analogías",
      "prompt": "Selecciona la opción con el par de palabras que muestra una relación análoga a la de HUMO – FUEGO.",
      "options": [
        {
          "label": "a",
          "text": "semilla – árbol",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "vapor – ebullición",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "lluvia – nube",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "golpe – mano",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "sombra – lámpara",
          "kind": "text"
        }
      ],
      "correctOption": "b",
      "correctOptionText": "vapor – ebullición",
      "hint": "Busca una relación donde el primer elemento sea un efecto o resultado del segundo.",
      "correctArgument": "El humo es producto del fuego; de manera semejante, el vapor es producto de la ebullición. En ambos casos, el primer término resulta del segundo.",
      "incorrectArgumentsByOption": {
        "a": "semilla – árbol: la relación va en otro sentido y no expresa resultado inmediato.",
        "c": "lluvia – nube: está relacionada, pero no con la misma precisión causal del modelo.",
        "d": "golpe – mano: una mano puede producir un golpe, pero la relación es menos exacta y más amplia.",
        "e": "sombra – lámpara: una lámpara normalmente produce luz, no sombra de manera directa."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 85,
      "rangeStart": 77,
      "rangeEnd": 92
    },
    {
      "id": "reactivo-86",
      "number": 86,
      "areaId": "habilidad-verbal",
      "areaName": "Habilidad verbal",
      "block": "Analogías",
      "prompt": "Selecciona la opción con el par de palabras que muestra una relación análoga a la de OVEJA – REBAÑO.",
      "options": [
        {
          "label": "a",
          "text": "pez – cardumen",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "árbol – bosquejo",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "pájaro – nido",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "perro – ladrido",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "abeja – miel",
          "kind": "text"
        }
      ],
      "correctOption": "a",
      "correctOptionText": "pez – cardumen",
      "hint": "La segunda palabra nombra al conjunto o agrupación de la primera.",
      "correctArgument": "La relación es individuo – conjunto. Una oveja forma parte de un rebaño; de modo semejante, un pez forma parte de un cardumen.",
      "incorrectArgumentsByOption": {
        "b": "árbol – bosquejo: «bosquejo» no es conjunto de árboles.",
        "c": "pájaro – nido: el nido es lugar donde habita o pone huevos, no agrupación.",
        "d": "perro – ladrido: es animal y sonido, no individuo y conjunto.",
        "e": "abeja – miel: se relacionan, pero no como miembro y colectividad."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 86,
      "rangeStart": 77,
      "rangeEnd": 92
    },
    {
      "id": "reactivo-87",
      "number": 87,
      "areaId": "habilidad-verbal",
      "areaName": "Habilidad verbal",
      "block": "Antónimos en contexto",
      "prompt": "Selecciona la opción que sustituya con un antónimo la palabra en mayúsculas.\n\nLa comisión APROBÓ el reglamento por unanimidad.",
      "options": [
        {
          "label": "a",
          "text": "aceptó",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "rechazó",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "confirmó",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "avaló",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "respaldó",
          "kind": "text"
        }
      ],
      "correctOption": "b",
      "correctOptionText": "rechazó",
      "hint": "Busca la palabra que exprese la idea contraria a dar autorización o visto bueno.",
      "correctArgument": "«Aprobó» significa aceptar o autorizar. Su antónimo en este contexto es «rechazó», que expresa negar o no aceptar.",
      "incorrectArgumentsByOption": {
        "a": "aceptó: es casi equivalente, no opuesto.",
        "c": "confirmó: mantiene una idea cercana de validación.",
        "d": "avaló: también significa dar apoyo o aprobación.",
        "e": "respaldó: expresa apoyo, no oposición."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 87,
      "rangeStart": 77,
      "rangeEnd": 92
    },
    {
      "id": "reactivo-88",
      "number": 88,
      "areaId": "habilidad-verbal",
      "areaName": "Habilidad verbal",
      "block": "Antónimos en contexto",
      "prompt": "Selecciona la opción que sustituya con un antónimo la palabra en mayúsculas.\n\nEn esa región es FRECUENTE la niebla por la mañana.",
      "options": [
        {
          "label": "a",
          "text": "habitual",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "constante",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "rara",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "temprana",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "visible",
          "kind": "text"
        }
      ],
      "correctOption": "c",
      "correctOptionText": "rara",
      "hint": "No busques una característica de la niebla, sino la idea contraria a que ocurra muchas veces.",
      "correctArgument": "«Frecuente» significa que algo ocurre a menudo. Su antónimo es «rara», que indica poca repetición o escasa aparición.",
      "incorrectArgumentsByOption": {
        "a": "habitual: es sinónimo, no antónimo.",
        "b": "constante: refuerza la idea de frecuencia.",
        "d": "temprana: habla de horario, no de frecuencia.",
        "e": "visible: describe otra cualidad distinta."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 88,
      "rangeStart": 77,
      "rangeEnd": 92
    },
    {
      "id": "reactivo-89",
      "number": 89,
      "areaId": "habilidad-verbal",
      "areaName": "Habilidad verbal",
      "block": "Antónimos",
      "prompt": "Selecciona la opción que exprese la idea opuesta al significado de AUSTERIDAD.",
      "options": [
        {
          "label": "a",
          "text": "moderación",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "prudencia",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "sencillez",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "ahorro",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "derroche",
          "kind": "text"
        }
      ],
      "correctOption": "e",
      "correctOptionText": "derroche",
      "hint": "Austeridad implica mesura en el gasto.",
      "correctArgument": "La austeridad se relaciona con sobriedad y control en el uso de recursos. La idea opuesta es el derroche, que implica gasto excesivo y sin medida.",
      "incorrectArgumentsByOption": {
        "a": "moderación: se relaciona con la misma idea de contención.",
        "b": "prudencia: no es opuesta, sino compatible con austeridad.",
        "c": "sencillez: también es cercana en sentido.",
        "d": "ahorro: es una noción asociada a la austeridad, no su contraria."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 89,
      "rangeStart": 77,
      "rangeEnd": 92
    },
    {
      "id": "reactivo-90",
      "number": 90,
      "areaId": "habilidad-verbal",
      "areaName": "Habilidad verbal",
      "block": "Sinónimos",
      "prompt": "Elige la opción que contenga un par de sinónimos.",
      "options": [
        {
          "label": "a",
          "text": "cauteloso – precavido",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "duda – certeza",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "ruido – silencio",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "ligero – pesado",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "inicio – final",
          "kind": "text"
        }
      ],
      "correctOption": "a",
      "correctOptionText": "cauteloso – precavido",
      "hint": "Busca dos palabras con significado semejante, no contrario.",
      "correctArgument": "«Cauteloso» y «precavido» comparten la idea de actuar con cuidado y prevención, por eso funcionan como sinónimos.",
      "incorrectArgumentsByOption": {
        "b": "duda – certeza: expresan ideas opuestas.",
        "c": "ruido – silencio: son contrarios.",
        "d": "ligero – pesado: también son antónimos.",
        "e": "inicio – final: representan extremos opuestos."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 90,
      "rangeStart": 77,
      "rangeEnd": 92
    },
    {
      "id": "reactivo-91",
      "number": 91,
      "areaId": "habilidad-verbal",
      "areaName": "Habilidad verbal",
      "block": "Sinónimos en contexto",
      "prompt": "Selecciona la opción que sustituya con un sinónimo la palabra en mayúsculas.\n\nEl mensaje del director fue AMBIGUO y dejó dudas entre los asistentes.",
      "options": [
        {
          "label": "a",
          "text": "confuso",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "brillante",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "directo",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "agradable",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "extenso",
          "kind": "text"
        }
      ],
      "correctOption": "a",
      "correctOptionText": "confuso",
      "hint": "El contexto señala que el mensaje no fue claro.",
      "correctArgument": "«Ambiguo» significa que puede entenderse de varias maneras o que no es claro. En este contexto, «confuso» es el sinónimo más adecuado.",
      "incorrectArgumentsByOption": {
        "b": "brillante: alude a calidad positiva, no a falta de claridad.",
        "c": "directo: expresa casi la idea contraria.",
        "d": "agradable: habla de impresión emocional, no de precisión del mensaje.",
        "e": "extenso: se refiere a longitud, no a ambigüedad."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 91,
      "rangeStart": 77,
      "rangeEnd": 92
    },
    {
      "id": "reactivo-92",
      "number": 92,
      "areaId": "habilidad-verbal",
      "areaName": "Habilidad verbal",
      "block": "Sinónimos en contexto",
      "prompt": "Selecciona la opción que sustituya con un sinónimo la palabra en mayúsculas.\n\nLa noticia causó ASOMBRO entre los asistentes.",
      "options": [
        {
          "label": "a",
          "text": "enojo",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "sorpresa",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "cansancio",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "indiferencia",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "duda",
          "kind": "text"
        }
      ],
      "correctOption": "b",
      "correctOptionText": "sorpresa",
      "hint": "Busca la palabra que exprese una reacción de admiración o impresión inesperada.",
      "correctArgument": "«Asombro» se relaciona con una reacción de sorpresa, admiración o impresión intensa ante algo inesperado.",
      "incorrectArgumentsByOption": {
        "a": "enojo: expresa molestia, no asombro.",
        "c": "cansancio: alude a fatiga, no a impresión.",
        "d": "indiferencia: es casi lo contrario de sorprenderse.",
        "e": "duda: expresa incertidumbre, no admiración o impresión."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 92,
      "rangeStart": 77,
      "rangeEnd": 92
    },
    {
      "id": "reactivo-93",
      "number": 93,
      "areaId": "geografia",
      "areaName": "Geografía",
      "block": "Espacio geográfico, componentes",
      "prompt": "Los componentes del espacio geográfico que se relacionan con la producción, distribución, transporte, comercialización y consumo de bienes y servicios son los componentes",
      "options": [
        {
          "label": "a",
          "text": "físicos",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "culturales",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "económicos",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "políticos",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "naturales",
          "kind": "text"
        }
      ],
      "correctOption": "c",
      "correctOptionText": "económicos",
      "hint": "Piensa en las actividades humanas vinculadas con trabajo, intercambio y mercado.",
      "correctArgument": "Los componentes económicos del espacio geográfico incluyen las actividades relacionadas con producir, transportar, vender y consumir bienes y servicios.",
      "incorrectArgumentsByOption": {
        "a": "físicos: se refieren al relieve, clima, agua, suelo y otros elementos naturales.",
        "b": "culturales: se asocian con costumbres, tradiciones y formas de vida.",
        "d": "políticos: se relacionan con fronteras, gobierno y organización del territorio.",
        "e": "naturales: abarcan elementos del medio físico, no las actividades de producción y comercio."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 93,
      "rangeStart": 93,
      "rangeEnd": 104
    },
    {
      "id": "reactivo-94",
      "number": 94,
      "areaId": "geografia",
      "areaName": "Geografía",
      "block": "Coordenadas geográficas",
      "prompt": "Un punto del planeta se localiza a 20° al norte del ecuador y a 40° al oeste del meridiano de Greenwich. ¿Cuál es su coordenada correcta?",
      "options": [
        {
          "label": "a",
          "text": "20° N, 40° O",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "20° S, 40° O",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "40° N, 20° O",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "20° N, 40° E",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "40° S, 20° E",
          "kind": "text"
        }
      ],
      "correctOption": "a",
      "correctOptionText": "20° N, 40° O",
      "hint": "La latitud se mide al norte o al sur del ecuador; la longitud al este o al oeste del meridiano de Greenwich.",
      "correctArgument": "El punto está al norte del ecuador, por eso su latitud es 20° N. Además, está al oeste del meridiano de Greenwich, así que su longitud es 40° O.",
      "incorrectArgumentsByOption": {
        "b": "20° S, 40° O: cambia la latitud de norte a sur.",
        "c": "40° N, 20° O: invierte los valores de latitud y longitud.",
        "d": "20° N, 40° E: cambia la longitud de oeste a este.",
        "e": "40° S, 20° E: altera tanto dirección como medida de las coordenadas."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 94,
      "rangeStart": 93,
      "rangeEnd": 104
    },
    {
      "id": "reactivo-95",
      "number": 95,
      "areaId": "geografia",
      "areaName": "Geografía",
      "block": "Sismos y placas tectónicas",
      "prompt": "Las zonas de mayor sismicidad en el planeta se relacionan principalmente con",
      "options": [
        {
          "label": "a",
          "text": "grandes llanuras interiores",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "límites convergentes de placas",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "zonas de baja presión atmosférica",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "cuencas alejadas de los océanos",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "regiones con poca lluvia anual",
          "kind": "text"
        }
      ],
      "correctOption": "b",
      "correctOptionText": "límites convergentes de placas",
      "hint": "Busca la opción vinculada con el choque o contacto entre placas tectónicas.",
      "correctArgument": "En los límites convergentes de placas ocurre choque, subducción y liberación de energía, por eso ahí se concentran muchas zonas sísmicas.",
      "incorrectArgumentsByOption": {
        "a": "grandes llanuras interiores: no son, por sí mismas, áreas de fuerte actividad sísmica.",
        "c": "zonas de baja presión atmosférica: la presión del aire no explica la sismicidad tectónica.",
        "d": "cuencas alejadas de los océanos: no representan el principal patrón sísmico mundial.",
        "e": "regiones con poca lluvia anual: la precipitación no determina directamente los terremotos."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 95,
      "rangeStart": 93,
      "rangeEnd": 104
    },
    {
      "id": "reactivo-96",
      "number": 96,
      "areaId": "geografia",
      "areaName": "Geografía",
      "block": "Agua, ciclo hidrológico",
      "prompt": "La parte del ciclo del agua relacionada de manera directa con el paso del agua hacia el subsuelo es la",
      "options": [
        {
          "label": "a",
          "text": "evaporación",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "condensación",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "infiltración",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "transpiración",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "precipitación",
          "kind": "text"
        }
      ],
      "correctOption": "c",
      "correctOptionText": "infiltración",
      "hint": "Se trata del proceso mediante el cual el agua penetra en el suelo.",
      "correctArgument": "La infiltración es el proceso por el cual el agua entra al suelo y puede alimentar mantos acuíferos o aguas subterráneas.",
      "incorrectArgumentsByOption": {
        "a": "evaporación: lleva el agua hacia la atmósfera.",
        "b": "condensación: forma gotas a partir del vapor.",
        "d": "transpiración: ocurre en las plantas al liberar vapor de agua.",
        "e": "precipitación: corresponde a la caída del agua desde la atmósfera, no a su entrada al subsuelo."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 96,
      "rangeStart": 93,
      "rangeEnd": 104
    },
    {
      "id": "reactivo-97",
      "number": 97,
      "areaId": "geografia",
      "areaName": "Geografía",
      "block": "Combustibles alternativos",
      "prompt": "Una forma de reducir parte del uso de combustibles derivados del petróleo es producir biocombustibles a partir de",
      "options": [
        {
          "label": "a",
          "text": "minerales metálicos",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "rocas calizas",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "aceites vegetales",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "aguas termales",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "arena sílica",
          "kind": "text"
        }
      ],
      "correctOption": "c",
      "correctOptionText": "aceites vegetales",
      "hint": "Piensa en materias primas de origen biológico y renovable.",
      "correctArgument": "Los aceites vegetales pueden utilizarse como materia prima para elaborar biocombustibles, lo que representa una alternativa parcial frente a combustibles fósiles.",
      "incorrectArgumentsByOption": {
        "a": "minerales metálicos: no se emplean para producir biocombustibles.",
        "b": "rocas calizas: se usan en otros procesos industriales, no para ese fin.",
        "d": "aguas termales: son fuente de energía geotérmica, no base para biocombustibles.",
        "e": "arena sílica: no sirve como materia prima biológica para ese tipo de combustible."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 97,
      "rangeStart": 93,
      "rangeEnd": 104
    },
    {
      "id": "reactivo-98",
      "number": 98,
      "areaId": "geografia",
      "areaName": "Geografía",
      "block": "Riesgos regionales en México",
      "prompt": "El principal factor de riesgo natural para la población que vive en la península de Yucatán es",
      "options": [
        {
          "label": "a",
          "text": "huracanes",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "erupciones volcánicas",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "nevadas intensas",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "tornados polares",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "avalanchas",
          "kind": "text"
        }
      ],
      "correctOption": "a",
      "correctOptionText": "huracanes",
      "hint": "Es un fenómeno atmosférico tropical que afecta con frecuencia las costas del Caribe y del golfo.",
      "correctArgument": "La península de Yucatán se encuentra en una zona expuesta al paso de huracanes, que pueden provocar inundaciones, vientos intensos y daños materiales.",
      "incorrectArgumentsByOption": {
        "b": "erupciones volcánicas: no representan el riesgo principal de esa región.",
        "c": "nevadas intensas: no son características del clima de la península.",
        "d": "tornados polares: no corresponden al tipo de fenómeno dominante en esa zona.",
        "e": "avalanchas: requieren condiciones de relieve y nieve que no son propias de Yucatán."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 98,
      "rangeStart": 93,
      "rangeEnd": 104
    },
    {
      "id": "reactivo-99",
      "number": 99,
      "areaId": "geografia",
      "areaName": "Geografía",
      "block": "Hidrocarburos en México",
      "prompt": "Dos ciudades de México que destacan por su relación con la extracción y actividad petrolera son",
      "options": [
        {
          "label": "a",
          "text": "Puebla y Toluca",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "Coatzacoalcos y Poza Rica",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "Morelia y Pachuca",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "Oaxaca y Cuernavaca",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "Querétaro y León",
          "kind": "text"
        }
      ],
      "correctOption": "b",
      "correctOptionText": "Coatzacoalcos y Poza Rica",
      "hint": "Busca ciudades asociadas históricamente con la actividad de hidrocarburos en la zona del golfo.",
      "correctArgument": "Coatzacoalcos y Poza Rica son ciudades vinculadas con la industria petrolera y de hidrocarburos en México, especialmente en la región del golfo.",
      "incorrectArgumentsByOption": {
        "a": "Puebla y Toluca: son ciudades importantes, pero no destacan por extracción petrolera.",
        "c": "Morelia y Pachuca: no forman el par más asociado con hidrocarburos.",
        "d": "Oaxaca y Cuernavaca: no son referencia principal de extracción petrolera.",
        "e": "Querétaro y León: se relacionan más con otras actividades económicas e industriales."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 99,
      "rangeStart": 93,
      "rangeEnd": 104
    },
    {
      "id": "reactivo-100",
      "number": 100,
      "areaId": "geografia",
      "areaName": "Geografía",
      "block": "Transporte marítimo",
      "prompt": "El transporte que se aprovecha para mover grandes cantidades de petróleo entre puertos de distintos países es el transporte",
      "options": [
        {
          "label": "a",
          "text": "lacustre",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "ferroviario",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "marítimo",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "aéreo",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "peatonal",
          "kind": "text"
        }
      ],
      "correctOption": "c",
      "correctOptionText": "marítimo",
      "hint": "Se realiza por mar y conecta puertos nacionales e internacionales.",
      "correctArgument": "El transporte marítimo permite mover grandes volúmenes de petróleo y otros productos a largas distancias entre puertos.",
      "incorrectArgumentsByOption": {
        "a": "lacustre: se desarrolla en lagos, no en rutas oceánicas internacionales.",
        "b": "ferroviario: se usa en tierra, no entre puertos de distintos países por mar.",
        "d": "aéreo: no es el medio apropiado para trasladar grandes cantidades de petróleo.",
        "e": "peatonal: no tiene relación con transporte de carga de ese tipo."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 100,
      "rangeStart": 93,
      "rangeEnd": 104
    },
    {
      "id": "reactivo-101",
      "number": 101,
      "areaId": "geografia",
      "areaName": "Geografía",
      "block": "Organismos internacionales",
      "prompt": "La institución internacional que busca favorecer la estabilidad financiera mundial y apoyar el comercio y el empleo es el",
      "options": [
        {
          "label": "a",
          "text": "Fondo Monetario Internacional",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "Comité Olímpico Internacional",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "Tratado de Libre Comercio",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "Instituto Panamericano de Geografía",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "Banco Central Europeo",
          "kind": "text"
        }
      ],
      "correctOption": "a",
      "correctOptionText": "Fondo Monetario Internacional",
      "hint": "Busca un organismo internacional de alcance mundial, no regional ni deportivo.",
      "correctArgument": "El Fondo Monetario Internacional es un organismo que promueve la estabilidad financiera, la cooperación monetaria y el funcionamiento de la economía mundial.",
      "incorrectArgumentsByOption": {
        "b": "Comité Olímpico Internacional: organiza actividades deportivas, no estabilidad financiera.",
        "c": "Tratado de Libre Comercio: es un acuerdo comercial, no una institución global de esa naturaleza.",
        "d": "Instituto Panamericano de Geografía: no cumple esa función financiera internacional.",
        "e": "Banco Central Europeo: tiene alcance regional y no desempeña el papel global descrito."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 101,
      "rangeStart": 93,
      "rangeEnd": 104
    },
    {
      "id": "reactivo-102",
      "number": 102,
      "areaId": "geografia",
      "areaName": "Geografía",
      "block": "Cambios geopolíticos",
      "prompt": "El país africano que se independizó en julio de 2011 después de un conflicto interno, modificando el mapa político del continente, fue",
      "options": [
        {
          "label": "a",
          "text": "Eritrea",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "Sudán del Sur",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "Namibia",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "Kosovo",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "Somalia",
          "kind": "text"
        }
      ],
      "correctOption": "b",
      "correctOptionText": "Sudán del Sur",
      "hint": "Surgió a partir de la separación de una parte del territorio sudanés.",
      "correctArgument": "Sudán del Sur se convirtió en país independiente en 2011, tras un largo conflicto, y eso representó un cambio importante en las fronteras políticas de África.",
      "incorrectArgumentsByOption": {
        "a": "Eritrea: se independizó en otra etapa histórica.",
        "c": "Namibia: obtuvo independencia antes de 2011.",
        "d": "Kosovo: no pertenece a África.",
        "e": "Somalia: ya existía como Estado y no corresponde al caso descrito."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 102,
      "rangeStart": 93,
      "rangeEnd": 104
    },
    {
      "id": "reactivo-103",
      "number": 103,
      "areaId": "geografia",
      "areaName": "Geografía",
      "block": "Patrimonio cultural en México",
      "prompt": "Relaciona los sitios considerados patrimonio cultural con la entidad donde se localizan.\n\nEntidad:\nI. Querétaro\nII. Veracruz\nIII. Oaxaca\nIV. Chihuahua\n\nPatrimonio:\na. Zona arqueológica de Paquimé\nb. Misiones Franciscanas de la Sierra Gorda\nc. Monumentos históricos de Tlacotalpan\nd. Zona arqueológica de Monte Albán",
      "options": [
        {
          "label": "a",
          "text": "I: b, II: c, III: d, IV: a",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "I: d, II: a, III: c, IV: b",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "I: c, II: b, III: a, IV: d",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "I: a, II: d, III: b, IV: c",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "I: b, II: d, III: a, IV: c",
          "kind": "text"
        }
      ],
      "correctOption": "a",
      "correctOptionText": "I: b, II: c, III: d, IV: a",
      "hint": "Querétaro se relaciona con la Sierra Gorda, Oaxaca con Monte Albán y Chihuahua con Paquimé.",
      "correctArgument": "Las Misiones Franciscanas de la Sierra Gorda corresponden a Querétaro, Tlacotalpan a Veracruz, Monte Albán a Oaxaca y Paquimé a Chihuahua.",
      "incorrectArgumentsByOption": {
        "b": "I: d, II: a, III: c, IV: b: ubica mal varios sitios, como Monte Albán y Paquimé.",
        "c": "I: c, II: b, III: a, IV: d: intercambia entidades y patrimonios de manera incorrecta.",
        "d": "I: a, II: d, III: b, IV: c: casi todos los emparejamientos están mal asignados.",
        "e": "I: b, II: d, III: a, IV: c: solo conserva bien Querétaro, pero altera las otras relaciones."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 103,
      "rangeStart": 93,
      "rangeEnd": 104
    },
    {
      "id": "reactivo-104",
      "number": 104,
      "areaId": "geografia",
      "areaName": "Geografía",
      "block": "Mar territorial",
      "prompt": "La franja del mar adyacente a las costas de un país, con anchura de 12 millas náuticas y sobre la cual el Estado ejerce plena soberanía, se llama",
      "options": [
        {
          "label": "a",
          "text": "mar patrimonial",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "mar territorial",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "plataforma continental",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "zona económica especial",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "región insular",
          "kind": "text"
        }
      ],
      "correctOption": "b",
      "correctOptionText": "mar territorial",
      "hint": "Se trata de la zona marítima inmediata a la costa donde el Estado tiene soberanía directa.",
      "correctArgument": "El mar territorial es la franja adyacente a las costas de un Estado, con extensión de 12 millas náuticas, donde ejerce soberanía plena.",
      "incorrectArgumentsByOption": {
        "a": "mar patrimonial: no corresponde exactamente a la franja soberana de 12 millas.",
        "c": "plataforma continental: se refiere al relieve submarino y a derechos sobre el subsuelo, no a esa franja específica.",
        "d": "zona económica especial: no es la denominación correcta en este caso.",
        "e": "región insular: alude a territorios de islas, no a la franja marítima soberana."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 104,
      "rangeStart": 93,
      "rangeEnd": 104
    },
    {
      "id": "reactivo-105",
      "number": 105,
      "areaId": "fisica",
      "areaName": "Física",
      "block": "Rapidez y velocidad",
      "prompt": "¿Cuál es la diferencia entre rapidez y velocidad?",
      "options": [
        {
          "label": "a",
          "text": "La rapidez es una magnitud escalar y la velocidad es una magnitud vectorial.",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "La rapidez siempre es negativa y la velocidad siempre es positiva.",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "La rapidez mide aceleración y la velocidad mide fuerza.",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "La rapidez solo se usa en caída libre y la velocidad en movimiento circular.",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "La rapidez depende de la masa y la velocidad del volumen.",
          "kind": "text"
        }
      ],
      "correctOption": "a",
      "correctOptionText": "La rapidez es una magnitud escalar y la velocidad es una magnitud vectorial.",
      "hint": "Una de ellas solo indica cuánto avanza por unidad de tiempo y la otra también considera dirección.",
      "correctArgument": "La rapidez solo indica cuánto se recorre en cierto tiempo. La velocidad, además de ese valor, incluye dirección y sentido del movimiento. Por eso rapidez es escalar y velocidad es vectorial.",
      "incorrectArgumentsByOption": {
        "b": "La rapidez siempre es negativa y la velocidad siempre es positiva: es falso, porque la rapidez no se maneja con signo y la velocidad puede representarse con dirección.",
        "c": "La rapidez mide aceleración y la velocidad mide fuerza: mezcla magnitudes distintas.",
        "d": "La rapidez solo se usa en caída libre y la velocidad en movimiento circular: ambas se usan en muchos tipos de movimiento.",
        "e": "La rapidez depende de la masa y la velocidad del volumen: no existe esa relación como definición física."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 105,
      "rangeStart": 105,
      "rangeEnd": 116
    },
    {
      "id": "reactivo-106",
      "number": 106,
      "areaId": "fisica",
      "areaName": "Física",
      "block": "Tablas y gráficas, lectura de movimiento",
      "prompt": "La siguiente tabla muestra la distancia recorrida por un móvil.\n\nCon base en los datos, se puede afirmar que el móvil",
      "options": [
        {
          "label": "a",
          "text": "permaneció en reposo durante todo el recorrido.",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "llevó una rapidez constante de 5 m/s.",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "aumentó su rapidez en cada intervalo.",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "regresó al punto de partida al final.",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "se movió con rapidez constante de 10 m/s.",
          "kind": "text"
        }
      ],
      "correctOption": "b",
      "correctOptionText": "llevó una rapidez constante de 5 m/s.",
      "hint": "Compara cuánto avanza en cada intervalo de tiempo y divide distancia entre tiempo.",
      "correctArgument": "Entre 0 y 2 s recorre 10 m, entre 2 y 4 s recorre otros 10 m y entre 4 y 6 s vuelve a recorrer 10 m. Eso muestra un cambio uniforme. La rapidez es:\n10 ÷ 2 = 5 m/s\nPor eso el movimiento es uniforme con rapidez constante de 5 m/s.",
      "incorrectArgumentsByOption": {
        "a": "permaneció en reposo durante todo el recorrido: es falso porque la distancia sí cambia.",
        "c": "aumentó su rapidez en cada intervalo: no, porque avanza lo mismo en tiempos iguales.",
        "d": "regresó al punto de partida al final: la distancia aumenta, no disminuye.",
        "e": "se movió con rapidez constante de 10 m/s: dividir 10 m entre 2 s da 5 m/s, no 10 m/s."
      },
      "visual": {
        "kind": "preformatted",
        "content": "Tiempo (s):      0   2   4   6\nDistancia (m):   0  10  20  30"
      },
      "sourceOrder": 106,
      "rangeStart": 105,
      "rangeEnd": 116
    },
    {
      "id": "reactivo-107",
      "number": 107,
      "areaId": "fisica",
      "areaName": "Física",
      "block": "Tablas y gráficas, interpretación del movimiento",
      "prompt": "La siguiente tabla muestra la velocidad de un automóvil a lo largo de cuatro horas.\n\n¿Cuál opción describe mejor el recorrido?",
      "options": [
        {
          "label": "a",
          "text": "El automóvil inició en reposo, alcanzó 60 km/h en la primera hora, mantuvo esa velocidad una hora más, luego disminuyó y al final se detuvo.",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "El automóvil inició a 60 km/h, se detuvo en la segunda hora y después aceleró hasta 90 km/h.",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "El automóvil permaneció detenido dos horas y después alcanzó 60 km/h.",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "El automóvil llevó velocidad constante de 30 km/h durante las cuatro horas.",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "El automóvil avanzó y regresó de inmediato al punto de origen en la segunda hora.",
          "kind": "text"
        }
      ],
      "correctOption": "a",
      "correctOptionText": "El automóvil inició en reposo, alcanzó 60 km/h en la primera hora, mantuvo esa velocidad una hora más, luego disminuyó y al final se detuvo.",
      "hint": "Lee la tabla de izquierda a derecha y observa cómo cambia la velocidad con el tiempo.",
      "correctArgument": "La tabla marca que el automóvil parte de 0 km/h, luego llega a 60 km/h, mantiene 60 km/h una hora adicional, después baja a 30 km/h y finalmente termina en 0 km/h. Esa descripción coincide exactamente con la opción a).",
      "incorrectArgumentsByOption": {
        "b": "El automóvil inició a 60 km/h, se detuvo en la segunda hora y después aceleró hasta 90 km/h: no coincide con los datos iniciales ni finales.",
        "c": "El automóvil permaneció detenido dos horas y después alcanzó 60 km/h: la tabla muestra movimiento desde la primera hora.",
        "d": "El automóvil llevó velocidad constante de 30 km/h durante las cuatro horas: los valores cambian varias veces.",
        "e": "El automóvil avanzó y regresó de inmediato al punto de origen en la segunda hora: la tabla habla de velocidad, no de regreso inmediato."
      },
      "visual": {
        "kind": "preformatted",
        "content": "Tiempo (h):          0   1   2   3   4\nVelocidad (km/h):    0  60  60  30   0"
      },
      "sourceOrder": 107,
      "rangeStart": 105,
      "rangeEnd": 116
    },
    {
      "id": "reactivo-108",
      "number": 108,
      "areaId": "fisica",
      "areaName": "Física",
      "block": "Fuerza y aceleración, uso de F = ma",
      "prompt": "Si sobre un cuerpo de masa 3 kg se aplica una fuerza de 18 N, su aceleración será de",
      "options": [
        {
          "label": "a",
          "text": "3 m/s²",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "6 m/s²",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "9 m/s²",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "12 m/s²",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "15 m/s²",
          "kind": "text"
        }
      ],
      "correctOption": "b",
      "correctOptionText": "6 m/s²",
      "hint": "Usa la relación entre fuerza, masa y aceleración:\nF = ma",
      "correctArgument": "De la fórmula:\nF = ma\nDespejando:\na = F ÷ m\nSustituyendo:\na = 18 ÷ 3 = 6\nPor eso la aceleración del cuerpo es 6 m/s².",
      "incorrectArgumentsByOption": {
        "a": "3 m/s²: sale de dividir mal o de usar solo parte de los datos.",
        "c": "9 m/s²: no corresponde a la razón entre 18 y 3.",
        "d": "12 m/s²: es un valor mayor al correcto sin sustento en la operación.",
        "e": "15 m/s²: también resulta de operar incorrectamente los datos del problema."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 108,
      "rangeStart": 105,
      "rangeEnd": 116
    },
    {
      "id": "reactivo-109",
      "number": 109,
      "areaId": "fisica",
      "areaName": "Física",
      "block": "Equilibrio",
      "prompt": "La resultante de las fuerzas que actúan sobre un objeto que permanece en equilibrio es",
      "options": [
        {
          "label": "a",
          "text": "menor que cero.",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "igual a cero.",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "igual a la masa del objeto.",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "mayor que la aceleración.",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "siempre de 9.8 N.",
          "kind": "text"
        }
      ],
      "correctOption": "b",
      "correctOptionText": "igual a cero.",
      "hint": "Si el objeto no cambia su estado de movimiento, no hay fuerza neta que lo acelere.",
      "correctArgument": "Cuando un objeto está en equilibrio, las fuerzas que actúan sobre él se compensan. Eso significa que la suma vectorial de todas ellas es cero.",
      "incorrectArgumentsByOption": {
        "a": "menor que cero: la resultante no se clasifica así en este contexto.",
        "c": "igual a la masa del objeto: masa y fuerza resultante son magnitudes distintas.",
        "d": "mayor que la aceleración: no expresa una condición física correcta de equilibrio.",
        "e": "siempre de 9.8 N: ese valor no corresponde a la resultante general de todo objeto en equilibrio."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 109,
      "rangeStart": 105,
      "rangeEnd": 116
    },
    {
      "id": "reactivo-110",
      "number": 110,
      "areaId": "fisica",
      "areaName": "Física",
      "block": "Electricidad estática",
      "prompt": "Cuando una persona camina sobre una alfombra usando ropa sintética y después siente una descarga al tocar una puerta metálica, adquirió carga eléctrica principalmente por",
      "options": [
        {
          "label": "a",
          "text": "conducción.",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "refracción.",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "frotamiento.",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "inducción.",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "gravitación.",
          "kind": "text"
        }
      ],
      "correctOption": "c",
      "correctOptionText": "frotamiento.",
      "hint": "La carga apareció por el roce entre superficies.",
      "correctArgument": "El roce entre la suela, la alfombra y ciertos materiales favorece transferencia de electrones. Ese proceso corresponde a electrización por frotamiento.",
      "incorrectArgumentsByOption": {
        "a": "conducción: ocurre cuando la carga pasa por contacto directo entre materiales conductores, no como origen principal del caso.",
        "b": "refracción: es un fenómeno óptico.",
        "d": "inducción: puede redistribuir carga, pero no es la causa principal planteada.",
        "e": "gravitación: se relaciona con masa y atracción gravitatoria, no con electricidad estática."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 110,
      "rangeStart": 105,
      "rangeEnd": 116
    },
    {
      "id": "reactivo-111",
      "number": 111,
      "areaId": "fisica",
      "areaName": "Física",
      "block": "Magnetismo, brújula y campo terrestre",
      "prompt": "La aguja de una brújula apunta aproximadamente hacia el norte porque",
      "options": [
        {
          "label": "a",
          "text": "el Sol atrae la aguja con mayor intensidad desde esa dirección.",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "la aguja se alinea con el campo magnético terrestre.",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "el hierro del suelo empuja la aguja hacia arriba.",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "el aire mueve la aguja de forma permanente.",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "la gravedad la obliga a girar hacia el norte.",
          "kind": "text"
        }
      ],
      "correctOption": "b",
      "correctOptionText": "la aguja se alinea con el campo magnético terrestre.",
      "hint": "La brújula funciona como un pequeño imán que responde al magnetismo de la Tierra.",
      "correctArgument": "La Tierra se comporta como un gran imán. La aguja imantada de la brújula se orienta siguiendo las líneas del campo magnético terrestre.",
      "incorrectArgumentsByOption": {
        "a": "el Sol atrae la aguja con mayor intensidad desde esa dirección: no explica el funcionamiento de la brújula.",
        "c": "el hierro del suelo empuja la aguja hacia arriba: no es la causa general del fenómeno.",
        "d": "el aire mueve la aguja de forma permanente: el aire no determina su orientación magnética.",
        "e": "la gravedad la obliga a girar hacia el norte: la gravedad actúa verticalmente, no orienta la aguja al norte."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 111,
      "rangeStart": 105,
      "rangeEnd": 116
    },
    {
      "id": "reactivo-112",
      "number": 112,
      "areaId": "fisica",
      "areaName": "Física",
      "block": "Gases, teoría cinética",
      "prompt": "La teoría que explica que las partículas de un gas están muy separadas, se mueven continuamente y chocan entre sí y con las paredes del recipiente es la",
      "options": [
        {
          "label": "a",
          "text": "teoría cinética de los gases.",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "ley de Ohm.",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "ley de gravitación universal.",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "teoría heliocéntrica.",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "ley de reflexión.",
          "kind": "text"
        }
      ],
      "correctOption": "a",
      "correctOptionText": "teoría cinética de los gases.",
      "hint": "Busca la teoría que describe el comportamiento microscópico de las partículas de un gas.",
      "correctArgument": "La teoría cinética de los gases propone que sus partículas están en movimiento constante, con choques entre ellas y contra el recipiente, y que de ahí se explican varias propiedades del gas.",
      "incorrectArgumentsByOption": {
        "b": "ley de Ohm: trata de corriente, voltaje y resistencia.",
        "c": "ley de gravitación universal: explica atracción entre masas.",
        "d": "teoría heliocéntrica: describe la posición del Sol respecto al sistema planetario.",
        "e": "ley de reflexión: corresponde a fenómenos de luz."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 112,
      "rangeStart": 105,
      "rangeEnd": 116
    },
    {
      "id": "reactivo-113",
      "number": 113,
      "areaId": "fisica",
      "areaName": "Física",
      "block": "Calor y temperatura",
      "prompt": "¿Cuál opción define correctamente la diferencia entre calor y temperatura?",
      "options": [
        {
          "label": "a",
          "text": "La temperatura es una forma de energía que pasa de un cuerpo a otro, mientras que el calor solo indica cuán caliente está un objeto.",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "La temperatura es lo que mide un termómetro, mientras que el calor es energía que se transfiere de un cuerpo más caliente a otro más frío.",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "El calor es lo que mide un termómetro, mientras que la temperatura es el color de un cuerpo caliente.",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "El calor y la temperatura significan exactamente lo mismo en física.",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "La temperatura solo existe en sólidos y el calor solo en líquidos.",
          "kind": "text"
        }
      ],
      "correctOption": "b",
      "correctOptionText": "La temperatura es lo que mide un termómetro, mientras que el calor es energía que se transfiere de un cuerpo más caliente a otro más frío.",
      "hint": "Una se mide con termómetro; la otra se entiende como energía en tránsito.",
      "correctArgument": "La temperatura indica qué tan caliente o frío está un cuerpo y puede medirse con termómetro. El calor es energía que se transfiere debido a una diferencia de temperatura.",
      "incorrectArgumentsByOption": {
        "a": "La temperatura es una forma de energía que pasa de un cuerpo a otro, mientras que el calor solo indica cuán caliente está un objeto: invierte los conceptos.",
        "c": "El calor es lo que mide un termómetro, mientras que la temperatura es el color de un cuerpo caliente: mezcla física con una característica visual.",
        "d": "El calor y la temperatura significan exactamente lo mismo en física: son conceptos relacionados, pero distintos.",
        "e": "La temperatura solo existe en sólidos y el calor solo en líquidos: ambos conceptos pueden aplicarse en distintos estados de la materia."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 113,
      "rangeStart": 105,
      "rangeEnd": 116
    },
    {
      "id": "reactivo-114",
      "number": 114,
      "areaId": "fisica",
      "areaName": "Física",
      "block": "Corriente y magnetismo",
      "prompt": "¿En cuáles de los siguientes casos se puede generar un campo magnético?\n\nI. Al pasar corriente eléctrica a través de un conductor.\nII. Al enrollar un alambre sobre un clavo y hacer pasar corriente.\nIII. Al impedir por completo el paso de corriente en un conductor.\nIV. Con una carga puntual en reposo.",
      "options": [
        {
          "label": "a",
          "text": "I y II",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "I y III",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "II y IV",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "III y IV",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "I, III y IV",
          "kind": "text"
        }
      ],
      "correctOption": "a",
      "correctOptionText": "I y II",
      "hint": "Relaciona el magnetismo con el movimiento de cargas eléctricas.",
      "correctArgument": "Una corriente eléctrica en un conductor genera campo magnético. Además, si el alambre se enrolla sobre un clavo y pasa corriente, se forma un electroimán. Por eso I y II son correctas.",
      "incorrectArgumentsByOption": {
        "b": "I y III: el caso III no genera campo magnético porque no hay corriente.",
        "c": "II y IV: una carga en reposo no produce campo magnético como en el caso planteado.",
        "d": "III y IV: en ninguno de esos casos hay corriente eléctrica en movimiento.",
        "e": "I, III y IV: incluye dos situaciones que no producen el efecto solicitado."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 114,
      "rangeStart": 105,
      "rangeEnd": 116
    },
    {
      "id": "reactivo-115",
      "number": 115,
      "areaId": "fisica",
      "areaName": "Física",
      "block": "Ondas",
      "prompt": "El movimiento ondulatorio es un proceso mediante el cual se transmite",
      "options": [
        {
          "label": "a",
          "text": "energía.",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "materia.",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "masa.",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "volumen.",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "peso.",
          "kind": "text"
        }
      ],
      "correctOption": "a",
      "correctOptionText": "energía.",
      "hint": "Una onda puede propagarse sin trasladar de un lugar a otro toda la materia del medio.",
      "correctArgument": "Las ondas transportan energía de un punto a otro. Aunque las partículas del medio pueden vibrar, no se trasladan en conjunto con la onda.",
      "incorrectArgumentsByOption": {
        "b": "materia: la onda no lleva toda la materia del medio con ella.",
        "c": "masa: no es lo que se transmite como fenómeno principal.",
        "d": "volumen: no es una magnitud que la onda transporte.",
        "e": "peso: no describe lo que se propaga en el movimiento ondulatorio."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 115,
      "rangeStart": 105,
      "rangeEnd": 116
    },
    {
      "id": "reactivo-116",
      "number": 116,
      "areaId": "fisica",
      "areaName": "Física",
      "block": "Luz visible, longitud de onda y color",
      "prompt": "¿Qué color de la luz visible tiene mayor longitud de onda?",
      "options": [
        {
          "label": "a",
          "text": "azul.",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "violeta.",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "verde.",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "amarillo.",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "rojo.",
          "kind": "text"
        }
      ],
      "correctOption": "e",
      "correctOptionText": "rojo.",
      "hint": "Dentro del espectro visible, piensa en el extremo opuesto al violeta.",
      "correctArgument": "En el espectro visible, la luz roja tiene mayor longitud de onda que colores como azul o violeta. Por eso el rojo es la respuesta correcta.",
      "incorrectArgumentsByOption": {
        "a": "azul: tiene menor longitud de onda que el rojo.",
        "b": "violeta: es de las menores longitudes de onda visibles.",
        "c": "verde: queda en una zona intermedia del espectro.",
        "d": "amarillo: aunque es mayor que azul y violeta, sigue siendo menor que rojo."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 116,
      "rangeStart": 105,
      "rangeEnd": 116
    },
    {
      "id": "reactivo-117",
      "number": 117,
      "areaId": "formacion-civica-y-etica",
      "areaName": "Formación cívica y ética",
      "block": "Identidad personal, decisiones y relación con el entorno",
      "prompt": "¿Cuál de los siguientes casos ejemplifica mejor la influencia del entorno social y natural en la identidad personal?",
      "options": [
        {
          "label": "a",
          "text": "Raúl compra siempre la misma marca de tenis porque la vio anunciada en internet.",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "Elena prefiere dormir temprano porque al día siguiente tiene examen de matemáticas.",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "Sofía aprendió en su familia a dialogar, respetar turnos y cuidar el agua de su comunidad, por eso actúa con responsabilidad y respeto hacia los demás.",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "Marco juega videojuegos todas las noches porque le parecen entretenidos.",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "Diana come fruta en el recreo porque no alcanzó a desayunar en casa.",
          "kind": "text"
        }
      ],
      "correctOption": "c",
      "correctOptionText": "Sofía aprendió en su familia a dialogar, respetar turnos y cuidar el agua de su comunidad, por eso actúa con responsabilidad y respeto hacia los demás.",
      "hint": "Busca el caso donde costumbres, convivencia y relación con el entorno influyen en la forma de ser de la persona.",
      "correctArgument": "La identidad personal se forma en relación con la familia, la comunidad y el ambiente. En este caso, las prácticas de diálogo, respeto y cuidado de recursos moldean claramente la conducta y valores de Sofía.",
      "incorrectArgumentsByOption": {
        "a": "muestra una preferencia de consumo, pero no una formación de identidad ligada al entorno social y natural.",
        "b": "describe una decisión práctica de horario, no un proceso de construcción de identidad.",
        "d": "expresa un gusto personal, pero no la influencia formativa del entorno.",
        "e": "se refiere a una acción aislada relacionada con alimentación, no a identidad personal."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 117,
      "rangeStart": 117,
      "rangeEnd": 128
    },
    {
      "id": "reactivo-118",
      "number": 118,
      "areaId": "formacion-civica-y-etica",
      "areaName": "Formación cívica y ética",
      "block": "Valores, estético, económico y moral",
      "prompt": "Relaciona los tipos de valores con el concepto que les corresponde.\n\nValores\nI. Estético\nII. Económico\nIII. Moral\n\nConceptos\na. Se relaciona con la utilidad, el precio y el valor material de bienes y servicios.\nb. Se vincula con la apreciación de la belleza, el arte y la expresión.\nc. Orienta la conducta a partir de lo que se considera correcto o incorrecto.",
      "options": [
        {
          "label": "a",
          "text": "I: b, II: a, III: c",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "I: a, II: b, III: c",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "I: c, II: a, III: b",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "I: b, II: c, III: a",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "I: a, II: c, III: b",
          "kind": "text"
        }
      ],
      "correctOption": "a",
      "correctOptionText": "I: b, II: a, III: c",
      "hint": "Distingue entre belleza, utilidad material y conducta ética.",
      "correctArgument": "El valor estético se relaciona con la belleza y la expresión. El valor económico se asocia con bienes, utilidad y precio. El valor moral guía decisiones sobre lo que está bien o mal.",
      "incorrectArgumentsByOption": {
        "b": "intercambia el valor estético con el económico.",
        "c": "coloca el valor moral donde debe ir el estético.",
        "d": "confunde el económico con el moral.",
        "e": "altera el orden correcto de los tres valores."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 118,
      "rangeStart": 117,
      "rangeEnd": 128
    },
    {
      "id": "reactivo-119",
      "number": 119,
      "areaId": "formacion-civica-y-etica",
      "areaName": "Formación cívica y ética",
      "block": "Identidad personal, historias y experiencias compartidas",
      "prompt": "Lucía y Daniel escucharon a su abuelo contar cómo vivió su infancia, cómo era su barrio y qué tradiciones mantenía la familia. Después comprendieron que ________ también participan en la construcción de su identidad personal.",
      "options": [
        {
          "label": "a",
          "text": "las historias compartidas",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "los trámites escolares",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "los anuncios comerciales",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "las modas pasajeras",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "las estadísticas de población",
          "kind": "text"
        }
      ],
      "correctOption": "a",
      "correctOptionText": "las historias compartidas",
      "hint": "Piensa en aquello que transmite memoria, pertenencia y sentido de origen.",
      "correctArgument": "Las historias compartidas dentro de la familia y la comunidad ayudan a construir identidad porque transmiten recuerdos, costumbres, sentido de pertenencia y visión del pasado.",
      "incorrectArgumentsByOption": {
        "b": "los trámites escolares: forman parte de la vida diaria, pero no explican directamente la construcción identitaria del caso.",
        "c": "los anuncios comerciales: pueden influir en gustos, pero no son el elemento central del planteamiento.",
        "d": "las modas pasajeras: cambian rápido y no representan el sentido profundo de identidad señalado.",
        "e": "las estadísticas de población: aportan datos generales, no historias personales o familiares."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 119,
      "rangeStart": 117,
      "rangeEnd": 128
    },
    {
      "id": "reactivo-120",
      "number": 120,
      "areaId": "formacion-civica-y-etica",
      "areaName": "Formación cívica y ética",
      "block": "Derechos y obligaciones, distinguirlos en casos cotidianos",
      "prompt": "Relaciona los derechos y obligaciones de los adolescentes con el ejemplo que les corresponde.\n\nClasificación\nI. Derecho\nII. Obligación\n\nEjemplos\na. Recibir educación.\nb. Respetar el reglamento escolar.\nc. Acceder a servicios de salud.\nd. Cumplir con tareas y responsabilidades académicas.",
      "options": [
        {
          "label": "a",
          "text": "I: a, c; II: b, d",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "I: b, d; II: a, c",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "I: a, b; II: c, d",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "I: c, d; II: a, b",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "I: b, c; II: a, d",
          "kind": "text"
        }
      ],
      "correctOption": "a",
      "correctOptionText": "I: a, c; II: b, d",
      "hint": "Un derecho se recibe o se garantiza; una obligación se cumple.",
      "correctArgument": "Recibir educación y acceder a servicios de salud son derechos. Respetar reglas escolares y cumplir con tareas son obligaciones que corresponden a la vida estudiantil y social.",
      "incorrectArgumentsByOption": {
        "b": "invierte completamente derechos y obligaciones.",
        "c": "toma el respeto al reglamento como derecho, cuando en este caso es una obligación.",
        "d": "coloca el cumplimiento de tareas como derecho, lo cual es incorrecto.",
        "e": "mezcla ejemplos de ambas categorías sin respetar su naturaleza."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 120,
      "rangeStart": 117,
      "rangeEnd": 128
    },
    {
      "id": "reactivo-121",
      "number": 121,
      "areaId": "formacion-civica-y-etica",
      "areaName": "Formación cívica y ética",
      "block": "Violencia económica",
      "prompt": "Una adolescente trabaja medio tiempo en una tienda. El dueño le paga menos que a otros empleados que hacen las mismas tareas, con el argumento de que «todavía depende de sus papás y no necesita ganar más». Esta situación describe un caso de",
      "options": [
        {
          "label": "a",
          "text": "solidaridad laboral",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "violencia económica",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "administración doméstica",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "autonomía financiera",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "cooperación ciudadana",
          "kind": "text"
        }
      ],
      "correctOption": "b",
      "correctOptionText": "violencia económica",
      "hint": "Se afecta el acceso justo a recursos económicos mediante un trato desigual.",
      "correctArgument": "La violencia económica ocurre cuando se limita, controla o reduce injustamente el acceso de una persona a recursos o ingresos. Aquí hay un pago desigual e injustificado por la misma labor.",
      "incorrectArgumentsByOption": {
        "a": "solidaridad laboral: implicaría apoyo, no abuso.",
        "c": "administración doméstica: se refiere al manejo del gasto en casa, no a discriminación salarial.",
        "d": "autonomía financiera: apunta a capacidad de manejo de recursos, no a una agresión económica.",
        "e": "cooperación ciudadana: no describe una situación de explotación o desigualdad salarial."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 121,
      "rangeStart": 117,
      "rangeEnd": 128
    },
    {
      "id": "reactivo-122",
      "number": 122,
      "areaId": "formacion-civica-y-etica",
      "areaName": "Formación cívica y ética",
      "block": "Democracia, principio de mayoría y reglas de convivencia",
      "prompt": "En un grupo escolar se vota entre tres propuestas para elegir el destino de una excursión. La opción ganadora es la que recibe el mayor número de votos. Este procedimiento democrático se basa en el principio de",
      "options": [
        {
          "label": "a",
          "text": "utilidad",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "mayoría",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "autoridad",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "privilegio",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "imposición",
          "kind": "text"
        }
      ],
      "correctOption": "b",
      "correctOptionText": "mayoría",
      "hint": "La decisión se toma según la opción que reúne más apoyo.",
      "correctArgument": "En democracia, el principio de mayoría permite resolver diferencias mediante el voto, eligiendo la opción que obtiene más respaldo entre los participantes.",
      "incorrectArgumentsByOption": {
        "a": "utilidad: puede influir en decisiones, pero no define el método descrito.",
        "c": "autoridad: implicaría decidir por mando, no por votación.",
        "d": "privilegio: supone ventaja para unos cuantos, no participación democrática.",
        "e": "imposición: niega el proceso de consulta y elección colectiva."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 122,
      "rangeStart": 117,
      "rangeEnd": 128
    },
    {
      "id": "reactivo-123",
      "number": 123,
      "areaId": "formacion-civica-y-etica",
      "areaName": "Formación cívica y ética",
      "block": "Territorio y soberanía",
      "prompt": "El espacio físico dentro del cual un Estado ejerce autoridad, aplica leyes y establece los límites de su independencia frente a otros Estados se llama",
      "options": [
        {
          "label": "a",
          "text": "nación",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "paisaje",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "territorio",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "localidad",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "cultura",
          "kind": "text"
        }
      ],
      "correctOption": "c",
      "correctOptionText": "territorio",
      "hint": "No se refiere a la población ni a la identidad, sino al espacio sobre el que se ejerce poder.",
      "correctArgument": "El territorio es el espacio físico sobre el cual un Estado ejerce autoridad política y jurídica. Incluye tierra, mar y, según el caso, espacio aéreo.",
      "incorrectArgumentsByOption": {
        "a": "nación: se relaciona más con comunidad histórica y cultural que con el espacio físico de autoridad estatal.",
        "b": "paisaje: es una forma de observar el espacio, no una categoría política de soberanía.",
        "d": "localidad: es un asentamiento o lugar específico, no el concepto estatal completo.",
        "e": "cultura: alude a prácticas, valores y expresiones, no al espacio de jurisdicción."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 123,
      "rangeStart": 117,
      "rangeEnd": 128
    },
    {
      "id": "reactivo-124",
      "number": 124,
      "areaId": "formacion-civica-y-etica",
      "areaName": "Formación cívica y ética",
      "block": "Participación ciudadana y pluralidad ideológica",
      "prompt": "En un municipio se organizan foros donde jóvenes, adultos mayores, comerciantes y estudiantes presentan sus opiniones sobre problemas públicos y propuestas de mejora. Esta práctica fortalece principalmente la",
      "options": [
        {
          "label": "a",
          "text": "censura institucional",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "participación ciudadana",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "obediencia obligatoria",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "concentración del poder",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "exclusión política",
          "kind": "text"
        }
      ],
      "correctOption": "b",
      "correctOptionText": "participación ciudadana",
      "hint": "Se trata de abrir espacios para que distintos grupos expresen ideas y sean escuchados.",
      "correctArgument": "La participación ciudadana implica que las personas intervengan en asuntos públicos mediante opinión, propuesta, organización y diálogo. Eso permite reconocer la pluralidad de la sociedad.",
      "incorrectArgumentsByOption": {
        "a": "censura institucional: sería impedir expresiones, no promoverlas.",
        "c": "obediencia obligatoria: no describe un proceso de deliberación pública.",
        "d": "concentración del poder: el caso muestra apertura, no acumulación de decisiones en pocos actores.",
        "e": "exclusión política: ocurre lo contrario, porque se incluye a varios grupos sociales."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 124,
      "rangeStart": 117,
      "rangeEnd": 128
    },
    {
      "id": "reactivo-125",
      "number": 125,
      "areaId": "formacion-civica-y-etica",
      "areaName": "Formación cívica y ética",
      "block": "Territorio y soberanía",
      "prompt": "¿Cuál de los siguientes casos es un ejemplo de soberanía?",
      "options": [
        {
          "label": "a",
          "text": "Una empresa extranjera decide las leyes de un país.",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "Los ciudadanos eligen mediante voto a sus gobernantes.",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "Un gobierno externo nombra a las autoridades locales.",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "Un ejército extranjero controla las fronteras nacionales.",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "Un organismo privado impone el presupuesto público.",
          "kind": "text"
        }
      ],
      "correctOption": "b",
      "correctOptionText": "Los ciudadanos eligen mediante voto a sus gobernantes.",
      "hint": "Busca la opción donde el poder se ejerce desde la propia comunidad política.",
      "correctArgument": "La soberanía implica que el poder político reside en la nación o en el pueblo, que decide sobre su gobierno y su organización política. El voto ciudadano es una expresión directa de ello.",
      "incorrectArgumentsByOption": {
        "a": "una empresa extranjera decide las leyes de un país: eso niega soberanía.",
        "c": "un gobierno externo nombra a las autoridades locales: también contradice la autonomía política.",
        "d": "un ejército extranjero controla las fronteras nacionales: implica pérdida de control soberano.",
        "e": "un organismo privado impone el presupuesto público: desplaza indebidamente la decisión política nacional."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 125,
      "rangeStart": 117,
      "rangeEnd": 128
    },
    {
      "id": "reactivo-126",
      "number": 126,
      "areaId": "formacion-civica-y-etica",
      "areaName": "Formación cívica y ética",
      "block": "Medios de comunicación, función social y responsabilidad",
      "prompt": "Durante el paso de un huracán, varias estaciones de radio y canales de televisión suspenden su programación habitual para informar rutas de evacuación, ubicación de refugios y medidas de protección. Con ello cumplen una",
      "options": [
        {
          "label": "a",
          "text": "función social",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "estrategia comercial",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "acción de competencia privada",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "actividad recreativa",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "práctica de censura",
          "kind": "text"
        }
      ],
      "correctOption": "a",
      "correctOptionText": "función social",
      "hint": "Aquí los medios ayudan a proteger a la población con información útil.",
      "correctArgument": "Los medios cumplen una función social cuando informan, orientan y apoyan a la población en situaciones de interés colectivo, como emergencias o riesgos.",
      "incorrectArgumentsByOption": {
        "b": "estrategia comercial: la finalidad principal del caso no es vender o competir.",
        "c": "acción de competencia privada: no describe el sentido público de la información difundida.",
        "d": "actividad recreativa: el contenido no busca entretener, sino orientar y proteger.",
        "e": "práctica de censura: no se está ocultando información, sino comunicándola."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 126,
      "rangeStart": 117,
      "rangeEnd": 128
    },
    {
      "id": "reactivo-127",
      "number": 127,
      "areaId": "formacion-civica-y-etica",
      "areaName": "Formación cívica y ética",
      "block": "Cuidado del entorno natural",
      "prompt": "En una escuela se acuerda separar residuos, reducir el uso de botellas desechables y sembrar árboles en las áreas comunes. Estas acciones están encaminadas al cuidado del entorno",
      "options": [
        {
          "label": "a",
          "text": "cultural",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "político",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "económico",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "natural",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "administrativo",
          "kind": "text"
        }
      ],
      "correctOption": "d",
      "correctOptionText": "natural",
      "hint": "Las acciones se dirigen al manejo de residuos y a la conservación de áreas verdes.",
      "correctArgument": "Separar residuos, disminuir plásticos y sembrar árboles son medidas orientadas a proteger elementos del ambiente físico y biológico, es decir, el entorno natural.",
      "incorrectArgumentsByOption": {
        "a": "cultural: se relaciona con costumbres, expresiones y patrimonio.",
        "b": "político: alude a organización del poder y gobierno.",
        "c": "económico: se refiere a producción, intercambio y consumo de bienes.",
        "e": "administrativo: se vincula con gestión interna, no con protección ambiental directa."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 127,
      "rangeStart": 117,
      "rangeEnd": 128
    },
    {
      "id": "reactivo-128",
      "number": 128,
      "areaId": "formacion-civica-y-etica",
      "areaName": "Formación cívica y ética",
      "block": "Resolución de conflictos, negociación y diálogo",
      "prompt": "Dos grupos de vecinos quieren usar el mismo espacio comunitario en horarios similares. Después de dialogar, uno acepta mover su actividad media hora y el otro reduce su tiempo de uso para que ambos puedan ocupar el lugar. Esta situación describe un proceso de",
      "options": [
        {
          "label": "a",
          "text": "imposición, porque uno de los grupos conserva todo el control del espacio.",
          "kind": "text"
        },
        {
          "label": "b",
          "text": "negociación, porque existe un conflicto de intereses y ambas partes están dispuestas a dialogar y ceder.",
          "kind": "text"
        },
        {
          "label": "c",
          "text": "indiferencia, porque ninguno de los grupos modifica su postura inicial.",
          "kind": "text"
        },
        {
          "label": "d",
          "text": "obediencia, porque una autoridad externa decide sin escuchar a las partes.",
          "kind": "text"
        },
        {
          "label": "e",
          "text": "competencia, porque uno de los grupos elimina por completo al otro.",
          "kind": "text"
        }
      ],
      "correctOption": "b",
      "correctOptionText": "negociación, porque existe un conflicto de intereses y ambas partes están dispuestas a dialogar y ceder.",
      "hint": "Observa si hubo conflicto, diálogo y concesiones mutuas.",
      "correctArgument": "La negociación ocurre cuando dos o más partes con intereses distintos dialogan y hacen concesiones para llegar a un acuerdo. Eso es exactamente lo que sucede en el caso.",
      "incorrectArgumentsByOption": {
        "a": "imposición, porque uno de los grupos conserva todo el control del espacio: no coincide, ya que ambos ceden y comparten.",
        "c": "indiferencia, porque ninguno de los grupos modifica su postura inicial: es falso, porque sí ajustan horarios y tiempos.",
        "d": "obediencia, porque una autoridad externa decide sin escuchar a las partes: aquí el acuerdo surge del diálogo entre los vecinos.",
        "e": "competencia, porque uno de los grupos elimina por completo al otro: tampoco corresponde, porque ambos conservan acceso al espacio."
      },
      "visual": {
        "kind": "none",
        "content": ""
      },
      "sourceOrder": 128,
      "rangeStart": 117,
      "rangeEnd": 128
    }
  ]
};
