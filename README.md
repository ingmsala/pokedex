# Pokedex

![Logo](https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png)


## Introducción

Este proyecto tiene como objetivo mostrar los Pokemons con sus respectivas características, además de poder filtrarlos por tipo y buscarlos por nombre. Haciendo click en cada uno de ellos, se puede ver su detalle. Además, los resultados se encuentran pagindos.

## Requerimientos frontend:

✔️ Crear una página principal que muestre una lista de Pokémon, con al menos los nombres, estadísticas y tipos.

✔️ Permitir a los usuarios hacer clic en un Pokémon para ver detalles adicionales.

✔️ Implementar una función de búsqueda para encontrar Pokémon por nombre o tipo.

✔️ Utilizar SWR (Stale-While-Revalidate) para manejar las solicitudes a la API de Pokémon.

✔️ Agregar paginación a la lista de Pokémon para mostrar solo un número limitado de Pokémon por página.

✔️ Permitir a los usuarios cambiar entre un tema claro y oscuro.


## Requerimientos backend:


✔️ Crear un servidor Express que sirva la aplicación React y actúe como un BFF.

✔️ Implementar endpoints en el backend para proporcionar al frontend únicamente la información necesaria de la API de pokeapi.co, evitando enviar datos innecesarios.

✔️ Manejar las solicitudes de búsqueda y filtrar los resultados en el backend antes de enviarlos al frontend.

✔️ Implementar pruebas unitarias.

✔️ Documentar los endpoints del backend con Swagger.


## Requisitos

Para poder ejecutar este proyecto en su máquina local, necesitará tener instalado lo siguiente:

- Node.js (https://nodejs.org) - versión 18.7 o superior
- Gestor de paquetes npm (viene con Node.js)

## Instalación

Siga estos pasos para configurar el proyecto en su entorno local

1. Clone el repositorio desde GitHub:
```bash
  git clone https://github.com/ingmsala/pokedex.git
```
2. Navegue al directorio del proyecto e ingrese al directorio del backend:
```bash
  cd backend
```
3. Instale las dependencias del proyecto:
```bash
  npm install
```
4. Cree un archivo llamado `.env` en la raiz de la carpeta backend con las siguientes variables de entorno:
```js
PORT=3000
FRONTEND_URL=http://localhost:3001 (URL del frontend) 
NODE_ENV='dev'
```
5. Navegue al directorio del proyecto e ingrese al directorio del frontend:
```bash
  cd frontend
```
6. Instale las dependencias del proyecto:
```bash
  npm install
```
7. Cree un archivo llamado `.env.local` en la raiz de la carpeta frontend con las siguientes variables de entorno:
```js
NEXT_PUBLIC_API_URL=http://localhost
NEXT_PUBLIC_API_PORT=3000
```

## Uso

Una vez que haya instalado todas las dependencias, puede iniciar el servidor de desarrollo local utilizando el siguiente comando para el backend:
```bash
npm run dev
```
Y el siguiente comando para el frontend:
```bash
npm run dev
```

## Testing

Para ejecutar las pruebas unitarias, ejecute el siguiente comando en el directorio backend:
```bash
npm run test
```

## Documentación de la API

Para ver la documentación de la API, ingresar a la siguiente URL:
```bash
http://localhost:3000/docs (URL del backend)
```
