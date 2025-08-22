import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { COLORS } from '../../constants/colors.js';

export const StyledBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(1),
  marginBottom: '42px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  background:
    'linear-gradient(141deg,rgba(241, 242, 248, 1) 0%, rgba(243, 241, 248, 1) 38%, rgba(248, 245, 241, 1) 100%)',
}));

export const StyledTypography = styled(Typography)(() => ({
  fontWeight: 400,
  color: '#333',
  letterSpacing: '1px',
  fontSize: '20px',
  width: '100%',
  textAlign: 'center',
}));

export const StyledButton = styled(Button)(() => ({
  color: COLORS.DARK_PRIMARY,
  position: 'absolute',
  right: 10,
  textTransform: 'lowercase',
  fontWeight: 600,
  fontSize: 16,
}));
