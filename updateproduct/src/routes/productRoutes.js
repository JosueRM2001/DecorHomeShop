import express from 'express';
import { updateProduct } from '../controllers/productController.js';

const router = express.Router();

// Ruta para actualizar un producto por su ID
router.put('/products/:id', updateProduct);

export default router;

