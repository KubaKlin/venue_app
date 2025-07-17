import { Typography } from '@mui/material';

export const PriceDisplay = ({ pricePerNightInEUR }) => (
  <Typography
    sx={{
      fontSize: 14,
      color: 'white',
      fontWeight: 600,
    }}
  >
    {`€${pricePerNightInEUR.toFixed(0)} / night`}
  </Typography>
);
