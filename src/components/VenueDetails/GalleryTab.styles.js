import { Card, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  marginLeft: theme.spacing(0.5),
  marginRight: theme.spacing(0.5),
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(1),
}));
