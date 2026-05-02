# Plataforma de simulación ECOEMS IFR

## Milestones

1. Normalizar `Examen simulación 1.txt` a `window.IFR_APP_DATA`.
2. Construir la shell IFR del simulador con cronómetro, métricas y secuencia vertical.
3. Implementar cierre por tiempo, cierre por término y repaso inteligente.
4. Integrar panel persistente `Resultado final` con métricas, bloques por reforzar y descarga PNG.
5. Verificar flujo real en navegador de escritorio y móvil.

## Acceptance Criteria

- El parser genera 128 reactivos y 10 áreas con rangos correctos.
- La app inicia solo con el botón `Iniciar examen`.
- El tiempo corre 3 horas y termina el examen al agotarse.
- Los reactivos futuros no exponen su contenido.
- Las métricas se actualizan en vivo.
- La retroalimentación correcta e incorrecta coincide con la especificación aprobada.
- El cierre muestra resumen y repaso inteligente.
- El panel `Resultado final` aparece tanto por término como por tiempo agotado.
- La descarga PNG conserva el contenido del panel final.
- La revisión final es solo de lectura.
- La interfaz conserva identidad IFR, escudo visible y `Plus Jakarta Sans`.

## Validación

- `node build-exam-data.js`
- Revisión de conteos y campos estructurados.
- Navegación real con servidor local.
- Pruebas en escritorio y móvil con navegador automatizado.

## Regla de control

Si una prueba rompe el flujo secuencial, el cronómetro o la lectura de tablas/figuras, se corrige antes de continuar.
