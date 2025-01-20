import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button, Container, Typography } from '@mui/material';

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
    image_url: ''
  });

  useEffect(() => {
    axios.get(`http://localhost:3002/api/products/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('Error fetching product:', error);
      });
  }, [id]);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3002/api/products/${id}`, product);
      alert('Producto actualizado correctamente');
      navigate('/products');
    } catch (error) {
      console.error('Error updating product:', error);
      alert('Error al actualizar el producto');
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Actualizar Producto
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
        <TextField
          label="Descripción"
          name="description"
          value={product.description}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Categoría"
          name="category"
          value={product.category}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="URL de Imagen"
          name="image_url"
          value={product.image_url}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          ACTUALIZAR PRODUCTO
        </Button>
      </form>
    </Container>
  );
};

export default UpdateProduct;
