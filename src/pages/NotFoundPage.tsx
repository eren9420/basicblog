// src/pages/NotFoundPage.tsx
import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <Box sx={{ textAlign: 'center', mt: 8 }}>
      <Typography variant="h1" component="h1" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Sayfa Bulunamadı
      </Typography>
      <Typography color="text.secondary" paragraph>
        Aradığınız sayfa mevcut değil veya taşınmış olabilir.
      </Typography>
      <Button variant="contained" component={RouterLink} to="/">
        Ana Sayfaya Dön
      </Button>
    </Box>
  );
};

export default NotFoundPage;