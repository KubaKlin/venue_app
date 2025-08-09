import { Slider } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledSlider = styled(Slider)(() => ({
  color: '#4caf50',
  '& .MuiSlider-thumb': {
    backgroundColor: '#4caf50',
  },
  '& .MuiSlider-track': {
    backgroundColor: '#4caf50',
  },
}));
