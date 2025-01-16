import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import axios from 'axios';

const AddProductForm = ({ onProductAdded }) => {
  const [product, setProduct] = useState({ name: '', price: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!product.name || !product.price) {
      setError('Todos los campos son obligatorios.');
      return;
    }

    try {
      await axios.post('http://localhost:3000/api/products', product);
      alert('Producto agregado exitosamente!');
      setProduct({ name: '', price: '' }); // Limpia los campos del formulario
      if (onProductAdded) onProductAdded(); // Callback para actualizar la lista de productos
    } catch (err) {
      console.error(err);
      setError('Error al agregar el producto. Inténtalo de nuevo.');
    }
  };

  return (
    <Box sx={{ maxWidth: 400, margin: '0 auto' }}>
      <Typography variant="h5" align="center" gutterBottom>
        Agregar Nuevo Producto
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre del Producto"
          name="name"
          value={product.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Precio"
          name="price"
          type="number"
          value={product.price}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        {error && (
          <Typography color="error" variant="body2" gutterBottom>
            {error}
          </Typography>
        )}
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Agregar Producto
        </Button>
      </form>
    </Box>
  );
};

export default AddProductForm;

