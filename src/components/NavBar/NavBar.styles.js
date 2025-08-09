import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledMainBox = styled(Box)(() => ({
  boxShadow: 2,
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
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  color: '#333',
  display: 'block',
  textTransform: 'lowercase',
  fontSize: '16px',
}));

