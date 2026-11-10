// reglas.js — las reglas de negocio de AGENTS.md, como funciones.
// Cada función regresa { ok: true } o { ok: false, error: 'mensaje para el usuario' }.
// Nada de pantallas ni de localStorage aquí: solo decisiones.
//
// ✏️ Todas empiezan "dejando pasar todo". Por eso la app permite cosas que no debería.
// Tu agente las va a completar durante el taller.

// ✏️ Capa 2: solo un maestro puede crear tareas.
function puedeCrearTarea(usuario) {
  return { ok: true };
}

// ✏️ Capa 1 y 2: la tarea necesita título y una fecha límite en formato AAAA-MM-DD.
function validarTarea(datos) {
  return { ok: true };
}

// ✏️ Capa 2: solo un maestro puede calificar.
function puedeCalificar(usuario) {
  return { ok: true };
}

// ✏️ Capa 2: la calificación es un entero de 0 a 100.
function validarCalificacion(valor) {
  return { ok: true };
}

// ✏️ Capa 2: un alumno solo ve sus propias entregas; el maestro ve todas.
function entregasVisibles(usuario, entregas) {
  return entregas;
}

// ✏️ Capa 3: una entrega es tarde si llega después del final del día de la fecha límite.
function esTarde(fechaLimite, entregadaEn) {
  return false;
}

// ✏️ Reto final: solo un alumno entrega, y solo una vez por tarea.
function puedeEntregar(usuario, tarea, entregas) {
  return { ok: true };
}
