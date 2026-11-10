# Classroom

Gestor de tareas para un salón: los maestros crean tareas y califican; los alumnos entregan.

## Tecnología
- Solo HTML, CSS y JavaScript, sin librerías ni frameworks.
- Los datos viven en `localStorage`. Solo `js/datos.js` lo toca.
- Las reglas de negocio son funciones en `js/reglas.js`; la pantalla está en `js/app.js`.
- El esquema de los datos está en `datos/esquema.md`. No inventes campos.
- No hay login: el usuario se elige en el selector "Soy".

## Reglas de negocio
- Solo un maestro crea tareas y califica.
- Una entrega por alumno por tarea.
- La calificación es un entero de 0 a 100.
- Una entrega después de la fecha límite se guarda, pero marcada como tarde.
- Un alumno solo ve sus propias entregas.

## Cómo trabajar
- Antes de escribir código, explica tu plan y espera mi aprobación.
- Si una regla no está clara, pregunta en vez de suponer.
