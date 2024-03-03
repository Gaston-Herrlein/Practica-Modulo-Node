# Practica de Node.js & Express & MongoDB

### Enunciado del ejercicio:

Desarrollar el API que se ejecutará en el servidor de un servicio de venta de artículos de segunda mano llamado Nodepop. Hazte a la idea que esta API que vas a construir sería utilizado por otros desarrolladores de iOS o Android.

El servicio mantiene anuncios de compra o venta de artículos y permite buscar como poner filtros por varios criterios, por tanto la API a desarrollar deberá proveer los métodos necesarios para esto.

Operaciones que debe realizar el API a crear:

- Lista de anuncios con posibilidad de paginación. Con filtros por tag, tipo de anuncio (venta o búsqueda),
  rango de precio (precio min. y precio max.) y nombre de artículo (que empiece por el dato buscado)
- Lista de tags existentes
- Creación de anuncio

El site donde se despliegue tendrá, además del API, una página (frontend) que muestre una
lista de anuncios con filtros en su página principal. Será suficiente con una página EJS que muestre la lista de anuncios

## Comenzando

En las variables de entorno deveran espesificarse, por lo menos, dos de ellas

```sh
ATLAS_DB_URI
PORT
```

_ATLAS_DB_URI_ le indicara la URI a la cual conectarse. Y _PORT_ el puerto de entrada

Una vez descargado el proyecto e instalado las dependencias (`npm intall`) se debera limpiar la base de datos y atualizarla con los datos de prueba.

```sh
node init-mongoose.js
```

### WARNING

Este script elimina **TODOS** los datos de la base de datos a la cual se conecte.

Por ultimo se necesita instalar ESlint, con la configuracion airbnb-base, para formatear el proyecto

```sh
npm install --save-dev eslint
npm install --save-dev eslint-config-airbnb-base
npm install --save-dev eslint-plugin-import
```

## Routes

- GET all
  localhost:{PORT}/api/articles
- GET all con filtros
  localhost:{PORT}/api/articles?start=1&limit=3&sort=name&tag=lifestyle
- GET by ID:
  localhost:{PORT}/api/articles/:id
- POST article:
  localhost:{PORT}/api/articles
