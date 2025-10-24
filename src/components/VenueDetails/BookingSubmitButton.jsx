import { StyledButton } from './BookingSubmitButton.styles';

export const BookingSubmitButton = ({ isFormValid, isDisabled = false }) => {
  return (
    <StyledButton
      type="submit"
      variant="contained"
      disabled={!isFormValid || isDisabled}
    >
      Book
    </StyledButton>
  );
};
