import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: '#fff',
  borderRadius: theme.spacing(1),
  width: '100%',
  maxWidth: '220px',
}));
