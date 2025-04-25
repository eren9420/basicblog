// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './styles/theme'; // Varsayılan temayı import et
// import { ThemeContextProvider } from './contexts/ThemeContext'; // Eğer dinamik tema değişimi eklerseniz

// KaTeX CSS dosyası (matematik formülleri için)
import 'katex/dist/katex.min.css';
// Gerekirse global CSS
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Dinamik tema için Context Provider kullanabilirsiniz */}
    {/* <ThemeContextProvider> */}
      <ThemeProvider theme={theme}> {/* Başlangıç temasını sağla */}
        {/* CssBaseline MUI'nin temel stillerini ve normalleştirmeyi uygular */}
        <CssBaseline />
        <App />
      </ThemeProvider>
    {/* </ThemeContextProvider> */}
  </React.StrictMode>,
);