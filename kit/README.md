# Kit resuelto

Cada carpeta tiene lo que deja terminado esa capa, con la misma estructura que `proyecto/`. Las carpetas `.agents` empiezan con punto: en Mac y Linux están ocultas, por eso conviene copiar con la terminal.

| Carpeta | Qué trae |
|---------|----------|
| `capa1/` | `AGENTS.md` con reglas, `datos/esquema.md` y la skill `disenar-esquema` |
| `capa2/` | El subagente `revisor-seguridad` y `js/reglas.js` con las reglas de la capa 2 |
| `capa3/` | `AGENTS.md` con estilo, la skill `nueva-funcion`, Context7 (`mcp_config.json`) y `js/reglas.js` con `esTarde` |
| `capa4/` | `DESIGN.md` de ejemplo y la skill `nueva-pantalla` |
| `ensamble/` | El subagente `probador` y la skill `entregar-funcion` |
| `opencode/` | Lo mismo para el plan B con OpenCode |

## ¿Te atrasaste?

Copia **todas las capas anteriores** a la que vas a empezar, en orden. Desde la carpeta del repositorio:

**Mac o Linux:**

```bash
cp -R kit/capa1/. proyecto/
cp -R kit/capa2/. proyecto/
```

**Windows (PowerShell):**

```powershell
Copy-Item -Recurse -Force kit\capa1\* proyecto\
Copy-Item -Recurse -Force kit\capa2\* proyecto\
```

Ese ejemplo te deja listo para empezar la capa 3. Agrega `capa3`, `capa4` o `ensamble` según dónde vayas.

> Copiar reemplaza los archivos que tengan el mismo nombre, como tu `AGENTS.md`. Si quieres conservar el tuyo, cópialo aparte antes.

Si Antigravity ya estaba abierto, inicia una conversación nueva para que lea los cambios.
