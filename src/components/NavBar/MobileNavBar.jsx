import { IconButton, MenuItem, Typography } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { StyledBox, StyledMenu } from './MobileNavBar.styles';

export const MobileNavBar = ({
  pages,
  handleOpenNavMenu,
  anchorElementNavigation,
  handleCloseNavMenu,
}) => {
  return (
    <StyledBox>
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
      <StyledMenu
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
      </StyledMenu>
    </StyledBox>
  );
};
