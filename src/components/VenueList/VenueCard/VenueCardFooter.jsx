import { Box, Typography } from '@mui/material';
import { People, Star } from '@mui/icons-material';

export const VenueCardFooter = ({ rating, capacity }) => (
  <Box
    sx={{
      flexGrow: 1,
      p: 1,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      border: '1px solid #ccc',
      borderBottomRightRadius: 4,
      borderBottomLeftRadius: 4,
    }}
  >
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Star sx={{ fontSize: 16, color: '#7f8c8d' }} />
      <Typography variant="body2" sx={{ color: '#7f8c8d', ml: 0.5 }}>
        Rating: ({rating})
      </Typography>
    </Box>
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <People sx={{ fontSize: 16, color: '#7f8c8d' }} />
      <Typography variant="body2" sx={{ color: '#7f8c8d', ml: 0.5 }}>
        capacity: {capacity}
      </Typography>
    </Box>
  </Box>
);
