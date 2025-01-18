import pool from '../config/db.js';

export const getAllProducts = async (req, res) => {
  try {
    console.log('Intentando obtener productos de la base de datos...');
    const [rows] = await pool.query('SELECT * FROM products');
    res.json(rows);
  } catch (error) {
    console.error('Error al obtener los productos:', error.message);
    res.status(500).json({
      error: 'Error al obtener los productos',
      details: error.message,
    });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query('SELECT * FROM products WHERE id = ?', [id]);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.json(rows[0]);
  } catch (error) {
    console.error('Error al obtener el producto:', error.message);
    res.status(500).json({
      error: 'Error al obtener el producto',
      details: error.message,
    });
  }
};

