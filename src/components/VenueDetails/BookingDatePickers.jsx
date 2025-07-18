import { Box, Checkbox, FormControlLabel } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Controller } from 'react-hook-form';

export const BookingDatePickers = ({
  control,
  startDate,
  isOneDayBooking,
  handleStartDateChange,
  handleEndDateChange,
  handleOneDayToggle,
  startDateValidation,
  endDateValidation,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
        <Controller
          name="startDate"
          control={control}
          rules={startDateValidation}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
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
            rules={endDateValidation}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
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
  );
};
