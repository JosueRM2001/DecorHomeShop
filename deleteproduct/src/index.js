import express from 'express';
import cors from 'cors';
import productRoutes from './routes/productRoutes.js';

const app = express();
app.use(cors());
app.use(express.json()); // Middleware para procesar JSON

// Definir las rutas con el prefijo /api
app.use('/api', productRoutes);

// Middleware para manejar rutas no encontradas
app.use((req, res) => {
    res.status(404).json({ error: 'Ruta no encontrada' });
});

// Definir el puerto y arrancar el servidor
const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
    console.log(`Servidor de Delete Product corriendo en el puerto ${PORT}`);
});
