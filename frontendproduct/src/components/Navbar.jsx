import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#1976d2' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            My Shop
          </Link>
        </Typography>
        <Box>
          <Button color="inherit">
            <Link to="/products" style={{ textDecoration: 'none', color: 'white' }}>
              Products
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/add-product" style={{ textDecoration: 'none', color: 'white' }}>
              Add Product
            </Link>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
