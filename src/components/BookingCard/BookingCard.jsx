import { useBookingForm } from './hooks/useBookingForm';
import { useBookingCalculations } from './hooks/useBookingCalculations';
import { BookingDatePickers } from '../VenueDetails/BookingDatePickers';
import { BookingPriceDisplay } from '../VenueDetails/BookingPriceDisplay';
import { BookingSubmitButton } from '../VenueDetails/BookingSubmitButton';
import {
  StyledCard,
  StyledTypography,
  StyledDivider,
} from './BookingCard.styles';

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
