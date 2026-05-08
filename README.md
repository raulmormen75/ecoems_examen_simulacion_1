# Simulador ECOEMS IFR

Aplicación web estática para practicar el examen ECOEMS con identidad institucional IFR, avance secuencial, cronómetro, recarga segura, retroalimentación y resultado final descargable.

## Ligas

- Repositorio: https://github.com/raulmormen75/ecoems_examen_simulacion_1.git
- Producción: https://ecoems-examen-simulacion-1.vercel.app/

## Contexto para la versión 2

El documento principal para transferir lo realizado en la versión 1 y planear la versión 2 está en:

[docs/CONTEXTO_VERSION_1_A_VERSION_2.md](docs/CONTEXTO_VERSION_1_A_VERSION_2.md)

## Ejecución local

```powershell
node build-exam-data.js
python -m http.server 4173
```

Abrir `http://127.0.0.1:4173/`.

## Recarga segura

El avance del intento se guarda en `localStorage` con una llave exclusiva de simulación 1. Al refrescar con progreso válido, aparece la modal `🔄 Hay un avance guardado` para continuar sin reiniciar o borrar el intento y volver a portada limpia. La app descarta storage corrupto o incompatible y el cronómetro se calcula con `deadlineAt` para cerrar por tiempo real.
