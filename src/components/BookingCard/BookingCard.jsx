import { Typography, Card, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useBookingForm } from './hooks/useBookingForm.js';
import { useBookingCalculations } from './hooks/useBookingCalculations';
import { BookingDatePickers } from '../VenueDetails/BookingDatePickers';
import { BookingPriceDisplay } from '../VenueDetails/BookingPriceDisplay';
import { BookingSubmitButton } from '../VenueDetails/BookingSubmitButton';

const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.spacing(2),
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(2),
}));

const StyledDivider = styled(Divider)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

export const BookingCard = ({ venue }) => {
  const {
    control,
    handleSubmit,
    startDate,
    endDate,
    isOneDayBooking,
    handleStartDateChange,
    handleEndDateChange,
    handleOneDayToggle,
  } = useBookingForm();

  const { totalPLN, pricePerDayPLN, isFormValid } = useBookingCalculations({
    startDate,
    endDate,
    isOneDayBooking,
    venue,
  });

  const handleBookSubmit = (data) => {
    console.log('Booked:', data);
  };

  return (
    <StyledCard elevation={0}>
      <StyledTypography variant="h5">Book this venue</StyledTypography>
      <StyledDivider />

      <form onSubmit={handleSubmit(handleBookSubmit)}>
        <BookingDatePickers
          control={control}
          startDate={startDate}
          endDate={endDate}
          isOneDayBooking={isOneDayBooking}
          handleStartDateChange={handleStartDateChange}
          handleEndDateChange={handleEndDateChange}
          handleOneDayToggle={handleOneDayToggle}
        />

        <BookingPriceDisplay
          pricePerDayPLN={pricePerDayPLN}
          totalPLN={totalPLN}
        />

        <BookingSubmitButton isFormValid={isFormValid} />
      </form>
    </StyledCard>
  );
};
