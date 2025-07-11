import { Box, Typography, Slider } from '@mui/material';

export const PriceSlider = ({ priceRange, handlePriceChange }) => {
  return (
    <Box sx={{ px: 1 }}>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        ${priceRange[0]} - ${priceRange[1]}
      </Typography>
      <Slider
        value={priceRange}
        onChange={handlePriceChange}
        valueLabelDisplay="auto"
        min={0}
        max={1000}
        step={25}
        sx={{
          color: '#4caf50',
          '& .MuiSlider-thumb': {
            backgroundColor: '#4caf50',
          },
          '& .MuiSlider-track': {
            backgroundColor: '#4caf50',
          },
        }}
      />
    </Box>
  );
};
