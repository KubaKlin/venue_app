import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ContactItem = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  marginTop: 40,
}));

export const ContactIcon = styled('img')(() => ({
  marginRight: 40,
}));

export const ContactText = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 400,
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
  },
}));
