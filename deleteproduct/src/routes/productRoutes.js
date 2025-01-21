import express from 'express';
import { deleteProduct } from '../controllers/productController.js';

const router = express.Router();

// Ruta para eliminar un producto por ID
router.delete('/products/:id', deleteProduct);

export default router;
