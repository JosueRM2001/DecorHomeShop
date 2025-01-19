import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3001/api/products')
      .then((response) => {
        console.log('Datos recibidos del microservicio:', response.data); // Verifica si llegan los datos
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        alert('Hubo un error al cargar los productos.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Typography variant="h6">Cargando productos...</Typography>;
  }

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        Product List
      </Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card sx={{ boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="140"
                image={product.image_url || "https://via.placeholder.com/140"}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {product.name}
                </Typography>
                <Typography variant="body2">
                  Price: ${product.price}
                </Typography>
                {product.category && (
                  <Typography variant="body2" color="textSecondary">
                    Category: {product.category}
                  </Typography>
                )}
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

