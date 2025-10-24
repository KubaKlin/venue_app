import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { COLORS } from '../../constants/colors';

export const StyledButton = styled(Button)(() => ({
  display: 'block',
  marginLeft: 'auto',
  fontSize: '16px',
  fontWeight: 600,
  borderRadius: 50,
  textTransform: 'none',
  backgroundColor: COLORS.PRIMARY,
  boxShadow: 'none',
  height: 40,
  paddingInline: 45,

  '&:hover': {
    backgroundColor: '#66BB6A',
  },

  '&:disabled': {
    backgroundColor: '#ddd',
    color: '#999',
  },
}));
