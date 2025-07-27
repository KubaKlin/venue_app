import { Box, Checkbox, FormControlLabel } from '@mui/material';
import { styled } from '@mui/material/styles';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Controller } from 'react-hook-form';

const StyledDatePickerBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const StyledDatePicker = styled(DatePicker)(() => ({
  flex: 1,
}));

const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

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
      <StyledDatePickerBox>
        <Controller
          name="startDate"
          control={control}
          rules={startDateValidation}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <StyledDatePicker
              label="starts at"
              value={value}
              onChange={(newDate) => {
                onChange(newDate);
                handleStartDateChange(newDate);
              }}
              minDate={new Date()}
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
              <StyledDatePicker
                label="ends at"
                value={value}
                onChange={(newDate) => {
                  onChange(newDate);
                  handleEndDateChange(newDate);
                }}
                minDate={startDate || new Date()}
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
      </StyledDatePickerBox>

      <Controller
        name="isOneDayBooking"
        control={control}
        render={({ field: { value, onChange } }) => (
          <StyledFormControlLabel
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
          />
        )}
      />
    </LocalizationProvider>
  );
};
