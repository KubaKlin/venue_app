import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { COLORS } from '../../constants/colors';

export const StyledButton = styled(Button)(({ theme }) => ({
  paddingTop: theme.spacing(1.5),
  paddingBottom: theme.spacing(1.5),
  fontSize: '16px',
  fontWeight: 600,
  borderRadius: theme.spacing(4),
  textTransform: 'none',
  backgroundColor: COLORS.PRIMARY,
  boxShadow: 'none',
  paddingBlock: theme.spacing(0.6),
  paddingInline: theme.spacing(5),

  '&:hover': {
    backgroundColor: '#66BB6A',
  },

  '&:disabled': {
    backgroundColor: '#ddd',
    color: '#999',
  },
}));
