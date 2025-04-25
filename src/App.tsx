// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}> {/* Ana layout'u kullan */}
          <Route index element={<HomePage />} /> {/* Ana sayfa */}
          <Route path="post/:slug" element={<PostPage />} /> {/* Tekil yazı sayfası */}
          <Route path="about" element={<AboutPage />} /> {/* Hakkında sayfası */}
          <Route path="*" element={<NotFoundPage />} /> {/* Bulunamayan sayfalar */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;