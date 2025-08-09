import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Phone, Email } from '@mui/icons-material';

export const ContactItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  cursor: 'pointer',
}));

export const EmailContactItem = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
}));

export const ContactIcon = styled(Phone)(({ theme }) => ({
  fontSize: '28px',
  marginRight: theme.spacing(2),
  color: '#000',
}));

export const EmailIcon = styled(Email)(({ theme }) => ({
  fontSize: '28px',
  marginRight: theme.spacing(2),
  color: '#000',
}));

export const ContactText = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  fontWeight: 400,
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
  },
}));
