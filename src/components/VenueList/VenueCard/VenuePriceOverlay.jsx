import { Box, Typography } from '@mui/material';
import { LocationOn } from '@mui/icons-material';

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
    <Typography
      sx={{ fontSize: 14, color: 'white', fontWeight: 600 }}
    >{`€${pricePerNightInEUR.toFixed(0)} / night`}</Typography>
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <LocationOn sx={{ fontSize: 16, color: 'rgba(255,255,255,0.7)' }} />
      <Typography
        sx={{
          color: 'white',
          textTransform: 'capitalize',
          fontSize: 13,
          marginLeft: 0.5,
        }}
      >
        {locationName}
      </Typography>
    </Box>
  </Box>
);
