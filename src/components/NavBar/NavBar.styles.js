import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { COLORS } from '../../constants/colors.js';

export const StyledMainBox = styled(Box)(() => ({
  position: 'relative',
  zIndex: '1',
  boxShadow: '0 4px 6px rgba(0,0,0,0.08)',
}));

export const StyledContainerBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

export const StyledLogoTypography = styled(Typography)(({ theme }) => ({
  marginRight: theme.spacing(2),
  display: 'flex',
  fontWeight: 100,
  letterSpacing: '4px',
  color: 'inherit',
  textDecoration: 'none',
}));

export const StyledDesktopBox = styled(Box)(() => ({
  display: 'flex',
  gap: 36,
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1),
  color: '#333',
  display: 'block',
  textTransform: 'lowercase',
  fontSize: '16px',
  fontWeight: 400,
  '&:last-of-type': {
    color: COLORS.PRIMARY,
    fontWeight: 600,
  }
}));
