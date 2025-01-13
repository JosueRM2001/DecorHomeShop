require('dotenv').config(); // Carga las variables de entorno del archivo .env
const express = require('express');
const productRoutes = require('./routes/productRoutes');

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Rutas principales
app.use('/api/products', productRoutes);

// Ruta base para verificar si el servidor está funcionando
app.get('/', (req, res) => {
    res.status(200).send({ message: 'Welcome to the Product Service API!' });
});

// Middleware para manejar errores (en caso de rutas no encontradas)
app.use((req, res) => {
    res.status(404).send({ error: 'Route not found' });
});

// Inicio del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
