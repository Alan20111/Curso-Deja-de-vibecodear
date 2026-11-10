// pruebas.js — un mini corredor de pruebas. Abre pruebas.html en el navegador para verlas.
// Cada regla de AGENTS.md debe tener al menos una prueba que pasa y una que falla.

const resultados = [];

function prueba(nombre, funcion) {
  try {
    funcion();
    resultados.push({ nombre, paso: true });
  } catch (error) {
    resultados.push({ nombre, paso: false, error: error.message });
  }
}

function esperarIgual(real, esperado) {
  if (JSON.stringify(real) !== JSON.stringify(esperado)) {
    throw new Error(`esperaba ${JSON.stringify(esperado)} y obtuve ${JSON.stringify(real)}`);
  }
}

const MAESTRO = { id: 1, rol: 'maestro' };
const ALUMNA = { id: 2, rol: 'alumno' };

// ---- Pruebas ----

prueba('el localStorage guarda y lee una lista', () => {
  guardar('prueba-temporal', [1, 2, 3]);
  esperarIgual(leer('prueba-temporal'), [1, 2, 3]);
  localStorage.removeItem('prueba-temporal');
});

prueba('un maestro puede crear tareas', () => {
  esperarIgual(puedeCrearTarea(MAESTRO).ok, true);
});

// ✏️ Estas fallan hasta que tu agente complete reglas.js. ¡Esa es la idea!

prueba('un alumno NO puede crear tareas', () => {
  esperarIgual(puedeCrearTarea(ALUMNA).ok, false);
});

prueba('una calificación de 120 NO es válida', () => {
  esperarIgual(validarCalificacion(120).ok, false);
});

prueba('un alumno solo ve sus propias entregas', () => {
  const entregas = [{ id: 1, alumnoId: 2 }, { id: 2, alumnoId: 3 }];
  esperarIgual(entregasVisibles(ALUMNA, entregas).length, 1);
});

// ✏️ Plantilla para tus pruebas: cópiala y cambia el nombre y lo que esperas.
// prueba('describe aquí la regla', () => {
//   esperarIgual(tuFuncion(datos).ok, false);
// });

// ---- Mostrar resultados ----

const lista = document.getElementById('resultados');
for (const resultado of resultados) {
  const elemento = document.createElement('li');
  elemento.className = resultado.paso ? 'paso' : 'falla';
  elemento.textContent = `${resultado.paso ? '✓' : '✗'} ${resultado.nombre}${resultado.error ? ` — ${resultado.error}` : ''}`;
  lista.append(elemento);
}
const pasaron = resultados.filter((resultado) => resultado.paso).length;
document.getElementById('resumen').textContent = `${pasaron} de ${resultados.length} pruebas pasaron.`;
