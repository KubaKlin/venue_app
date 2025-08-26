import { Box, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { COLORS } from '../../constants/colors';

export const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-end',
  gap: theme.spacing(1),
}));

export const StyledTextField = styled(TextField)(() => ({
  width: '40px',
  '& .MuiInputBase-root': {
    fontSize: '16px',
    height: '40px',
    color: COLORS.DARK_PRIMARY,
    fontWeight: 600,
    borderRadius: 0,
  },
  '& .MuiInputBase-input': {
    textAlign: 'center',
    padding: 0,
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: COLORS.PRIMARY,
  },
  '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: COLORS.PRIMARY,
  },
  '& input[type=number]::-webkit-inner-spin-button': {
    WebkitAppearance: 'none',
    margin: 0,
  },
  '& input[type=number]::-webkit-outer-spin-button': {
    WebkitAppearance: 'none',
    margin: 0,
  },
  '& input[type=number]': {
    MozAppearance: 'textfield',
  },
}));

export const StyledTypography = styled(Typography)(() => ({
  color: '#000',
  fontSize: '16px',
  whiteSpace: 'nowrap',
}));
