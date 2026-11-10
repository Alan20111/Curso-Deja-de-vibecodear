# Esquema de datos · Classroom

Cada colección se guarda en `localStorage` como una lista de objetos en JSON.

## usuarios
| Campo | Tipo | Regla |
|-------|------|-------|
| id | número | Único, nunca se repite |
| nombre | texto | Obligatorio |
| rol | `"maestro"` o `"alumno"` | Solo esos dos valores |

## tareas
| Campo | Tipo | Regla |
|-------|------|-------|
| id | número | Único |
| titulo | texto | Obligatorio |
| fechaLimite | texto `AAAA-MM-DD` | Formato ISO, para poder comparar y ordenar fechas |
| creadaPor | id de un usuario | Debe ser un maestro |

## entregas
| Campo | Tipo | Regla |
|-------|------|-------|
| id | número | Único |
| tareaId | id de una tarea | Debe existir |
| alumnoId | id de un usuario | Debe ser alumno |
| contenido | texto | Obligatorio |
| entregadaEn | texto `AAAA-MM-DDTHH:mm` | Fecha y hora ISO |
| tarde | `true` o `false` | `true` si `entregadaEn` es después de `fechaLimite` |
| calificacion | número o `null` | Entero de 0 a 100; `null` mientras no se califique |

## Restricciones entre colecciones
- **Una entrega por alumno por tarea:** no puede haber dos entregas con el mismo `tareaId` y `alumnoId`.
- **Solo maestros califican:** `calificacion` solo la cambia un usuario con rol `maestro`.
