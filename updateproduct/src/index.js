import express from 'express';
import cors from 'cors';
import productRoutes from './routes/productRoutes.js';

const app = express();
app.use(cors());
app.use(express.json()); // Importante para manejar JSON

// Definir las rutas de productos con prefijo /api
app.use('/api', productRoutes);

// Middleware para rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Servidor de Update Product corriendo en el puerto ${PORT}`);
});

