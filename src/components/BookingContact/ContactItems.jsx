import phoneIcon from '../../assets/phone_ico.svg';
import mailIcon from '../../assets/mail_ico.svg';
import { ContactItem, ContactText, ContactIcon } from './ContactItems.styles';

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
        <ContactIcon src={phoneIcon} />
        <ContactText variant="h5">{contactDetails.phone}</ContactText>
      </ContactItem>

      <ContactItem
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
        <ContactIcon src={mailIcon} />
        <ContactText variant="h5">{contactDetails.email}</ContactText>
      </ContactItem>
    </>
  );
};
