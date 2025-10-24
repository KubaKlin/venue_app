import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { COLORS } from '../../constants/colors.js';

export const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
}));

export const StyledButton = styled(Button)(() => ({
  color: COLORS.PRIMARY,
  fontWeight: 600,
  fontSize: '16px',
  textTransform: 'lowercase',
}));
