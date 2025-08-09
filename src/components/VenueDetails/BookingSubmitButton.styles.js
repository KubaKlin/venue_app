import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledButton = styled(Button)(({ theme }) => ({
  paddingTop: theme.spacing(1.5),
  paddingBottom: theme.spacing(1.5),
  fontSize: '16px',
  fontWeight: 600,
  borderRadius: theme.spacing(2),
  textTransform: 'none',
  backgroundColor: '#81C784',
  '&:hover': {
    backgroundColor: '#66BB6A',
  },
  '&:disabled': {
    backgroundColor: '#ddd',
    color: '#999',
  },
}));

