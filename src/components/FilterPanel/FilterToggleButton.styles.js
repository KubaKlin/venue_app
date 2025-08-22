import { Box } from '@mui/material';
import { COLORS } from '../../constants/colors';
import { styled } from '@mui/material/styles';

export const StyledButton = styled(Box)(({ theme }) => ({
  position: 'fixed',
  left: 0,
  fontSize: '16px',
  fontWeight: 600,
  top: '120px',
  zIndex: 100,
  backgroundColor: COLORS.PRIMARY,
  color: 'white',
  borderRadius: '0 20px 20px 0',
  padding: 8,

  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.25)',
}));
