import { Container, Grid, Box, Typography } from '@mui/material';
import PostCard from '../components/Blog/Postcard';
import { useBlogContext } from '../contexts/BlogContext';

export default function HomePage() {
  const { posts } = useBlogContext();

  return (
    <>
      <Box sx={{ py: 8, backgroundColor: 'background.paper', textAlign: 'center' }}>
        <Typography variant="h1" gutterBottom>Welcome to Physics Insights</Typography>
        <Typography variant="h5" color="text.secondary">Dive into quantum mechanics, relativity and beyond.</Typography>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {posts.map(post => (
            <Grid key={post.slug} item xs={12} sm={6} md={4}><PostCard post={post} /></Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}