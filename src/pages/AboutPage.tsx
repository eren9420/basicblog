// src/pages/AboutPage.tsx
import React from 'react';
import { Typography, Box } from '@mui/material';

const AboutPage: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Hakkında
      </Typography>
      <Typography paragraph>
        Merhaba! Ben [Fizikçi Arkadaşınızın Adı]. Bu blogda fizik, bilim ve teknoloji
        alanlarındaki düşüncelerimi, öğrendiklerimi ve keşfettiklerimi paylaşıyorum.
      </Typography>
      <Typography paragraph>
        Amacım, bilimin büyüleyici dünyasını daha fazla insanla paylaşmak ve karmaşık
        konuları herkesin anlayabileceği bir dilde sunmaktır.
      </Typography>
      {/* Buraya daha fazla içerik eklenebilir */}
    </Box>
  );
};

export default AboutPage;