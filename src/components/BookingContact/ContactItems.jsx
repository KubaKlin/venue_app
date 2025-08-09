import {
  ContactItem,
  EmailContactItem,
  ContactIcon,
  EmailIcon,
  ContactText,
} from './ContactItems.styles';

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
        <ContactText variant="h5">{contactDetails.phone}</ContactText>
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
        <ContactText variant="h5">{contactDetails.email}</ContactText>
      </EmailContactItem>
    </>
  );
};
