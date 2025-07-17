import { Box, Typography, Rating } from '@mui/material';

export const VenueHeader = ({ venue }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 2 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            textTransform: 'capitalize',
          }}
        >
          {venue.name}
        </Typography>
        <Typography
          variant="h6"
          sx={{ textTransform: 'capitalize', fontWeight: 500 }}
        >
          {venue.location.postalCode}, {venue.location.name}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: 1,
          mb: 2,
        }}
      >
        <Typography variant="body2">{venue.numberOfReviews} reviews</Typography>
        <Rating value={venue.rating} precision={0.1} readOnly size="medium" />
      </Box>
    </Box>
  );
};
