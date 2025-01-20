import pool from '../config/db.js';

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, description, category, image_url } = req.body;

  if (!name || !price) {
    return res.status(400).json({ error: 'Faltan datos requeridos' });
  }

  try {
    const [result] = await pool.query(
      'UPDATE products SET name = ?, price = ?, description = ?, category = ?, image_url = ? WHERE id = ?',
      [name, price, description, category, image_url, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    res.json({ message: 'Producto actualizado correctamente' });
  } catch (error) {
    console.error('Error al actualizar el producto:', error);
    res.status(500).json({ error: 'Error al actualizar el producto' });
  }
};

