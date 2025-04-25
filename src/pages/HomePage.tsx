// src/pages/HomePage.tsx
import React, { useState, useEffect } from 'react';
import { Typography, Box, CircularProgress } from '@mui/material';
import { getAllPostSummaries } from '../lib/posts';
import { PostSummary } from '../types';
import PostCard from '../components/Blog/PostCard';

const HomePage: React.FC = () => {
  const [posts, setPosts] = useState<PostSummary[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const fetchedPosts = getAllPostSummaries();
      setPosts(fetchedPosts);
    } catch (err) {
      console.error("Error fetching posts:", err);
      setError("Yazılar yüklenirken bir hata oluştu.");
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}><CircularProgress /></Box>;
  }

  if (error) {
    return <Typography color="error" align="center">{error}</Typography>;
  }

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Son Yazılar
      </Typography>
      {posts.length === 0 ? (
         <Typography align="center">Henüz hiç yazı yayınlanmamış.</Typography>
      ) : (
        posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))
      )}
    </Box>
  );
};

export default HomePage;