📚 Biblioteca Backend API

Este es el backend del sistema de gestión de biblioteca, desarrollado con Node.js, Express y MongoDB.
Permite realizar operaciones CRUD sobre libros, así como activar y desactivar su disponibilidad de forma dinámica.

🚀 Tecnologías utilizadas

Node.js (v18 o superior)

Express.js (Framework backend)

MongoDB (Base de datos NoSQL)

Mongoose (ODM para MongoDB)

Nodemon (Recarga automática en desarrollo)

CORS (Habilitar acceso desde el frontend)

⚙️ Instalación y configuración
1. Clonar el repositorio
git clone https://github.com/FaskynClub/Be-Node.js.git
cd Be-Node.js/biblioteca-backend

2. Instalar dependencias
npm install

3. Configurar variables de entorno

Crea un archivo .env en la raíz del proyecto con el siguiente contenido:

PORT=3000
MONGO_URI=mongodb://localhost:27017/biblioteca


Si usas MongoDB Atlas, reemplaza MONGO_URI con tu conexión remota.

4. Ejecutar el servidor en modo desarrollo
npm run dev

5. Ejecutar el servidor en producción
npm start

📂 Estructura del proyecto
📦 biblioteca-backend
 ┣ 📂 models
 ┃ ┗ 📜 Book.model.js
 ┣ 📂 routes
 ┃ ┗ 📜 books.routes.js
 ┣ 📂 controllers
 ┃ ┗ 📜 books.controller.js
 ┣ 📂 config
 ┃ ┗ 📜 database.js
 ┣ 📜 server.js
 ┣ 📜 package.json
 ┣ 📜 .env
 ┗ 📜 README.md

🗃️ Modelo de datos (Book)
{
  title: { type: String, required: true },
  author: { type: String, required: true },
  year: { type: Number, required: true },
  genre: { type: String, required: true },
  available: { type: Boolean, default: true }
}

📌 Endpoints disponibles
1. Crear libro
POST /api/books


Body JSON:

{
  "title": "Cien años de soledad",
  "author": "Gabriel García Márquez",
  "year": 1967,
  "genre": "Novela"
}

2. Listar todos los libros
GET /api/books

3. Obtener libro por ID
GET /api/books/:id

4. Editar libro
PUT /api/books/:id


Body JSON:

{
  "title": "El coronel no tiene quien le escriba",
  "author": "Gabriel García Márquez",
  "year": 1961,
  "genre": "Novela"
}

5. Cambiar disponibilidad
PATCH /api/books/:id/availability


Body JSON:

{
  "available": false
}

6. Eliminar libro (borrado lógico)
DELETE /api/books/:id

🛠️ Comandos útiles en Codespaces
Comando	Descripción
npm install	Instalar dependencias
npm run dev	Ejecutar servidor en modo desarrollo
npm start	Ejecutar servidor en modo producción
git status	Ver estado de los cambios
git add .	Agregar todos los cambios
git commit -m "msg"	Confirmar cambios
git push origin main	Subir cambios a GitHub
🔐 Seguridad

Este proyecto no implementa autenticación por ahora, pero se integrará con el frontend Angular, que incluirá un sistema de login básico.

📄 Licencia

Proyecto de uso personal y académico.
