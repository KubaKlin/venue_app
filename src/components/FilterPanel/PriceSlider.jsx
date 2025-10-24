import { Box, Typography } from '@mui/material';
import { StyledSlider } from './PriceSlider.styles';

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
