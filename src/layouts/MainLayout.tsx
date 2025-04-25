// src/layouts/MainLayout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

const MainLayout: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Container component="main" sx={{ mt: 4, mb: 4, flexGrow: 1 }}>
        <Outlet /> {/* İçerik (HomePage, PostPage vb.) burada render edilecek */}
      </Container>
      <Footer />
    </Box>
  );
};

export default MainLayout;