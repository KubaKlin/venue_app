import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  paddingTop: 0,
  minHeight: 400,
}));

export const StyledContainer = styled(Box)(() => ({
  maxWidth: '1240px',
  margin: '0 auto'
}));
