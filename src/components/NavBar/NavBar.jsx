import { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  const [anchorElementNavigation, setAnchorElementNavigation] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const pages = [
    { name: 'About us', path: '/about-us' },
    { name: 'Your favourites', path: '/your-favourites' },
    { name: 'Start hosting', path: '/start-hosting' },
    { name: 'Login', path: '/login' },
  ];

  const handleOpenNavMenu = (event) => {
    setAnchorElementNavigation(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElementNavigation(null);
  };

  return (
    <Box sx={{ boxShadow: 2 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
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

          {/* Desktop Menu */}
          {!isMobile && (
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
          )}

          {/* Mobile Menu */}
          {isMobile && (
            <Box sx={{ display: 'flex' }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElementNavigation}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElementNavigation)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page.name}
                    onClick={handleCloseNavMenu}
                    component={Link}
                    to={page.path}
                  >
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
};
