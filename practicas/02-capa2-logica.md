# Capa 2 · Lógica de negocio

**La idea:** si no sabes qué debe pasar, tampoco sabes qué no debe pasar.

Abre `index.html`, carga los datos de ejemplo y entra como **Ana**: en "Mis entregas" ves las entregas y calificaciones de Bruno y de Carla, y puedes entregar la misma tarea dos veces. Entra como la maestra: puedes poner un 150. La app ya funciona, pero `js/reglas.js` "deja pasar todo". Ahí está el hueco.

> **Prueba esto:** F12 → **Application → Local Storage** y cámbiale la calificación a una entrega. Se guarda. Por eso, en un sistema real, lo crítico se valida en un servidor. En nuestro prototipo, todo pasa por `js/reglas.js` antes de guardar.

Pieza nueva: el **subagente**, tu compa de equipo. Trabaja en su propia conversación y te entrega solo el resultado.

## Trabajo · Tu turno 2

### 1. Activa el subagente revisor

```
Copia plantillas/agents/revisor-seguridad.md a .agents/agents/revisor-seguridad.md
```

Llena el hueco ✏️ de la **descripción**. Fíjate en `tools`: solo tiene `view_file` y `grep_search`, así que **no puede cambiar código**, solo leer.

### 2. Pídele que revise

```
Usa el subagente revisor-seguridad para revisar js/reglas.js y js/app.js
```

Debe aparecer una subconversación aparte, y el principal recibe solo la lista de problemas.

### 3. Corrige lo que encontró

```
Completa en js/reglas.js las reglas que reportó el revisor: puedeCrearTarea, validarTarea, puedeCalificar, validarCalificacion y entregasVisibles
```

### 4. Pruébalo

- Abre `pruebas.html`: las pruebas del alumno que crea tareas, de la calificación de 120 y de "solo ve sus entregas" ya deben pasar.
- Entra como Ana: en "Mis entregas" ya solo aparecen las suyas.
- En `index.html`, intenta poner un 150 como maestra.

## Error típico

Escribir mal el nombre de una herramienta en `tools`: puede dejar al subagente colgado.
