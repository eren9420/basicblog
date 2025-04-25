// src/components/Layout/Header.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'; // React Router Link'i

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={RouterLink} to="/" sx={{ flexGrow: 1, color: 'inherit', textDecoration: 'none' }}>
          Fizikçinin Blogu
        </Typography>
        <Box>
          <Button color="inherit" component={RouterLink} to="/">
            Ana Sayfa
          </Button>
          <Button color="inherit" component={RouterLink} to="/about">
            Hakkında
          </Button>
          {/* İleride eklenebilecekler: Kategoriler, Arama, Tema Değiştirici */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;