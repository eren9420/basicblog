// src/styles/theme.ts
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Temel bir tema oluşturun
const theme = createTheme({
  palette: {
    mode: 'light', // 'light' veya 'dark' olabilir
    primary: {
      main: '#1976d2', // Örnek mavi renk
    },
    secondary: {
      main: '#dc004e', // Örnek pembe renk
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#f4f6f8', // Açık tema için arka plan rengi
      paper: '#ffffff',   // Kartlar, menüler vb. için kağıt rengi
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontSize: '2.5rem', fontWeight: 500 },
    h2: { fontSize: '2rem', fontWeight: 500 },
    // ... diğer tipografi ayarları
  },
  // Diğer tema özelleştirmeleri (spacing, breakpoints, components defaults vb.)
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
        main: '#90caf9', // Koyu tema için mavi
    },
    secondary: {
        main: '#f48fb1', // Koyu tema için pembe
    },
    error: {
        main: red.A400,
    },
    background: {
        default: '#121212', // Koyu tema arka plan
        paper: '#1e1e1e',    // Koyu tema kağıt
    },
    text: {
        primary: '#ffffff',
        secondary: 'rgba(255, 255, 255, 0.7)',
    }
  },
   typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontSize: '2.5rem', fontWeight: 500 },
    h2: { fontSize: '2rem', fontWeight: 500 },
  },
});


export default theme; // Varsayılan olarak açık temayı dışa aktar