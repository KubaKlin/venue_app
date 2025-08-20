import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ContactContainer = styled(Box)(() => ({
  marginTop: 140
}));

export const ContactTitle = styled(Typography)(({ theme }) => ({
  fontWeight: '400',
  marginBottom: 16,
  marginTop: 120,
  fontSize: '25px',
  borderBottom: '2px solid #000',
  paddingBottom: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
  },
}));

export const ContactSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));
