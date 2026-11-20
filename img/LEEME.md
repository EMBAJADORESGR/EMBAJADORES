# Galería rotativa del inicio (programa.html)

Las fotos del collage del inicio rotan solas cada ~5 segundos (3 posiciones, escalonadas, con fundido).

## Cómo cargar o cambiar fotos (sin tocar código)
1. Subir la imagen a esta carpeta: `img/galeria/`
2. Agregar una línea en `galeria.json`:
   `{ "archivo": "nombre-del-archivo.jpg", "titulo": "Texto que aparece al pasar el mouse" }`
3. Para sacar una foto: borrar su línea del JSON (y el archivo si ya no se usa).

Hace falta tener al menos 4 fotos para que roten (hoy se muestran 3 a la vez y las otras van entrando).

## Recomendaciones de imagen
- Formato JPG o WebP, ancho 1400 px, menos de 300 KB cada una (optimizar con squoosh.app).
- Horizontales, el auto centrado y sin textos ni logos de flyers encima.
- Usar solo imágenes de uso autorizado por la marca.

## Para Sistemas
- Ruta usada por la página: `../img/galeria/` relativa a `/pages/programa.html` (o sea `/img/galeria/` en la raíz del sitio).
- `galeria.json` se pide con `fetch` y `cache: no-cache`; el servidor debe servirlo como `application/json`.
- Si el JSON falta o está mal, la página muestra las 3 fotos iniciales fijas, sin romperse.
- Tiempo de rotación: constante `SEG` (milisegundos) al final de `programa.html`.
- Respeta `prefers-reduced-motion` (no rota) y se pausa con la pestaña oculta.
