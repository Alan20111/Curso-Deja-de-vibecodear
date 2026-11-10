# Plan B: OpenCode

Úsalo si eres menor de 18 años, si no puedes entrar con tu cuenta de Google o si se te acaba la cuota gratis de Antigravity.

OpenCode es gratuito, de código abierto y ofrece modelos gratis por tiempo limitado. Lee los mismos `AGENTS.md` y `.agents/skills/`, así que **tus reglas y tus skills sirven sin cambios**. Lo único distinto es dónde se configuran el MCP y los subagentes.

## Instalar

1. Descarga la app de escritorio desde https://opencode.ai/download.
2. Abre la carpeta `proyecto/`.
3. Escoge uno de los modelos marcados como **Free**. Cambian seguido, así que usa el que aparezca ese día.

> Algunos modelos gratis guardan lo que escribes o lo usan para entrenar. No pegues datos personales ni claves.

## Dónde va cada pieza

| Pieza | Antigravity | OpenCode |
|-------|-------------|----------|
| Instrucciones | `AGENTS.md` | `AGENTS.md` (igual) |
| Skills | `.agents/skills/` | `.agents/skills/` (igual) |
| MCP | `.agents/mcp_config.json` | `opencode.jsonc` en la raíz de `proyecto/` |
| Subagentes | `.agents/agents/<nombre>.md` | `.opencode/agents/<nombre>.md` |

## Qué copiar en lugar de los archivos de Antigravity

- **Capa 2:** en vez de `.agents/agents/revisor-seguridad.md`, copia `kit/opencode/agents/revisor-seguridad.md` a `proyecto/.opencode/agents/`.
- **Capa 3:** en vez de `.agents/mcp_config.json`, copia `kit/opencode/opencode.jsonc` a `proyecto/`.
- **Ensamble:** en vez de `.agents/agents/probador.md`, copia `kit/opencode/agents/probador.md` a `proyecto/.opencode/agents/`.

Todo lo demás (`AGENTS.md`, `datos/esquema.md`, `DESIGN.md` y las skills) se copia igual que en [kit/README.md](../kit/README.md).

## Diferencias que vas a notar

- En los subagentes de OpenCode no se listan herramientas: se bloquea la edición con `permissions`.
- Para llamar a un subagente, pídelo con palabras: `Usa el subagente revisor-seguridad para revisar js/`.
- No trae el subagente `browser` de la capa 4: abre tú `index.html` y compara con la referencia.

Documentación: [skills](https://opencode.ai/docs/skills/) · [MCP](https://opencode.ai/docs/mcp-servers/) · [agentes](https://opencode.ai/docs/agents/) · [reglas](https://opencode.ai/docs/rules/)
