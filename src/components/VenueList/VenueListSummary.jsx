import { Box, Button, Typography } from '@mui/material';

export const VenueListSummary = ({ venues, startIndex, endIndex }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 2,
      }}
    >
      <Typography variant="body1" sx={{ color: '#7f8c8d' }}>
        Showing {startIndex + 1}-{Math.min(endIndex, venues.length)} of{' '}
        {venues.length} venues
      </Typography>
      <Button
        variant="text"
        sx={{
          color: '#4caf50',
          fontWeight: 600,
          fontSize: '16px',
          textTransform: 'lowercase',
        }}
      >
        Sort
      </Button>
    </Box>
  );
};
