import React from 'react';
import { Container, Typography } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Welcome to My Shop
      </Typography>
      <Typography variant="body1">
        Manage your products easily with this app.
      </Typography>
    </Container>
  );
};

export default Home;
