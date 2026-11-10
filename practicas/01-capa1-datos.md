# Capa 1 · Datos

**La idea:** todo sale de cómo modelaste los datos. Si el modelo está mal, la IA solo lo construye más rápido.

Los datos de Classroom viven en el `localStorage`: cada colección (usuarios, tareas, entregas) es una lista de objetos en JSON. El **esquema** es el plano de esos datos: qué campos tiene cada colección, de qué tipo y con qué reglas.

Piezas que usas: **instrucciones** (`AGENTS.md`, el reglamento del salón) y una **skill** (tu formulario).

## Trabajo · Tu turno 1

### 1. Pídele el esquema, sin reglas

```
Diseña el esquema de datos para un gestor de tareas de un salón de clases en la carpeta intento-sin-reglas/
```

Compara con quien tengas al lado: ¿cómo guardó la fecha? ¿Un alumno puede entregar dos veces? Nadie le dijo las reglas, así que **adivinó**. Es tu "antes".

### 2. Llena las reglas de `AGENTS.md`

`AGENTS.md` ya está escrito. Solo llena los 5 huecos ✏️ de **Reglas de negocio**. Comprueba en una conversación nueva: `¿Qué reglas tienes para este proyecto?`

### 3. Activa la skill `disenar-esquema`

```
Copia plantillas/skills/disenar-esquema a .agents/skills/disenar-esquema
```

Abre el `SKILL.md` y llena el hueco ✏️ de la **descripción**: qué hace y cuándo usarla. Es lo único que el agente lee para decidir si la usa.

### 4. Pide: completa el esquema

En una conversación nueva, **sin nombrar la skill**:

```
Completa el esquema de los datos
```

Debe cargar la skill sola y llenar la columna **Regla** de `datos/esquema.md`.

## Comprobación

- `datos/esquema.md` dice que la fecha va en `AAAA-MM-DD`, que la calificación va de 0 a 100 y que no puede haber dos entregas del mismo alumno a la misma tarea.
- La conversación muestra que leyó `SKILL.md`.

## Demo del instructor: MCP de Chrome DevTools

El agente **abre la app y lee el `localStorage` real**, y encuentra los datos que rompen tus reglas en vez de suponerlos.

**¿Te atrasaste?** Mira [kit/README.md](../kit/README.md).
