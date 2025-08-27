import { differenceInDays } from 'date-fns';
import { useExchangeRate } from '../../../hooks/useExchangeRate';

export const useBookingCalculations = ({
  startDate,
  endDate,
  isOneDayBooking,
  venue,
}) => {
  const { exchangeRate } = useExchangeRate();

  const calculateDays = () => {
    if (isOneDayBooking) {
      return 1;
    }

    const days = differenceInDays(endDate, startDate);

    if (days > 0) {
      return days;
    }

    return 1;
  };

  const calculateTotalEUR = () => {
    const days = calculateDays();
    return days * venue.pricePerNightInEUR;
  };

  const calculateTotalPLN = () => {
    if (!exchangeRate) {
      return 0;
    }
    return calculateTotalEUR() * exchangeRate;
  };

  const calculatePricePerDayPLN = () => {
    return Math.round(venue.pricePerNightInEUR * (exchangeRate || 4.25));
  };

  const days = calculateDays();
  const totalPLN = calculateTotalPLN();
  const pricePerDayPLN = calculatePricePerDayPLN();
  const isFormValid = startDate && endDate && days > 0;

  return {
    totalPLN,
    pricePerDayPLN,
    isFormValid,
  };
};
