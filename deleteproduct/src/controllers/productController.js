import pool from '../config/db.js';

// Controlador para eliminar un producto por ID
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    // Verificar si el producto existe
    const [existingProduct] = await pool.query('SELECT * FROM products WHERE id = ?', [id]);

    if (existingProduct.length === 0) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    // Eliminar el producto
    await pool.query('DELETE FROM products WHERE id = ?', [id]);

    res.status(200).json({ message: 'Producto eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error eliminando el producto', error: error.message });
  }
};

