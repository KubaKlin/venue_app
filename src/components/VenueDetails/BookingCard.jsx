import { Typography, Card, Divider } from '@mui/material';
import { useBookingForm } from './hooks/useBookingForm.js';
import { useBookingCalculations } from './hooks/useBookingCalculations';
import { BookingDatePickers } from './BookingDatePickers';
import { BookingPriceDisplay } from './BookingPriceDisplay';
import { BookingSubmitButton } from './BookingSubmitButton';

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
    <Card
      elevation={0}
      sx={{ p: 3, borderRadius: 2, position: 'sticky', top: 0 }}
    >
      <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
        Book this venue
      </Typography>
      <Divider sx={{ mb: 3 }} />

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
    </Card>
  );
};
