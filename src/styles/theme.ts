// src/styles/theme.ts
import { createTheme } from '@mui/material/styles'

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary:   { main: '#3f51b5' },     // a bit deeper blue
    secondary: { main: '#ff4081' },
    background: {
      default: '#f4f6f8',
      paper:   '#ffffff',
    },
    grey: {
      50:  '#fafbfd',
      100: '#f4f6f8',
      200: '#e3e5e8',
    }
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    h1: { fontSize: '3rem', fontWeight: 700, letterSpacing: '-1px' },
    h2: { fontSize: '2.25rem', fontWeight: 600, letterSpacing: '-0.5px' },
    h5: { fontSize: '1.25rem', fontWeight: 600 },
    body1: { fontSize: '1rem', lineHeight: 1.6 }
  },
  components: {
    MuiCard: {
      defaultProps: { elevation: 3 },
      styleOverrides: {
        root: {
          borderRadius: 12,
          transition: 'transform 0.3s, box-shadow 0.3s',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 16px 30px rgba(0,0,0,0.12)'
          }
        }
      }
    }
  }
})

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary:   { main: '#90caf9' },
    secondary: { main: '#f48fb1' },
    background: {
      default: '#121212',
      paper:   '#1e1e1e'
    }
  },
  typography: lightTheme.typography,
  components: lightTheme.components
})

// default export for your main.tsx
export default lightTheme
