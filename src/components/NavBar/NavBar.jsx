import { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { MobileNavBar } from './MobileNavBar.jsx';

const StyledMainBox = styled(Box)(() => ({
  boxShadow: 2,
}));

const StyledContainerBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

const StyledLogoTypography = styled(Typography)(({ theme }) => ({
  marginRight: theme.spacing(2),
  display: 'flex',
  fontWeight: 100,
  letterSpacing: '4px',
  color: 'inherit',
  textDecoration: 'none',
}));

const StyledDesktopBox = styled(Box)(() => ({
  display: 'flex',
  gap: 36,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  color: '#333',
  display: 'block',
  textTransform: 'lowercase',
  fontSize: '16px',
}));

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
          <StyledLogoTypography variant="h6" noWrap component={Link} to="/">
            BOOKIFY
          </StyledLogoTypography>

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

          {/* Mobile Menu */}
          {isMobile && (
            <MobileNavBar
              pages={pages}
              anchorElementNavigation={anchorElementNavigation}
              handleCloseNavMenu={handleCloseNavMenu}
              handleOpenNavMenu={handleOpenNavMenu}
            />
          )}
        </StyledContainerBox>
      </Container>
    </StyledMainBox>
  );
};
