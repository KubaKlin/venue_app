import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(2),
  borderBottom: '1px solid #e0e0e0',
}));

export const StyledTypography = styled(Typography)(() => ({
  fontWeight: 400,
  color: '#333',
}));

export const StyledButton = styled(Button)(() => ({
  color: '#4caf50',
  textTransform: 'lowercase',
  fontWeight: 600,
  fontSize: 16
}));
