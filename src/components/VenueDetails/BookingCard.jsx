import {
  Box,
  Typography,
  Card,
  Button,
  Checkbox,
  FormControlLabel,
  Divider,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useState } from 'react';
import { differenceInDays } from 'date-fns';
import { useExchangeRate } from '../../hooks/useExchangeRate';

export const BookingCard = ({ venue }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isOneDayBooking, setIsOneDayBooking] = useState(false);
  const { exchangeRate } = useExchangeRate();

  const handleStartDateChange = (newDate) => {
    setStartDate(newDate);
    if (isOneDayBooking) {
      setEndDate(newDate);
    }
  };

  const handleEndDateChange = (newDate) => {
    setEndDate(newDate);
  };

  const handleOneDayToggle = (event) => {
    const checked = event.target.checked;
    setIsOneDayBooking(checked);
    if (checked && startDate) {
      setEndDate(startDate);
    } else if (!checked && startDate) {
      setEndDate(null);
    }
  };

  const handleBookClick = () => {
    console.log('Booked');
  };

  const calculateDays = () => {
    if (!startDate || !endDate) return 0;

    if (isOneDayBooking) return 1;

    const days = differenceInDays(endDate, startDate);
    return days > 0 ? days : 0;
  };

  const calculateTotalEUR = () => {
    const days = calculateDays();
    return days * venue.pricePerNightInEUR;
  };

  const calculateTotalPLN = () => {
    if (!exchangeRate) return 0;
    return calculateTotalEUR() * exchangeRate;
  };

  const days = calculateDays();
  const totalPLN = calculateTotalPLN();

  return (
    <Card
      elevation={0}
      sx={{ p: 3, borderRadius: 2, position: 'sticky', top: 0 }}
    >
      <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
        Book this venue
      </Typography>
      <Divider sx={{ mb: 3 }} />

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <DatePicker
            label="starts at"
            value={startDate}
            onChange={handleStartDateChange}
            minDate={new Date()}
            sx={{ flex: 1 }}
            slotProps={{
              textField: {
                size: 'small',
              },
            }}
          />
          {!isOneDayBooking && (
            <DatePicker
              label="ends at"
              value={endDate}
              onChange={handleEndDateChange}
              minDate={startDate || new Date()}
              sx={{ flex: 1 }}
              slotProps={{
                textField: {
                  size: 'small',
                },
              }}
            />
          )}
        </Box>

        <FormControlLabel
          control={
            <Checkbox checked={isOneDayBooking} onChange={handleOneDayToggle} />
          }
          label="just one day"
          sx={{ mb: 2 }}
        />
      </LocalizationProvider>

      <Box
        sx={{
          p: 2,
          backgroundColor: '#f6f6f6',
          borderRadius: 2,
          mb: 2,
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="body2">per day</Typography>
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            {`${Math.round(venue.pricePerNightInEUR * (exchangeRate || 4.25))} zł`}
          </Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            total
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            {`${Math.round(totalPLN)} zł`}
          </Typography>
        </Box>
      </Box>

      <Button
        variant="contained"
        fullWidth
        onClick={handleBookClick}
        disabled={!startDate || !endDate || days === 0}
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
    </Card>
  );
};
