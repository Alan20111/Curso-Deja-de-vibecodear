// app.js — la pantalla: lee datos, pregunta a reglas.js y pinta el HTML.
// Ya funciona. Lo que falta está en reglas.js.

const selectorUsuario = document.getElementById('usuario-actual');
const contenido = document.getElementById('contenido');

// ---------- Ayudantes para crear HTML sin innerHTML ----------

function crear(etiqueta, texto, clase) {
  const elemento = document.createElement(etiqueta);
  if (texto !== undefined) elemento.textContent = texto;
  if (clase) elemento.className = clase;
  return elemento;
}

function mostrarError(contenedor, resultado) {
  if (resultado.ok) return false;
  contenedor.append(crear('p', resultado.error, 'error'));
  return true;
}

function usuarioActual() {
  const id = Number(selectorUsuario.value);
  return leer('usuarios').find((usuario) => usuario.id === id);
}

function nombreDe(id) {
  const usuario = leer('usuarios').find((u) => u.id === id);
  return usuario ? usuario.nombre : '¿?';
}

// ---------- Vista del maestro ----------

function pintarMaestro(usuario) {
  contenido.append(crear('h2', 'Tareas'));
  const lista = crear('ul', undefined, 'tarjetas');
  for (const tarea of leer('tareas')) {
    const total = leer('entregas').filter((e) => e.tareaId === tarea.id).length;
    lista.append(crear('li', `${tarea.titulo} · vence ${tarea.fechaLimite} · ${total} entregas`, 'tarjeta'));
  }
  contenido.append(lista);
  contenido.append(formularioNuevaTarea(usuario));
  pintarPorCalificar(usuario);
}

function formularioNuevaTarea(usuario) {
  const formulario = crear('form', undefined, 'tarjeta');
  formulario.append(crear('h3', 'Nueva tarea'));
  const titulo = Object.assign(crear('input'), { placeholder: 'Título', required: true });
  const fecha = Object.assign(crear('input'), { type: 'date', required: true });
  formulario.append(titulo, fecha, crear('button', 'Crear'));
  formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const datos = { titulo: titulo.value.trim(), fechaLimite: fecha.value };
    if (mostrarError(formulario, puedeCrearTarea(usuario))) return;
    if (mostrarError(formulario, validarTarea(datos))) return;
    const tareas = leer('tareas');
    tareas.push({ id: siguienteId(tareas), ...datos, creadaPor: usuario.id });
    guardar('tareas', tareas);
    pintar();
  });
  return formulario;
}

function pintarPorCalificar(usuario) {
  contenido.append(crear('h2', 'Entregas'));
  const lista = crear('ul', undefined, 'tarjetas');
  for (const entrega of entregasVisibles(usuario, leer('entregas'))) {
    const fila = crear('li', undefined, 'tarjeta');
    const estado = entrega.tarde ? ' · tarde' : '';
    fila.append(crear('span', `${nombreDe(entrega.alumnoId)} · ${entrega.contenido}${estado} · calificación: ${entrega.calificacion ?? 'sin calificar'}`));
    const nota = Object.assign(crear('input'), { type: 'number', placeholder: '0 a 100' });
    const boton = crear('button', 'Calificar');
    boton.addEventListener('click', () => calificar(usuario, entrega.id, nota.value, fila));
    fila.append(nota, boton);
    lista.append(fila);
  }
  contenido.append(lista);
}

function calificar(usuario, entregaId, valor, fila) {
  const numero = Number(valor);
  if (mostrarError(fila, puedeCalificar(usuario))) return;
  if (mostrarError(fila, validarCalificacion(numero))) return;
  const entregas = leer('entregas');
  entregas.find((e) => e.id === entregaId).calificacion = numero;
  guardar('entregas', entregas);
  pintar();
}

// ---------- Vista del alumno ----------

function pintarAlumno(usuario) {
  contenido.append(crear('h2', 'Mis tareas'));
  const misEntregas = entregasVisibles(usuario, leer('entregas'));
  const lista = crear('ul', undefined, 'tarjetas');
  for (const tarea of leer('tareas')) {
    const entrega = misEntregas.find((e) => e.tareaId === tarea.id && e.alumnoId === usuario.id);
    const estado = !entrega ? 'pendiente' : entrega.tarde ? 'entregada tarde' : 'entregada';
    const fila = crear('li', undefined, 'tarjeta');
    fila.append(crear('strong', tarea.titulo), crear('span', ` · vence ${tarea.fechaLimite} · ${estado}`));
    fila.append(formularioEntrega(usuario, tarea, fila));
    lista.append(fila);
  }
  contenido.append(lista);
  pintarMisEntregas(usuario);
}

function pintarMisEntregas(usuario) {
  contenido.append(crear('h2', 'Mis entregas'));
  const lista = crear('ul', undefined, 'tarjetas');
  for (const entrega of entregasVisibles(usuario, leer('entregas'))) {
    const tarea = leer('tareas').find((t) => t.id === entrega.tareaId);
    const calificacion = entrega.calificacion ?? 'sin calificar';
    lista.append(crear('li', `${nombreDe(entrega.alumnoId)} · ${tarea ? tarea.titulo : '¿?'} · ${entrega.contenido} · calificación: ${calificacion}`, 'tarjeta'));
  }
  contenido.append(lista);
}

function formularioEntrega(usuario, tarea, fila) {
  const formulario = crear('form');
  const archivo = Object.assign(crear('input'), { placeholder: 'Nombre de tu archivo', required: true });
  formulario.append(archivo, crear('button', 'Entregar'));
  formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const entregas = leer('entregas');
    if (mostrarError(fila, puedeEntregar(usuario, tarea, entregas))) return;
    const ahora = new Date().toISOString().slice(0, 16);
    entregas.push({
      id: siguienteId(entregas), tareaId: tarea.id, alumnoId: usuario.id,
      contenido: archivo.value.trim(), entregadaEn: ahora,
      tarde: esTarde(tarea.fechaLimite, ahora), calificacion: null,
    });
    guardar('entregas', entregas);
    pintar();
  });
  return formulario;
}

// ---------- Arranque ----------

function pintar() {
  contenido.replaceChildren();
  const usuario = usuarioActual();
  if (!usuario) {
    contenido.append(crear('p', 'Carga los datos de ejemplo y escoge un usuario arriba.'));
    return;
  }
  if (usuario.rol === 'maestro') pintarMaestro(usuario);
  else pintarAlumno(usuario);
}

function pintarSelectorUsuarios() {
  const elegido = selectorUsuario.value;
  selectorUsuario.replaceChildren();
  for (const usuario of leer('usuarios')) {
    selectorUsuario.append(Object.assign(crear('option', `${usuario.nombre} (${usuario.rol})`), { value: usuario.id }));
  }
  if (elegido) selectorUsuario.value = elegido;
}

selectorUsuario.addEventListener('change', pintar);
document.getElementById('cargar-ejemplo').addEventListener('click', () => {
  cargarEjemplo();
  pintarSelectorUsuarios();
  pintar();
});
document.getElementById('borrar-todo').addEventListener('click', () => {
  borrarTodo();
  pintarSelectorUsuarios();
  pintar();
});

pintarSelectorUsuarios();
pintar();
