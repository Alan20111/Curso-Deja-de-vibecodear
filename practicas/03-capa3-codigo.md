# Capa 3 · Código con tu estilo

**La idea:** la IA no programa bien ni mal: programa como le enseñas. La misma función pedida en tres conversaciones sale con tres estilos.

Piezas que usas: una **skill** (`nueva-funcion`, tu forma de agregar funciones) y un **MCP** (tus contactos: Context7, para leer documentación actual).

## Trabajo · Tu turno 3

### 1. Llena tu estilo en `AGENTS.md`

Llena los 3 huecos ✏️ de **Estilo**. Ideas: idioma y formato de los nombres, tamaño máximo de una función, `textContent` en vez de `innerHTML`.

### 2. Activa la skill `nueva-funcion`

```
Copia plantillas/skills/nueva-funcion a .agents/skills/nueva-funcion
```

Llena el paso ✏️ con una regla de tu estilo.

### 3. Conecta Context7

```
Copia plantillas/mcp_config.json a .agents/mcp_config.json
```

O desde la app: **Customizations → Installed → Add MCP Server (+)** y busca Context7.

### 4. Pide: marca las entregas tarde

```
/nueva-funcion completa esTarde en js/reglas.js; usa context7 para revisar la documentación de MDN sobre fechas en JavaScript
```

## Comprobación

- En la conversación aparece la llamada a Context7, y te pidió permiso antes.
- En `index.html`, como alumno, las entregas después de la fecha dicen "entregada tarde".
- `pruebas.html` tiene una prueba nueva en verde.
- Intercambia con tu pareja: ¿adivinas sus reglas de estilo?

## Seguridad con MCP

Un MCP puede leer o borrar cosas reales. Revisa cada permiso, nunca pegues claves en el chat y no actives MCPs "por si acaso".
