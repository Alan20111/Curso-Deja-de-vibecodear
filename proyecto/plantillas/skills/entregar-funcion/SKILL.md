---
name: entregar-funcion
description: Orquesta la construcción completa de una función nueva de Classroom con plan, construcción, revisión en paralelo por subagentes y corrección. Úsala cuando pidan implementar una función de punta a punta.
---

# Entregar una función de punta a punta

Tú eres el jefe de equipo: planeas, repartes y juntas. No te saltes pasos.

## 1. Planear
- Lista los pasos, los archivos que vas a tocar y las reglas de `AGENTS.md` que aplican.
- Espera mi aprobación antes de seguir.

## 2. Construir
- Sigue la skill `nueva-funcion`: completa en `js/reglas.js` las funciones que hagan falta (para entregar: `puedeEntregar` y `esTarde`).
- Si la función cambia los datos, sigue antes la skill `disenar-esquema`.
- Si cambia cómo se ve, sigue la skill `nueva-pantalla`.

## 3. Revisar en paralelo
- Lanza al mismo tiempo los subagentes `revisor-seguridad` y `probador`.
- A cada uno dale solo la lista de archivos que cambiaste y la regla que debe cumplirse.

## 4. Corregir
- Si alguno reporta un problema, corrígelo y vuelve a lanzar solo a ese subagente.
- Máximo 2 vueltas. Si sigue fallando, detente y explícame qué pasa.

## 5. Resumir
Termina con una tabla y recuérdame abrir `pruebas.html`:

| Quién | Qué hizo | Resultado |
|-------|----------|-----------|
