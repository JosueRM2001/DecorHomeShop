import pool from '../config/db.js';

// Obtener todos los productos
export const getAllProducts = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM products');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un producto por ID
export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query('SELECT * FROM products WHERE id = ?', [id]);
    if (rows.length === 0) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear un producto
export const createProduct = async (req, res) => {
  try {
    const { name, price, description, category, image_url } = req.body; // Añadido image_url
    const [result] = await pool.query(
      'INSERT INTO products (name, price, description, category, image_url) VALUES (?, ?, ?, ?, ?)',
      [name, price, description, category, image_url] // Incluimos image_url en los valores
    );
    res.status(201).json({ id: result.insertId, name, price, description, category, image_url });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un producto
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, description, category, image_url } = req.body; // Añadido image_url
    const [result] = await pool.query(
      'UPDATE products SET name = ?, price = ?, description = ?, category = ?, image_url = ? WHERE id = ?',
      [name, price, description, category, image_url, id] // Incluimos image_url en la consulta
    );
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json({ message: 'Producto actualizado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar un producto
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await pool.query('DELETE FROM products WHERE id = ?', [id]);
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json({ message: 'Producto eliminado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

