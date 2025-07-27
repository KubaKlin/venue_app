import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Phone, Email } from '@mui/icons-material';

const ContactItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  cursor: 'pointer',
}));

const EmailContactItem = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
}));

const ContactIcon = styled(Phone)(({ theme }) => ({
  fontSize: '28px',
  marginRight: theme.spacing(2),
  color: '#000',
}));

const EmailIcon = styled(Email)(({ theme }) => ({
  fontSize: '28px',
  marginRight: theme.spacing(2),
  color: '#000',
}));

const ContactText = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  fontWeight: 400,
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
  },
}));

export const ContactItems = ({ contactDetails }) => {
  const handlePhoneClick = () => {
    window.location.href = `tel:${contactDetails.phone}`;
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${contactDetails.email}`;
  };

  return (
    <>
      <ContactItem
        onClick={handlePhoneClick}
        tabIndex={0}
        role="button"
        aria-label={`Call ${contactDetails.phone}`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handlePhoneClick();
          }
        }}
      >
        <ContactIcon />
        <ContactText variant="h5">
          {contactDetails.phone}
        </ContactText>
      </ContactItem>

      <EmailContactItem
        onClick={handleEmailClick}
        tabIndex={0}
        role="button"
        aria-label={`Email ${contactDetails.email}`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleEmailClick();
          }
        }}
      >
        <EmailIcon />
        <ContactText variant="h5">
          {contactDetails.email}
        </ContactText>
      </EmailContactItem>
    </>
  );
}; 