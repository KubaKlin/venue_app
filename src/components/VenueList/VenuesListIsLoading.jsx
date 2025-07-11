import { Box, Typography } from '@mui/material';

export const VenuesListIsLoading = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 400,
      }}
    >
      <Typography variant="h6">Loading venues...</Typography>
    </Box>
  );
};
