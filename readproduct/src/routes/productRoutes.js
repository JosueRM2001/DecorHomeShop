import { getAllProducts, getProductById } from '../controllers/productController.js';
import express from 'express';

const router = express.Router();

// Ruta para obtener todos los productos
router.get('/products', getAllProducts);

// Ruta para obtener un producto por ID
router.get('/products/:id', getProductById);

export default router;

