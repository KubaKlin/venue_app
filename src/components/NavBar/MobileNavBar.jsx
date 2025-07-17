import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export const MobileNavBar = ({
  pages,
  handleOpenNavMenu,
  anchorElementNavigation,
  handleCloseNavMenu,
}) => {
  return (
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
  );
};
