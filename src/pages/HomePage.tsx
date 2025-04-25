// src/HomePage.tsx
import React, { useContext } from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent
} from '@mui/material'
import { BlogContext } from '../contexts/BlogContext'

// an Unsplash hero image URL (feel free to swap)
const HERO_IMAGE =
  'https://images.unsplash.com/photo-1581093588401-1e188d4ab185?auto=format&fit=crop&w=1350&q=80'

export default function HomePage() {
  const { posts } = useContext(BlogContext)!

  return (
    <Box>
      {/* HERO SECTION */}
      <Box
        sx={{
          height: '60vh',
          backgroundImage: `url(${HERO_IMAGE})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          mb: 4
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            bgcolor: 'rgba(0,0,0,0.5)'
          }}
        />
        <Box
          sx={{
            position: 'relative',
            textAlign: 'center',
            p: 4,
            borderRadius: 2,
            maxWidth: 600,
            color: 'common.white'
          }}
        >
          <Typography variant="h1" gutterBottom>
            Physics Insights
          </Typography>
          <Typography variant="h5">
            Dive into quantum mechanics, relativity and beyond.
          </Typography>
        </Box>
      </Box>

      {/* POSTS GRID */}
      <Container sx={{ pb: 8 }}>
        <Grid container spacing={4}>
          {posts.map((post) => (
            <Grid item key={post.slug} xs={12} sm={6} md={4}>
              <Card>
                <CardActionArea href={`/posts/${post.slug}`}>
                  <CardContent>
                    <Typography variant="h5" component="h2" gutterBottom>
                      {post.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {new Date(post.date).toLocaleDateString()}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
