# Galería Dinámica de Imágenes

Proyecto sencillo que muestra una galería con imágenes obtenidas desde varias APIs públicas.  
Las imágenes se actualizan automáticamente cada 10 segundos y también pueden recargarse manualmente.

## Tecnologías
- HTML
- TailwindCSS (CDN)
- JavaScript (ES Modules)

## APIs utilizadas
- Picsum Photos
- LoremFlickr (cats)
- Random Fox
- Random Duck

## Estructura del proyecto
```
index.html
js/
 ├── api-data.js
 ├── gallery.js
 ├── table.js
 └── main.js
```

## Cómo ejecutar
Debes usar un servidor local (los módulos ES no funcionan con file://):

### Opción 1: Live Server (VSCode)
Clic derecho → **Open with Live Server**

### Opción 2: Python
```
python -m http.server 3000
```

Luego visita:
http://localhost:3000

## Licencia
Libre uso para fines educativos.
