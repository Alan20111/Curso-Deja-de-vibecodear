// datos.js — el ÚNICO archivo que toca el localStorage.
// Cada colección (usuarios, tareas, entregas) se guarda como una lista en JSON.

const COLECCIONES = ['usuarios', 'tareas', 'entregas'];

function leer(coleccion) {
  return JSON.parse(localStorage.getItem(coleccion) || '[]');
}

function guardar(coleccion, lista) {
  localStorage.setItem(coleccion, JSON.stringify(lista));
}

function siguienteId(lista) {
  return lista.reduce((mayor, elemento) => Math.max(mayor, elemento.id), 0) + 1;
}

function borrarTodo() {
  for (const coleccion of COLECCIONES) {
    localStorage.removeItem(coleccion);
  }
}
