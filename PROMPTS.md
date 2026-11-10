# Prompts del taller

Guía para completar todo el taller copiando y pegando, en orden.

## Antes de empezar

1. En Antigravity, abajo donde dice **No Project**, abre la carpeta `proyecto/` (no la carpeta completa del repositorio).
2. Escoge el modelo **Gemini 3.8 Flash**.
3. Pega cada prompt en el chat, en orden.

**Conversación nueva** significa dar clic en **New Conversation** antes de pegar el prompt.
Si el agente te muestra un plan y se detiene, contesta `Sí, adelante`.

---

## Preparación

**Prompt 1** · Conversación nueva

```
hola, ¿qué archivos ves en este proyecto?
```

**Prompt 2**

```
Abre index.html en el navegador
```

---

## Capa 1 · Datos

**Prompt 3** · Conversación nueva

```
Diseña el esquema de datos para un gestor de tareas de un salón de clases en la carpeta intento-sin-reglas/. No leas ningún archivo del proyecto: diséñalo desde cero.
```

**Prompt 4**

```
En AGENTS.md, en la sección "Reglas de negocio", reemplaza los 5 renglones por llenar con estas reglas, sin cambiar nada más del archivo:
- Solo un maestro crea tareas y califica.
- Una entrega por alumno por tarea.
- La calificación es un entero de 0 a 100.
- Una entrega después de la fecha límite se guarda, pero marcada como tarde.
- Un alumno solo ve sus propias entregas.
```

**Prompt 5** · Conversación nueva

```
¿Qué reglas tienes para este proyecto?
```

**Prompt 6**

```
Copia plantillas/skills/disenar-esquema a .agents/skills/disenar-esquema. Después, en .agents/skills/disenar-esquema/SKILL.md, cambia solo la línea "description:" por esta:
description: Diseña o corrige el esquema de datos de Classroom en datos/esquema.md respetando AGENTS.md. Úsala cuando pidan colecciones, campos, tipos, restricciones o cambios a los datos.
```

**Prompt 7** · Conversación nueva

```
Completa el esquema de los datos
```

---

## Capa 2 · Lógica de negocio

**Prompt 8**

```
Copia plantillas/agents/revisor-seguridad.md a .agents/agents/revisor-seguridad.md. Después, en ese archivo nuevo, cambia solo la línea "description:" por esta:
description: Revisa que las reglas de negocio se validen en js/reglas.js antes de guardar y que un alumno no pueda ver ni cambiar datos de otro. Úsalo después de crear o cambiar código.
```

**Prompt 9** · Conversación nueva · *(Recomendado usar Gemini 3.8 Flash en nivel High)*

```
Usa el subagente revisor-seguridad para revisar js/reglas.js y js/app.js
```

**Prompt 10**

```
Completa en js/reglas.js las reglas que reportó el revisor: puedeCrearTarea, validarTarea, puedeCalificar, validarCalificacion y entregasVisibles
```

**Prompt 11**

```
Abre pruebas.html en el navegador
```

---

## Capa 3 · Código con tu estilo

**Prompt 12**

```
En AGENTS.md, en la sección "Estilo", reemplaza los 3 renglones por llenar con estas reglas, sin cambiar nada más del archivo:
- Nombres en español y camelCase (fechaLimite, entregarTarea).
- Funciones de máximo 20 líneas, con un solo propósito.
- Texto que escribe el usuario: siempre con textContent, nunca con innerHTML.
```

**Prompt 13**

```
Copia plantillas/skills/nueva-funcion a .agents/skills/nueva-funcion. Después, en .agents/skills/nueva-funcion/SKILL.md, reemplaza el paso 6 (el que está por llenar) por este:
6. Respeta la sección "Estilo" de AGENTS.md: nombres en español y camelCase, funciones de máximo 20 líneas y textContent en vez de innerHTML.
```

**Prompt 14** · Conversación nueva

```
/nueva-funcion completa esTarde en js/reglas.js
```

**Prompt 15**

```
Abre pruebas.html en el navegador
```

---

## Capa 4 · Diseño

**Prompt 16**

```
Copia plantillas/DESIGN.md a DESIGN.md. Después copia plantillas/skills/nueva-pantalla a .agents/skills/nueva-pantalla y, en .agents/skills/nueva-pantalla/SKILL.md, cambia solo la línea "description:" por esta:
description: Rediseña o crea una pantalla de Classroom siguiendo DESIGN.md. Úsala cuando pidan una vista, una página, una pantalla o un cambio visual.
```

**Prompt 17** · Conversación nueva

```
/nueva-pantalla aplica DESIGN.md a toda la app, empezando por "Mis tareas" del alumno
```

**Prompt 18** · *(Recomendado usar Gemini 3.8 Flash en nivel High)*

Abre Chrome 144 o más nuevo, entra a `chrome://inspect/#remote-debugging` y activa «Allow remote debugging for this browser instance».

```
/browser abre index.html, carga los datos de ejemplo, entra como Ana y compara la pantalla con DESIGN.md
```

---

## Ensamble · Reto final

**Prompt 19**

```
Copia plantillas/agents/probador.md a .agents/agents/probador.md y plantillas/skills/entregar-funcion a .agents/skills/entregar-funcion
```

**Prompt 20** · Conversación nueva · *(Recomendado usar Gemini 3.8 Flash en nivel High)*

```
/entregar-funcion entregar una tarea
```

**Prompt 21**

```
Abre pruebas.html y luego index.html en el navegador
```

---

¿Te atrasaste? En la carpeta `kit/` está resuelta cada capa. Las instrucciones están en [kit/README.md](kit/README.md).
