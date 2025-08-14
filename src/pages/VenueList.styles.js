import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  minHeight: 400,
}));
