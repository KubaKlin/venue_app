import { Container, Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export const NavBar = () => {

  const pages = [
    { name: 'About us', path: '/about-us' },
    { name: 'Your favourites', path: '/your-favourites' },
    { name: 'Start hosting', path: '/start-hosting' },
    { name: 'Login', path: '/login' }
  ];

  return (
      <Box sx={{ boxShadow: 2 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: 'flex',
                fontWeight: 100,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              BOOKIFY
            </Typography>

            <Box sx={{ display: 'flex' }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  component={Link}
                  to={page.path}
                  sx={{ my: 2, color: '#333', display: 'block' }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
  );
};
