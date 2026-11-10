// datos-ejemplo.js — datos para probar la app.
// Ojo: no todos respetan las reglas del proyecto. ¿Cuáles no? Eso lo descubre el agente.

const DATOS_EJEMPLO = {
  usuarios: [
    { id: 1, nombre: 'Profa. Ramírez', rol: 'maestro' },
    { id: 2, nombre: 'Ana López', rol: 'alumno' },
    { id: 3, nombre: 'Bruno Torres', rol: 'alumno' },
    { id: 4, nombre: 'Carla Medina', rol: 'alumno' },
  ],
  tareas: [
    { id: 1, titulo: 'Diagrama entidad-relación', fechaLimite: '2026-11-20', creadaPor: 1 },
    { id: 2, titulo: 'Práctica de SQL', fechaLimite: '20 de noviembre', creadaPor: 1 },
    { id: 3, titulo: 'Ensayo de ética en IA', fechaLimite: '2026-11-25', creadaPor: 3 },
    { id: 4, titulo: 'Lectura de normalización', fechaLimite: '2026-01-15', creadaPor: 1 },
  ],
  entregas: [
    { id: 1, tareaId: 1, alumnoId: 2, contenido: 'diagrama-ana.pdf', entregadaEn: '2026-11-18T10:00', calificacion: 95 },
    { id: 2, tareaId: 1, alumnoId: 3, contenido: 'diagrama-bruno.pdf', entregadaEn: '2026-11-21T09:30', calificacion: 80 },
    { id: 3, tareaId: 1, alumnoId: 2, contenido: 'diagrama-ana-v2.pdf', entregadaEn: '2026-11-19T12:00', calificacion: null },
    { id: 4, tareaId: 2, alumnoId: 4, contenido: 'consultas-carla.sql', entregadaEn: '2026-11-19T18:45', calificacion: 120 },
  ],
};

function cargarEjemplo() {
  for (const coleccion of COLECCIONES) {
    guardar(coleccion, DATOS_EJEMPLO[coleccion]);
  }
}
