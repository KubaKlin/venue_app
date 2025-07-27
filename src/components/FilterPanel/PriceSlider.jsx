import { Box, Typography, Slider } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledSlider = styled(Slider)(() => ({
  color: '#4caf50',
  '& .MuiSlider-thumb': {
    backgroundColor: '#4caf50',
  },
  '& .MuiSlider-track': {
    backgroundColor: '#4caf50',
  },
}));

export const PriceSlider = ({ priceRange, handlePriceChange }) => {
  return (
    <Box>
      <Typography variant="body2" color="text.secondary">
        ${priceRange[0]} - ${priceRange[1]}
      </Typography>
      <StyledSlider
        value={priceRange}
        onChange={handlePriceChange}
        valueLabelDisplay="auto"
        min={0}
        max={1000}
        step={10}
      />
    </Box>
  );
};
