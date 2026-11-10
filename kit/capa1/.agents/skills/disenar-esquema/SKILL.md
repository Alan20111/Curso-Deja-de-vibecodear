---
name: disenar-esquema
description: Diseña o corrige el esquema de datos de Classroom en datos/esquema.md respetando AGENTS.md. Úsala cuando pidan colecciones, campos, tipos, restricciones o cambios a los datos.
---

# Diseñar el esquema

1. Lee `AGENTS.md` antes de escribir nada.
2. Trabaja sobre `datos/esquema.md`: no cambies los campos, llena la columna **Regla**.
3. Las fechas van en formato ISO (`AAAA-MM-DD`) para poder compararlas; nada de "20 de noviembre".
4. Para cada regla de negocio, agrega una restricción: valores permitidos, rangos (calificación de 0 a 100) y combinaciones que no se pueden repetir (una entrega por alumno por tarea).
5. Llena "Restricciones entre colecciones".
6. Al final, lista cada restricción y la regla de `AGENTS.md` que cubre.
