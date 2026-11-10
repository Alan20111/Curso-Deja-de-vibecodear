# Curso: Deja de vibecodear

Haz que la IA trabaje a tu manera. Taller práctico de 2 horas para la semana de Ingeniería en Sistemas Computacionales (CIISTI 2026).

Vas a construir **Classroom**, un gestor de tareas para maestros y alumnos hecho con HTML, CSS y JavaScript, con un agente de IA gratuito. El código no es lo importante: lo importante es que aprendas a **darle reglas al agente, enseñarle procedimientos (skills), conectarlo con herramientas (MCP) y repartir el trabajo entre varios agentes (subagentes y orquestación)**.

---

## Antes de empezar (o en cuanto llegues)

Solo necesitas una laptop, Chrome y una cuenta personal de Google. No hay que instalar lenguajes ni bases de datos: los datos se guardan en el navegador.

| # | Qué | Enlace | Cómo sabes que quedó |
|---|-----|--------|----------------------|
| 1 | Descarga este repositorio: botón verde **Code → Download ZIP** y descomprímelo | — | Tienes la carpeta en tu laptop |
| 2 | Instala **Antigravity** | https://antigravity.google/download | La app abre |
| 3 | Inicia sesión con una **cuenta personal de Google** (no la de la escuela) | — | Ves el chat del agente |
| 4 | En Antigravity abre la carpeta **`proyecto/`** (no la carpeta completa del repositorio) | — | Ves `index.html` y `js/` en el explorador |
| 5 | Escoge el modelo **Gemini Flash** y escríbele: `hola, ¿qué archivos ves en este proyecto?` | — | Te contesta con la lista de archivos |
| 6 | Abre `proyecto/index.html` con doble clic y dale a **Cargar datos de ejemplo** | — | El selector "Soy" muestra 4 usuarios |

> **Requisitos de Antigravity:** ser mayor de 18 años y usar una cuenta personal de Google. Si no cumples alguno, o si se te acaba la cuota gratis, usa el [plan B con OpenCode](recursos/plan-b-opencode.md). Tu trabajo sirve igual en las dos herramientas.

---

## Las cinco piezas que vas a aprender

| Pieza | Qué es | En la escuela es… | Dónde vive |
|-------|--------|-------------------|------------|
| **Instrucciones** | Las reglas del proyecto, que el agente lee en cada mensaje | El reglamento del salón: aplica en cada clase | `AGENTS.md` |
| **Skill** | Un procedimiento que el agente abre solo cuando la tarea lo pide | Tu formulario: lo sacas solo cuando toca ese tema | `.agents/skills/<nombre>/SKILL.md` |
| **MCP** | Un conector a algo fuera de tu carpeta: documentación, el navegador, una base de datos | Tus contactos: no sabes todo, pero sabes a quién preguntar | `.agents/mcp_config.json` |
| **Subagente** | Otro agente con su propia conversación | El compañero del equipo que hace su parte en su libreta y te entrega el resultado | `.agents/agents/<nombre>.md` |
| **Orquestación** | Quién hace qué y en qué orden | El líder del equipo, que reparte y junta | Tu prompt, o una skill que lo guarda |

---

## Prácticas

El taller sigue cuatro capas de contexto, de la más profunda a la más visible. En cada capa dejas un archivo y usas una pieza del kit.

| Práctica | Pieza del kit | Te llevas |
|----------|---------------|-----------|
| [0. Preparación](practicas/00-preparacion.md) | — | Agente respondiendo |
| Cómo piensa la IA y por qué alucina | — | (explicación) |
| [1. Capa 1 · Datos](practicas/01-capa1-datos.md) | `AGENTS.md`, skill y MCP | `datos/esquema.md` |
| [2. Capa 2 · Lógica de negocio](practicas/02-capa2-logica.md) | Subagente | Las reglas en `js/reglas.js` |
| [3. Capa 3 · Código con tu estilo](practicas/03-capa3-codigo.md) | Skill y MCP | `nueva-funcion` y Context7 |
| [4. Capa 4 · Diseño](practicas/04-capa4-diseno.md) | Skill y subagente | Tu `DESIGN.md` aplicado |
| [5. Ensamble y reto final](practicas/05-ensamble.md) | Orquestación | "Entregar una tarea" probada |

**Todo viene prehecho.** La app ya funciona y en `proyecto/plantillas/` están las skills, los subagentes, el MCP y el diseño listos para activar: solo llenas los huecos marcados con ✏️. Mira [proyecto/plantillas/LEEME.md](proyecto/plantillas/LEEME.md).

**¿Te atrasaste?** La carpeta `kit/` trae resuelta cada capa. Las instrucciones para copiarla están en [kit/README.md](kit/README.md).

---

## Qué hay en este repositorio

```
proyecto/                ← la carpeta que abres en Antigravity
  index.html             ← la app (ábrela con doble clic)
  css/estilos.css
  js/datos.js            ← el único archivo que toca localStorage
  js/reglas.js           ← las reglas de negocio (empiezan "dejando pasar todo")
  js/app.js              ← la pantalla
  js/datos-ejemplo.js    ← datos de prueba (algunos rompen las reglas a propósito)
  pruebas.html           ← ábrelo para correr las pruebas de js/pruebas.js
  AGENTS.md              ← las reglas, con huecos ✏️ por llenar
  datos/esquema.md       ← el esquema, con huecos ✏️ por llenar
  plantillas/            ← skills, subagentes, MCP y diseño listos para activar
  .agents/skills/        ← aquí van tus skills
  .agents/agents/        ← aquí van tus subagentes
practicas/               ← los pasos de cada práctica
kit/                     ← cada capa resuelta, por si te atrasas
  capa1/ capa2/ capa3/ capa4/ ensamble/
  opencode/              ← lo mismo para el plan B
recursos/
  enlaces.md             ← documentación y lecturas
  plan-b-opencode.md
```

---

## Enlaces principales

- Antigravity: [descarga](https://antigravity.google/download) · [documentación](https://antigravity.google/docs/overview) · [skills](https://antigravity.google/docs/skills) · [MCP](https://antigravity.google/docs/mcp) · [subagentes](https://antigravity.google/docs/subagents) · [reglas y AGENTS.md](https://antigravity.google/docs/rules)
- Estándares abiertos: [AGENTS.md](https://agents.md/) · [Agent Skills](https://agentskills.io/) · [Model Context Protocol](https://modelcontextprotocol.io/)
- MCP que usamos: [Context7](https://context7.com/) (documentación actualizada) y [Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp) (demo del instructor)
- Diseño: [Refero Styles](https://styles.refero.design)
- Plan B: [OpenCode](https://opencode.ai/download)

Más en [recursos/enlaces.md](recursos/enlaces.md).
