import { Box, Typography } from '@mui/material';
import { LocationOn } from '@mui/icons-material';

export const LocationDisplay = ({ locationName }) => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
    }}
  >
    <LocationOn
      sx={{
        fontSize: 16,
        color: 'rgba(255,255,255,0.7)',
      }}
    />
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
);
