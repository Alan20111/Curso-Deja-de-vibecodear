---
name: nueva-pantalla
description: ✏️ Escribe en una línea qué hace y cuándo usarla. Pista: rediseñar o crear una pantalla de Classroom siguiendo DESIGN.md; usarla cuando pidan una vista, una página o un cambio visual.
---

# Crear o rediseñar una pantalla

1. Lee `DESIGN.md` completo antes de escribir nada. Si no existe, detente y pídelo.
2. Lee `AGENTS.md` para saber qué ve cada rol (un alumno solo ve lo suyo).
3. Pasa cada token de `DESIGN.md` a las variables del bloque `:root` de `css/estilos.css` (colores, espacio, radio y tipografía). Usa solo esas variables.
4. La estructura ya existe: tarjetas (`.tarjeta`), listas (`.tarjetas`), formularios y botones. Cámbiales el estilo; no cambies la lógica de `js/app.js`.
5. Si necesitas HTML nuevo, créalo desde `js/app.js` con la función `crear()` (usa `textContent`, nunca `innerHTML`).
6. Al final, muestra una tabla: cada parte de la pantalla y el token de `DESIGN.md` que usaste.
