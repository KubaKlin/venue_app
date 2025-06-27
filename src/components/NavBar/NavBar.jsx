import { Container, Box, Typography, Button } from '@mui/material';

export const NavBar = () => {

  const pages = ['About us', 'Your favourites', 'Start hosting', 'Login'];

  return (
      <Box sx={{ boxShadow: 2 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
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
                  key={page}
                  sx={{ my: 2, color: '#333', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
  );
};
