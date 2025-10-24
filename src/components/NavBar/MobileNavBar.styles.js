import { Box, Menu } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledBox = styled(Box)(() => ({
  display: 'flex',
}));

export const StyledMenu = styled(Menu)(() => ({
  display: { xs: 'block', md: 'none' },
}));
