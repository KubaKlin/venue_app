import { Typography, Card, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledCard = styled(Card)(({ theme }) => ({
  marginTop: 76,
  [theme.breakpoints.down('sm')]: {
    marginTop: 0,
  },
}));

export const StyledTypography = styled(Typography)(() => ({
  fontWeight: 600,
  fontSize: 25,
  marginBottom: 16,
}));

export const StyledDivider = styled(Divider)(() => ({
  marginBottom: 40,
  backgroundColor: 'rgba(0,0,0,0.65)',
  height: 2,
}));
