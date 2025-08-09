import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ContactContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
}));

export const ContactTitle = styled(Typography)(({ theme }) => ({
  fontWeight: '400',
  marginBottom: theme.spacing(3),
  fontSize: '24px',
  borderBottom: '2px solid #000',
  paddingBottom: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
  },
}));

export const ContactSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

