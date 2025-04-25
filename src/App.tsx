import { useState, useMemo } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from './styles/theme';
import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { BlogProvider } from './contexts/BlogContext';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PostPage from './pages/PostPage';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/posts/:slug', element: <PostPage /> },
  { path: '*', element: <NotFoundPage /> }
]);

export default function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const theme = useMemo(() => (mode === 'light' ? lightTheme : darkTheme), [mode]);
  const toggleColorMode = () => setMode(prev => prev === 'light' ? 'dark' : 'light');

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BlogProvider>
        <Header toggleColorMode={toggleColorMode} />
        <RouterProvider router={router} />
        <Footer />
      </BlogProvider>
    </ThemeProvider>
  );
}