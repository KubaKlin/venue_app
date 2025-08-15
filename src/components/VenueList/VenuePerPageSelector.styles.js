import { Box, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { COLORS } from '../../constants/colors';

export const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

export const StyledTextField = styled(TextField)(() => ({
  width: '50px',
  '& .MuiInputBase-root': {
    fontSize: '14px',
    height: '36px',
    color: COLORS.DARK_PRIMARY,
    fontWeight: 600,
  },
  '& .MuiInputBase-input': {
    textAlign: 'center',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: COLORS.PRIMARY,
  },
  '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: COLORS.PRIMARY,
  },
  '& input[type=number]::-webkit-inner-spin-button': {
    '-webkit-appearance': 'none',
    margin: 0,
  },
}));

export const StyledTypography = styled(Typography)(() => ({
  color: '#7f8c8d',
  fontSize: '14px',
  whiteSpace: 'nowrap',
}));
