import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/products')
      .then((response) => setProducts(response.data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Product List
      </Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              {/* Mostrar imagen del producto */}
              <CardMedia
                component="img"
                height="140"
                image={product.image_url || "https://via.placeholder.com/140"} // Imagen por defecto si no hay URL
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body2">Price: ${product.price}</Typography>
                {/* Mostrar categoría si existe */}
                {product.category && (
                  <Typography variant="body2" color="textSecondary">
                    Category: {product.category}
                  </Typography>
                )}
                {/* Mostrar descripción si existe */}
                {product.description && (
                  <Typography variant="body2" color="textSecondary">
                    Description: {product.description}
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
