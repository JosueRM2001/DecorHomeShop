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

