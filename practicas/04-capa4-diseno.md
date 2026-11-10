# Capa 4 · Diseño con referencias

**La idea:** la misma idea del archivo de reglas, aplicada al diseño. Un `DESIGN.md` le dice al agente los colores, la tipografía, el espaciado y los componentes. Sin él, todas las páginas hechas con IA se parecen.

Piezas que usas: el archivo `DESIGN.md`, la skill `nueva-pantalla` y el subagente `browser`, que viene de fábrica en Antigravity y se usa con `/browser`.

## Trabajo · Tu turno 4

### 1. Elige tu `DESIGN.md`

```
Copia plantillas/DESIGN.md a DESIGN.md
```

¿Quieres otro estilo? Elige uno en [styles.refero.design](https://styles.refero.design) y usa su `DESIGN.md` en su lugar.

### 2. Activa la skill `nueva-pantalla`

```
Copia plantillas/skills/nueva-pantalla a .agents/skills/nueva-pantalla
```

Llena el hueco ✏️ de la **descripción**.

### 3. Pide la pantalla

```
/nueva-pantalla aplica DESIGN.md a toda la app, empezando por "Mis tareas" del alumno
```

La estructura ya existe (tarjetas, listas, formularios y botones): la skill solo cambia las variables de `css/estilos.css` y el estilo.

### 4. Que el subagente browser la compare

Abre Chrome 144 o más nuevo, entra a `chrome://inspect/#remote-debugging` y activa «Allow remote debugging for this browser instance».

```
/browser abre index.html, carga los datos de ejemplo, entra como Ana y compara la pantalla con DESIGN.md
```

Sin Chrome, abre tú `index.html` y compárala.

## Comprobación

- El bloque `:root` de `css/estilos.css` tiene los valores de tu `DESIGN.md`.
- El agente te dijo qué token usó en cada parte.
