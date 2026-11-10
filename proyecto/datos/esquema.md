# Esquema de datos · Classroom

Cada colección se guarda en `localStorage` como una lista de objetos en JSON.
Los campos ya están. ✏️ Capa 1: la skill `disenar-esquema` llena la columna **Regla** a partir de `AGENTS.md`.

## usuarios
| Campo | Tipo | Regla |
|-------|------|-------|
| id | número | ✏️ |
| nombre | texto | ✏️ |
| rol | texto | ✏️ |

## tareas
| Campo | Tipo | Regla |
|-------|------|-------|
| id | número | ✏️ |
| titulo | texto | ✏️ |
| fechaLimite | texto | ✏️ |
| creadaPor | id de un usuario | ✏️ |

## entregas
| Campo | Tipo | Regla |
|-------|------|-------|
| id | número | ✏️ |
| tareaId | id de una tarea | ✏️ |
| alumnoId | id de un usuario | ✏️ |
| contenido | texto | ✏️ |
| entregadaEn | texto | ✏️ |
| tarde | `true` o `false` | ✏️ |
| calificacion | número o `null` | ✏️ |

## Restricciones entre colecciones
- ✏️
