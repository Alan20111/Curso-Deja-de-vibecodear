# Ensamble · Orquestación y reto final

**La idea:** orquestar es decidir **quién hace qué y en qué orden**. El agente principal se vuelve el líder del equipo: planea, reparte y junta.

| Patrón | Cómo se ve | Cuándo usarlo |
|--------|------------|---------------|
| **Cadena** | Planear → construir → revisar | Una función nueva |
| **Abanico** | Dos subagentes al mismo tiempo; luego se juntan | Revisiones que no dependen una de otra |
| **Ciclo** | Construir → revisar → corregir, hasta que pase | Cuando la revisión encuentra fallas |

## Prepara el equipo

```
Copia plantillas/agents/probador.md a .agents/agents/probador.md y plantillas/skills/entregar-funcion a .agents/skills/entregar-funcion
```

- `probador`: revisa que cada regla tenga su prueba en `js/pruebas.js`. No edita código.
- `entregar-funcion`: la orquestación guardada como skill.

## Trabajo · Reto final en parejas

Hoy un alumno puede entregar la misma tarea las veces que quiera, porque `puedeEntregar` en `js/reglas.js` "deja pasar todo". Arréglenlo con todo su kit. Debe cumplir:

- Solo un alumno puede entregar.
- Una sola entrega por alumno por tarea: la segunda se rechaza con un mensaje claro.
- Si llega después de la fecha límite, se guarda pero marcada como tarde.
- Las pruebas pasan en `pruebas.html`.

### Pasos

1. Conversación nueva:

   ```
   /entregar-funcion entregar una tarea
   ```

2. Revisen el plan antes de aprobarlo. ¿Menciona las tres reglas?
3. Observen el panel: deben aparecer **dos subconversaciones al mismo tiempo** (revisor y probador).
4. Abran `pruebas.html` y luego prueben en `index.html`: entren como Ana y entreguen dos veces la misma tarea.

## Comprobación

Señalen en su pantalla **qué pieza hizo cada cosa**: `AGENTS.md`, `datos/esquema.md`, la skill `entregar-funcion`, la skill `nueva-funcion`, los subagentes y el MCP.

## Para llevarte a casa

- Todo lo de `.agents/`, `AGENTS.md` y `DESIGN.md` es texto: cópialo a tus propios proyectos.
- Las skills siguen un estándar abierto ([agentskills.io](https://agentskills.io/)) y funcionan en OpenCode, VS Code y otras herramientas.
- Si eres estudiante, tramita [GitHub Education](https://education.github.com/) para usar Copilot gratis en VS Code. Tarda unos días.
