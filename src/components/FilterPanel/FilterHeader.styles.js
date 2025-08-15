import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { COLORS } from '../../constants/colors.js';

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
  color: COLORS.DARK_PRIMARY,
  textTransform: 'lowercase',
  fontWeight: 600,
  fontSize: 16,
}));
