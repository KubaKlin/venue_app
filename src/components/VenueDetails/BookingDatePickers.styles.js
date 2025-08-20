import { Box, FormControlLabel } from '@mui/material';
import { styled } from '@mui/material/styles';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export const StyledDatePickerBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

export const StyledDatePicker = styled(DatePicker)(() => ({
  flex: 1,
}));

export const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  color: '#747474'
}));
