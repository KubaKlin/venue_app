import { Container, Card } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
}));

export const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.spacing(2),
}));
