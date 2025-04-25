// src/components/Blog/PostCard.tsx
import React from 'react';
import { Card, CardContent, Typography, CardActionArea } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { format } from 'date-fns'; // Tarih formatlama için
import { PostSummary } from '../../types';

interface PostCardProps {
  post: PostSummary;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const formattedDate = format(new Date(post.date), 'dd MMMM yyyy'); // Türkçe format için date-fns locale eklemek gerekebilir

  return (
    <Card sx={{ mb: 3 }}>
      <CardActionArea component={RouterLink} to={`/post/${post.slug}`}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            {post.title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {formattedDate} {post.author && `- ${post.author}`}
          </Typography>
          <Typography variant="body2">
            {post.excerpt}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PostCard;