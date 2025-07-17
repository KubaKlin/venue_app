import { Box, Typography } from '@mui/material';

export const VenueNameOverlay = ({ venueName }) => (
  <Box
    sx={{
      position: 'absolute',
      top: 0,
      right: 0,
      padding: 1,
      backgroundColor: 'rgba(0,0,0,0.7)',
      borderBottomLeftRadius: 12,
    }}
  >
    <Typography
      sx={{
        fontWeight: 600,
        textTransform: 'capitalize',
        color: 'white',
        fontSize: 14,
      }}
    >
      {venueName}
    </Typography>
  </Box>
);
