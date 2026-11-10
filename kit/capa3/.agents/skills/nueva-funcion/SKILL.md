---
name: nueva-funcion
description: Agrega o completa una función de Classroom (regla, datos y pantalla) con su prueba, siguiendo el estilo del proyecto. Úsala cuando pidan una función, una regla, un botón, un formulario o un cambio de comportamiento.
---

# Agregar una función

1. Lee `AGENTS.md` y `datos/esquema.md`.
2. Si la función decide algo (quién puede, cuántas veces, qué rango), escríbela en `js/reglas.js`. Si ya existe con "dejar pasar todo", complétala. Regresa `{ ok: true }` o `{ ok: false, error: 'mensaje en español' }`.
3. Si guarda o lee datos, hazlo solo con `leer()` y `guardar()` de `js/datos.js`.
4. `js/app.js` ya llama a las reglas: cámbialo solo si la pantalla necesita algo nuevo.
5. Agrega en `js/pruebas.js` una prueba que pasa y una por cada forma en que la regla puede fallar.
6. Respeta la sección "Estilo" de AGENTS.md: nombres en español y camelCase, funciones de máximo 20 líneas y `textContent` en vez de `innerHTML`.
7. Al terminar, dime que abra `pruebas.html` para ver las pruebas e `index.html` para probarlo a mano.
