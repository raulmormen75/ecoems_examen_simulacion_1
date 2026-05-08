# Estado del proyecto

## Objetivo

Simular la experiencia completa del examen ECOEMS con identidad IFR, cronómetro, avance secuencial y repaso inteligente al cierre.

## Estado actual

- Parser de datos implementado en `build-exam-data.js`.
- Datos generados en `exam-data.js`.
- Interfaz del simulador implementada en `index.html`, `exam-styles.css` y `exam-app.js`.
- Panel `Resultado final` implementado como cierre persistente con métricas, bloques por reforzar y descarga PNG.
- Recarga segura del intento implementada con `localStorage`, llave exclusiva de simulación 1, firma completa del contenido y cronómetro basado en `deadlineAt`.
- Si existe progreso guardado, la app muestra la modal `🔄 Hay un avance guardado` para elegir entre `🔄 Continuar sin reiniciar` o `🧹 Reiniciar desde cero`.
- Validación realizada en navegador real con flujo de inicio, respuestas correctas e incorrectas, cierre por tiempo y revisión móvil.

## Cómo correr la app

1. Generar `exam-data.js` con `node build-exam-data.js`.
2. Servir la carpeta con un servidor estático, por ejemplo `python -m http.server 4173`.
3. Abrir `http://127.0.0.1:4173/` en navegador.

## Smoke tests

- Iniciar examen.
- Responder un reactivo bien y otro mal.
- Confirmar actualización de métricas.
- Verificar que el siguiente reactivo se desbloquee.
- Revisar figuras y tablas en reactivos con contenido preformateado.
- Forzar término del examen y revisar modales.
- Confirmar que el panel `Resultado final` aparece por término y por tiempo agotado.
- Descargar el panel final en PNG y revisar que el archivo no esté vacío.
- Confirmar que al refrescar aparece la modal de recarga segura y que `🔄 Continuar sin reiniciar` conserva estado, reactivo activo, respuestas, métricas, cronómetro y paneles de revisión.
- Confirmar que `🧹 Reiniciar desde cero` limpia el progreso guardado y vuelve a portada con cronómetro `03:00:00` y métricas en cero.
- Probar storage corrupto y confirmar que se descarta sin romper la app.
- Confirmar que el cronómetro cierra por `deadlineAt` real y no acepta respuestas después del vencimiento.
