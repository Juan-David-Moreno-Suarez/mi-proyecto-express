const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para parsear JSON en el body de las peticiones
app.use(express.json());

// Endpoint Hello World
app.get('/hola', (req, res) => {

res.json({ mensaje: '¡Hola Mundo desde Express!' });

});

// Iniciar el servidor
app.listen(PORT, () => {

console.log(`Servidor corriendo en http://localhost:${PORT}`);

});