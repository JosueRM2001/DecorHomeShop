import express from 'express';
import cors from 'cors';
import productRoutes from './routes/productRoutes.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api', productRoutes);

// Ruta para manejar errores 404
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

export default app;
