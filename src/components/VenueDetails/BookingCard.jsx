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
import { useForm, Controller } from 'react-hook-form';
import { differenceInDays } from 'date-fns';
import { useExchangeRate } from '../../hooks/useExchangeRate';

export const BookingCard = ({ venue }) => {
  const { exchangeRate } = useExchangeRate();

  const { control, watch, setValue, handleSubmit } = useForm({
    defaultValues: {
      startDate: null,
      endDate: null,
      isOneDayBooking: false,
    },
    mode: 'onChange',
  });

  const watchedValues = watch();
  const { startDate, endDate, isOneDayBooking } = watchedValues;

  const handleStartDateChange = (newDate) => {
    setValue('startDate', newDate, { shouldValidate: true });
    if (isOneDayBooking) {
      setValue('endDate', newDate, { shouldValidate: true });
    }
  };

  const handleEndDateChange = (newDate) => {
    setValue('endDate', newDate, { shouldValidate: true });
  };

  const handleOneDayToggle = (checked) => {
    setValue('isOneDayBooking', checked, { shouldValidate: true });
    if (checked && startDate) {
      setValue('endDate', startDate, { shouldValidate: true });
    } else if (!checked && startDate) {
      setValue('endDate', null, { shouldValidate: true });
    }
  };

  const handleBookSubmit = (data) => {
    console.log('Booking data:', data);
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
  const isFormValid = startDate && endDate && days > 0;

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
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <Controller
              name="startDate"
              control={control}
              rules={{
                required: 'Start date is required',
                validate: (value) => {
                  if (!value) return 'Start date is required';
                  if (value < new Date().setHours(0, 0, 0, 0)) {
                    return 'Start date cannot be in the past';
                  }
                  return true;
                },
              }}
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => (
                <DatePicker
                  label="starts at"
                  value={value}
                  onChange={(newDate) => {
                    onChange(newDate);
                    handleStartDateChange(newDate);
                  }}
                  minDate={new Date()}
                  sx={{ flex: 1 }}
                  slotProps={{
                    textField: {
                      size: 'small',
                      error: !!error,
                      helperText: error?.message,
                    },
                  }}
                />
              )}
            />
            {!isOneDayBooking && (
              <Controller
                name="endDate"
                control={control}
                rules={{
                  required: !isOneDayBooking ? 'End date is required' : false,
                  validate: (value) => {
                    if (isOneDayBooking) return true;
                    if (!value) return 'End date is required';
                    if (startDate && value <= startDate) {
                      return 'End date must be after start date';
                    }
                    return true;
                  },
                }}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <DatePicker
                    label="ends at"
                    value={value}
                    onChange={(newDate) => {
                      onChange(newDate);
                      handleEndDateChange(newDate);
                    }}
                    minDate={startDate || new Date()}
                    sx={{ flex: 1 }}
                    slotProps={{
                      textField: {
                        size: 'small',
                        error: !!error,
                        helperText: error?.message,
                      },
                    }}
                  />
                )}
              />
            )}
          </Box>

          <Controller
            name="isOneDayBooking"
            control={control}
            render={({ field: { value, onChange } }) => (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={value}
                    onChange={(event) => {
                      onChange(event.target.checked);
                      handleOneDayToggle(event.target.checked);
                    }}
                  />
                }
                label="just one day"
                sx={{ mb: 2 }}
              />
            )}
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
          type="submit"
          variant="contained"
          fullWidth
          disabled={!isFormValid}
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
      </form>
    </Card>
  );
};
