import { Button } from '@mui/material';

export const BookingSubmitButton = ({ isFormValid, isDisabled = false }) => {
  return (
    <Button
      type="submit"
      variant="contained"
      fullWidth
      disabled={!isFormValid || isDisabled}
      sx={{
        py: 1.5,
        fontSize: '16px',
        fontWeight: 600,
        borderRadius: 2,
        textTransform: 'none',
        backgroundColor: '#81C784',
        '&:hover': {
          backgroundColor: '#66BB6A',
        },
        '&:disabled': {
          backgroundColor: '#ddd',
          color: '#999',
        },
      }}
    >
      Book
    </Button>
  );
};
