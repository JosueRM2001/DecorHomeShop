import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';

const Home = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: 'url(https://www.bycomercial.com/wp-content/uploads/2020/05/blog-BYC-106.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'Black',
        padding: 3,
      }}
    >
      <Container>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
          Welcome to My Shop
        </Typography>
        <Typography variant="h6" sx={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
          Manage your products easily with this app.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          href="/products"
          sx={{ marginTop: 3, fontSize: '1.2rem' }}
        >
          View Products
        </Button>
      </Container>
    </Box>
  );
};

export default Home;

