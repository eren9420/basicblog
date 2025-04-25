import { AppBar, Toolbar, Container, Typography, IconButton, useTheme } from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';

interface HeaderProps { toggleColorMode: () => void; }

export function Header({ toggleColorMode }: HeaderProps) {
  const theme = useTheme();
  return (
    <AppBar position="sticky" elevation={4} color="primary">
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Typography component="a" href="/" sx={{ textDecoration: 'none', color: 'inherit', fontWeight: 700, fontSize: '1.5rem' }}>
            Physics Blog
          </Typography>
          <IconButton onClick={toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? <LightMode /> : <DarkMode />}
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}