import { useState } from 'react';
import { Container, useTheme, useMediaQuery, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { MobileNavBar } from './MobileNavBar.jsx';
import {
  StyledMainBox,
  StyledContainerBox,
  StyledDesktopBox,
  StyledButton,
} from './NavBar.styles';
import logoPic from '../../assets/bookify.svg';

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
    <StyledMainBox>
      <Container maxWidth="lg">
        <StyledContainerBox>
          {/* Mobile Menu */}
          {isMobile && (
            <MobileNavBar
              pages={pages}
              anchorElementNavigation={anchorElementNavigation}
              handleCloseNavMenu={handleCloseNavMenu}
              handleOpenNavMenu={handleOpenNavMenu}
            />
          )}
          <Box component={Link} to="/">
            <img src={logoPic} alt="bookify logo" />
          </Box>
          {isMobile && (
            <StyledButton
              key={pages[3].name}
              component={Link}
              to={pages[3].path}
            >
              {pages[3].name}
            </StyledButton>
          )}

          {/* Desktop Menu */}
          {!isMobile && (
            <StyledDesktopBox>
              {pages.map((page) => (
                <StyledButton key={page.name} component={Link} to={page.path}>
                  {page.name}
                </StyledButton>
              ))}
            </StyledDesktopBox>
          )}
        </StyledContainerBox>
      </Container>
    </StyledMainBox>
  );
};
