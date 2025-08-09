import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
}));

export const StyledTypography = styled(Typography)(() => ({
  color: '#7f8c8d',
}));

export const StyledButton = styled(Button)(() => ({
  color: '#4caf50',
  fontWeight: 600,
  fontSize: '16px',
  textTransform: 'lowercase',
}));

