const db = require('../config/db');

// Crear un producto
exports.createProduct = async (req, res) => {
    const { name, description, price } = req.body;

    if (!name || typeof price !== 'number' || price <= 0) {
        return res.status(400).json({ error: 'Invalid input. Name and a valid price are required.' });
    }

    try {
        const [result] = await db.query(
            'INSERT INTO products (name, description, price) VALUES (?, ?, ?)',
            [name, description || null, price]
        );
        res.status(201).json({ message: 'Product created', productId: result.insertId });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to create product' });
    }
};

// Obtener todos los productos
exports.getProducts = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM products');
        res.status(200).json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch products' });
    }
};
