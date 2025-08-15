import { Slider } from '@mui/material';
import { styled } from '@mui/material/styles';
import { COLORS } from '../../constants/colors.js';

export const StyledSlider = styled(Slider)(() => ({
  color: COLORS.DARK_PRIMARY,
  '& .MuiSlider-thumb': {
    backgroundColor: COLORS.DARK_PRIMARY,
  },
  '& .MuiSlider-track': {
    backgroundColor: COLORS.DARK_PRIMARY,
  },
}));
