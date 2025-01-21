import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  // Función para obtener productos
  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  // Función para eliminar un producto
  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:3003/api/products/${productId}`);
      setProducts(products.filter(product => product.id !== productId)); // Actualiza la lista de productos
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Product List
      </Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={product.image_url || "https://via.placeholder.com/140"}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body2">Price: ${product.price}</Typography>
                <Typography variant="body2">Category: {product.category}</Typography>
                <Typography variant="body2">Description: {product.description}</Typography>

                {/* Botón para editar el producto */}
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to={`/update-product/${product.id}`}
                  style={{ marginTop: '10px', marginRight: '5px' }}
                >
                  Edit
                </Button>

                {/* Botón para eliminar el producto */}
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => deleteProduct(product.id)}
                  style={{ marginTop: '10px' }}
                >
                  Delete
                </Button>

              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;


