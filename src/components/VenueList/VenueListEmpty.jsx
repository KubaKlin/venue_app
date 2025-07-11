import { Box, Typography } from '@mui/material';

export const VenueListEmpty = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 300,
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Typography variant="h6" sx={{ color: '#7f8c8d' }}>
        No venues found
      </Typography>
    </Box>
  );
};
