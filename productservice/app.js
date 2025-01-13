require('dotenv').config();
const express = require('express');
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/api', productRoutes);

// Middleware para manejar errores genéricos
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ error: 'Something went wrong!' });
});
// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});