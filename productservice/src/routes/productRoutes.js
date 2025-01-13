const express = require('express');
const { createProduct, getProducts } = require('../controllers/productController');

const router = express.Router();

// Ruta para crear un producto
router.post('/products', createProduct);

// Ruta para obtener productos
router.get('/products', getProducts);

module.exports = router;
