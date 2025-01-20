import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography } from '@mui/material';
import axios from 'axios';

const UpdateProduct = () => {
  const { id } = useParams(); // Obtener el ID del producto de la URL
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
    image_url: '',
  });

  useEffect(() => {
    // Obtener datos del producto a actualizar
    axios.get(`http://localhost:3001/api/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error('Error al obtener el producto:', error));
  }, [id]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3001/api/products/${id}`, product)
      .then(() => {
        alert('Producto actualizado con éxito');
        navigate('/products'); // Redirige a la lista de productos
      })
      .catch((error) => console.error('Error al actualizar el producto:', error));
  };

  return (
    <Container>
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
        />
        <Button type="submit" variant="contained" color="primary">
          Actualizar Producto
        </Button>
      </form>
    </Container>
  );
};

export default UpdateProduct;
