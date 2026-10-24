# Transmetro Guatemala - Sistema de control y gestión

Aplicación web del centro de control C5 del Transmetro. Los datos de flota, tarjetas, sensores y alertas se simulan en el navegador (sin backend).

## Módulos

| Pestaña | Contenido |
| --- | --- |
| Flota y terminales | Pórticos RFID, despacho, detección de bus bunching, mantenimiento (RF-01/02/03) |
| Tarjeta y molinete | Tarjeta ciudadana NFC, recargas, cobro por perfil, evasión tarifaria (RF-04/08/11) |
| Seguridad y alertas | Botón de pánico, seguimiento GPS e incidentes (RF-17/19) |
| Pasajeros | Aforo por unidad con sensores ópticos simulados y ETA en andenes |
| Operadores | Autenticación de turno con PIN, bloqueo por intentos y puntaje de conducta |

La consola de eventos de la derecha registra todo lo que ocurre en los módulos.

## Uso

```bash
npm install
npm run dev
```

Abrir la URL que muestra Vite (por defecto http://localhost:5173).

Para generar la versión de producción: `npm run build` (salida en `dist/`).

## Credenciales de prueba

- PIN de operadores: OP-01 = 1111, OP-02 = 2222, OP-03 = 3333, OP-04 = 4444.

## Stack

React 18, Vite 6 y Tailwind CSS 4. Sin otras dependencias.
