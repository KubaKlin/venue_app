import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledPaper = styled(Paper)(({ theme }) => ({
  width: '100%',
  backgroundColor: '#FDFDFD',
  borderRadius: theme.spacing(0),
  height: '100%',
}));
