import { Card, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledCard = styled(Card)(({ theme }) => ({
  marginLeft: theme.spacing(0.5),
  marginRight: theme.spacing(0.5),
  borderRadius: 0,
}));

export const StyledMapBox = styled(Box)(() => ({
  height: 400,
  overflow: 'hidden',
}));

export const StyledPopupBox = styled(Box)(() => ({
  textAlign: 'center',
}));
