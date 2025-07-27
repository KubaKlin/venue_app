import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { SocialMediaLinks } from './SocialMediaLinks';
import { ContactItems } from './ContactItems';

const ContactContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
}));

const ContactTitle = styled(Typography)(({ theme }) => ({
  fontWeight: '400',
  marginBottom: theme.spacing(3),
  fontSize: '24px',
  borderBottom: '2px solid #000',
  paddingBottom: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
  },
}));

const ContactSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

export const BookingContact = ({ venue }) => {
  if (!venue?.contactDetails) {
    return null;
  }

  return (
    <ContactContainer>
      <ContactTitle variant="h4" component="h2">
        Contact this venue
      </ContactTitle>
      
      <ContactSection>
        <ContactItems contactDetails={venue.contactDetails} />
      </ContactSection>

      <ContactTitle variant="h4" component="h2">
        Check out on social media
      </ContactTitle>

      <SocialMediaLinks />
    </ContactContainer>
  );
};