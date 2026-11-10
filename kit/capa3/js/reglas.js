// reglas.js — las reglas de negocio de AGENTS.md, como funciones.
// Cada función regresa { ok: true } o { ok: false, error: 'mensaje para el usuario' }.
// Nada de pantallas ni de localStorage aquí: solo decisiones.
//
// ✏️ Todas empiezan "dejando pasar todo". Por eso la app permite cosas que no debería.
// Tu agente las va a completar durante el taller.

// ✏️ Capa 2: solo un maestro puede crear tareas.
function puedeCrearTarea(usuario) {
  if (usuario.rol !== 'maestro') return { ok: false, error: 'Solo un maestro puede crear tareas.' };
  return { ok: true };
}

// ✏️ Capa 1 y 2: la tarea necesita título y una fecha límite en formato AAAA-MM-DD.
function validarTarea(datos) {
  if (!datos.titulo) return { ok: false, error: 'La tarea necesita un título.' };
  if (!/^\d{4}-\d{2}-\d{2}$/.test(datos.fechaLimite)) return { ok: false, error: 'La fecha límite debe ser AAAA-MM-DD.' };
  return { ok: true };
}

// ✏️ Capa 2: solo un maestro puede calificar.
function puedeCalificar(usuario) {
  if (usuario.rol !== 'maestro') return { ok: false, error: 'Solo un maestro puede calificar.' };
  return { ok: true };
}

// ✏️ Capa 2: la calificación es un entero de 0 a 100.
function validarCalificacion(valor) {
  if (!Number.isInteger(valor) || valor < 0 || valor > 100) return { ok: false, error: 'La calificación es un entero de 0 a 100.' };
  return { ok: true };
}

// ✏️ Capa 2: un alumno solo ve sus propias entregas; el maestro ve todas.
function entregasVisibles(usuario, entregas) {
  if (usuario.rol === 'maestro') return entregas;
  return entregas.filter((entrega) => entrega.alumnoId === usuario.id);
}

// ✏️ Capa 3: una entrega es tarde si llega después del final del día de la fecha límite.
function esTarde(fechaLimite, entregadaEn) {
  return entregadaEn.slice(0, 10) > fechaLimite;
}

// ✏️ Reto final: solo un alumno entrega, y solo una vez por tarea.
function puedeEntregar(usuario, tarea, entregas) {
  return { ok: true };
}
