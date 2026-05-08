# Secuencia de implementación

1. Crear el parser del `.txt` en UTF-8 y generar `exam-data.js`.
2. Diseñar `index.html` con portada, encabezado fijo, lista vertical de reactivos y modales.
3. Implementar `exam-app.js` con estado único del examen.
4. Integrar métricas, cronómetro, bloqueo secuencial y lógica de cierre.
5. Integrar el panel `Resultado final` como cierre persistente y descargable.
6. Ajustar estilos IFR para escritorio y móvil.
7. Integrar recarga segura del intento con modal de decisión, `localStorage`, firma completa del contenido y `deadlineAt`.
8. Ejecutar pruebas locales, navegador real y correcciones finales.

## No cambiar

- El contenido textual fuente salvo normalización técnica.
- El orden original de los 128 reactivos.
- La identidad IFR y el escudo institucional.
- La persistencia local del avance al refrescar, incluida la llave exclusiva de simulación 1.

## Cadencia de validación

- Validar el parser antes de tocar la UI.
- Validar la UI antes de automatizar pruebas de flujo.
- Validar los modales y la revisión final antes de cerrar el trabajo.
- Validar el panel final por término, por tiempo agotado y por descarga PNG antes de publicar.
- Validar recarga segura: continuar, reiniciar, storage corrupto, vencimiento por `deadlineAt`, `pagehide` y `visibilitychange`.
