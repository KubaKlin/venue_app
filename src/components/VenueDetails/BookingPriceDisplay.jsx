import { Box, Typography, Divider } from '@mui/material';

export const BookingPriceDisplay = ({ pricePerDayPLN, totalPLN }) => {
  return (
    <Box
      sx={{
        p: 2,
        backgroundColor: '#f6f6f6',
        borderRadius: 2,
        mb: 2,
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
        <Typography variant="body2">per day</Typography>
        <Typography variant="body2" sx={{ fontWeight: 500 }}>
          {`${pricePerDayPLN} zł`}
        </Typography>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          total
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          {`${Math.round(totalPLN)} zł`}
        </Typography>
      </Box>
    </Box>
  );
};
