---
name: nueva-pantalla
description: Rediseña o crea una pantalla de Classroom siguiendo DESIGN.md. Úsala cuando pidan una vista, una página, una pantalla o un cambio visual.
---

# Crear o rediseñar una pantalla

1. Lee `DESIGN.md` completo antes de escribir nada. Si no existe, detente y pídelo.
2. Lee `AGENTS.md` para saber qué ve cada rol (un alumno solo ve lo suyo).
3. Pasa cada token de `DESIGN.md` a las variables del bloque `:root` de `css/estilos.css` (colores, espacio, radio y tipografía). Usa solo esas variables.
4. La estructura ya existe: tarjetas (`.tarjeta`), listas (`.tarjetas`), formularios y botones. Cámbiales el estilo; no cambies la lógica de `js/app.js`.
5. Si necesitas HTML nuevo, créalo desde `js/app.js` con la función `crear()` (usa `textContent`, nunca `innerHTML`).
6. Al final, muestra una tabla: cada parte de la pantalla y el token de `DESIGN.md` que usaste.
