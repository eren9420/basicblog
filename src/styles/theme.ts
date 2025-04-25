// src/styles/theme.ts
import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary:   { main: '#556cd6' },
    secondary: { main: '#19857b' },
    background: {
      default: '#f5f7fa',
      paper:   '#ffffff'
    }
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    h1: { fontSize: '3rem', fontWeight: 700 },
    h2: { fontSize: '2.25rem', fontWeight: 600 },
    h5: { fontWeight: 600 }
  }
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary:   { main: '#90caf9' },
    secondary: { main: '#f48fb1' },
    background: {
      default: '#121212',
      paper:   '#1d1d1d'
    }
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    h1: { fontSize: '3rem', fontWeight: 700 },
    h2: { fontSize: '2.25rem', fontWeight: 600 },
    h5: { fontWeight: 600 }
  }
});

// ↓ Varsayılan olarak lightTheme’i export et
export default lightTheme;
