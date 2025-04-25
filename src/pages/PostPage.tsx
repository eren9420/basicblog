// src/pages/PostPage.tsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Box, CircularProgress, Chip, Stack, Divider } from '@mui/material';
import { getPostBySlug } from '../lib/posts';
import { Post } from '../types';
import MarkdownRenderer from '../components/Blog/MarkdownRenderer';
import { format } from 'date-fns';
import NotFoundPage from './NotFoundPage'; // Eğer yazı bulunamazsa 404 göster

const PostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false); // Sadece hata olup olmadığını tutalım

  useEffect(() => {
    if (!slug) {
        setError(true);
        setLoading(false);
        return;
    }
    try {
      const fetchedPost = getPostBySlug(slug);
      if (fetchedPost) {
          setPost(fetchedPost);
      } else {
          setError(true); // Yazı bulunamadı hatası
      }
    } catch (err) {
      console.error(`Error fetching post with slug "${slug}":`, err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [slug]);

  if (loading) {
    return <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}><CircularProgress /></Box>;
  }

  if (error || !post) {
    return <NotFoundPage />; // Yazı yoksa veya slug yoksa 404 sayfası
  }

  const formattedDate = format(new Date(post.date), 'dd MMMM yyyy');

  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        {post.title}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        Yayınlanma Tarihi: {formattedDate} {post.author && `| Yazar: ${post.author}`}
      </Typography>
      {post.tags && post.tags.length > 0 && (
         <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
           {post.tags.map(tag => <Chip key={tag} label={tag} size="small" />)}
         </Stack>
      )}
      <Divider sx={{ my: 3 }}/>
      {/* Markdown içeriğini özel bileşen ile render et */}
      <MarkdownRenderer content={post.content} />
    </Box>
  );
};

export default PostPage;