import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { PostMeta } from '../../types';

interface PostCardProps { post: PostMeta; }

export default function PostCard({ post }: PostCardProps) {
  return (
    <Card sx={{ maxWidth: 345, transition: 'transform .2s', '&:hover': { transform: 'scale(1.05)' } }}>
      <CardActionArea component={Link} to={`/posts/${post.slug}`}>  
        <CardContent>
          <Typography gutterBottom variant="h5">{post.title}</Typography>
          <Typography variant="body2" color="text.secondary" paragraph>{post.excerpt}</Typography>
          <Typography variant="caption" color="text.secondary">{new Date(post.date).toLocaleDateString()}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}