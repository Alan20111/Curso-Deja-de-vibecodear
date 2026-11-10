# DESIGN.md · Classroom (ejemplo)

Estilo sobrio de herramienta escolar: fondo claro, un solo acento, mucho aire.
Si eliges un estilo en styles.refero.design, reemplaza este archivo por el suyo.
En el código, cada token es una variable CSS en `css/estilos.css` (por ejemplo `--color-acento`).

## Colores
| Token | Valor | Uso |
|-------|-------|-----|
| fondo | #F7F7F5 | Fondo de la página |
| superficie | #FFFFFF | Tarjetas y tablas |
| texto | #1A1A1A | Texto principal |
| texto-suave | #6B6B6B | Fechas, ayudas, etiquetas |
| borde | #E4E4E0 | Bordes de tarjetas y separadores |
| acento | #2F5BEA | Botones, enlaces y elemento activo |
| peligro | #C2410C | Entregas tarde o rechazadas |
| exito | #15803D | Entregas a tiempo |

## Tipografía
- Familia: Inter, con system-ui como respaldo.
- Tamaños: 14 px (etiquetas), 16 px (texto), 20 px (subtítulos), 28 px (títulos).
- Pesos: 400 para texto y 600 para títulos y botones.

## Espaciado
- Base de 8 px: 8, 16, 24, 32, 48.
- Ancho máximo del contenido: 960 px, centrado.

## Componentes
- **Tarjeta:** fondo superficie, borde 1 px, radio 12 px, padding 24 px.
- **Botón principal:** fondo acento, texto blanco, radio 8 px, padding 8 × 16 px.
- **Etiqueta de estado:** texto 14 px, radio 999 px, fondo del color de estado al 12 % y texto del color de estado.
- **Tabla:** encabezado en texto-suave 14 px; filas separadas por una línea de borde.

## Reglas
- Un solo color de acento por pantalla.
- Nada de sombras fuertes ni degradados.
- Las fechas siempre en formato "20 nov 2026".
