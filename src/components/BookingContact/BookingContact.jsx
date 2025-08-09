import { SocialMediaLinks } from './SocialMediaLinks';
import { ContactItems } from './ContactItems';
import { ContactContainer, ContactTitle, ContactSection } from './BookingContact.styles';

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
