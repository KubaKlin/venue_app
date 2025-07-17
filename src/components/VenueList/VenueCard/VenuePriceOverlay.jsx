import { Box } from '@mui/material';
import { PriceDisplay } from './PriceDisplay';
import { LocationDisplay } from './LocationDisplay';

export const VenuePriceOverlay = ({ pricePerNightInEUR, locationName }) => (
  <Box
    sx={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      padding: 1,
      backgroundColor: 'rgba(0,0,0,0.7)',
      borderTopRightRadius: 12,
    }}
  >
    <PriceDisplay pricePerNightInEUR={pricePerNightInEUR} />
    <LocationDisplay locationName={locationName} />
  </Box>
);
