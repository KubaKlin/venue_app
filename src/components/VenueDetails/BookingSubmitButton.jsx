import { StyledButton } from './BookingSubmitButton.styles';

export const BookingSubmitButton = ({ isFormValid, isDisabled = false }) => {
  return (
    <StyledButton
      type="submit"
      variant="contained"
      fullWidth
      disabled={!isFormValid || isDisabled}
    >
      Book
    </StyledButton>
  );
};
