# Classroom

Un gestor de tareas para un salón de clases.

- Los **maestros** crean tareas con fecha límite y califican las entregas.
- Los **alumnos** ven sus tareas y entregan su trabajo.

## Tecnología

Solo HTML, CSS y JavaScript, sin librerías ni instalaciones. Los datos se guardan en el `localStorage` del navegador.

| Archivo | Para qué sirve |
|---------|----------------|
| `index.html` | La app. Ábrela con doble clic. |
| `css/estilos.css` | El diseño. |
| `js/datos.js` | El único archivo que lee y guarda en `localStorage`. |
| `js/reglas.js` | Las reglas de negocio, como funciones. |
| `js/app.js` | La pantalla: lee datos, aplica reglas y pinta el HTML. |
| `js/datos-ejemplo.js` | Datos para probar (algunos rompen las reglas a propósito). |
| `pruebas.html` | Abre este archivo para correr las pruebas de `js/pruebas.js`. |
| `datos/` | Aquí va el esquema de los datos (`datos/esquema.md`). |

> **Ojo:** `localStorage` vive en tu navegador, así que cualquiera puede cambiarlo desde las herramientas de desarrollador. Para un prototipo está bien; en un sistema real, las reglas críticas se validan en un servidor.

## Esta es la carpeta que abres en Antigravity

Las reglas, las skills y los subagentes viven aquí, en `AGENTS.md` y `.agents/`. El MCP no: se configura en Antigravity (Customizations → MCP), y en el taller solo se ve en la demo del instructor.
