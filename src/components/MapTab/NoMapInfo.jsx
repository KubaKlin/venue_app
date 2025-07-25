import { Card, Typography } from '@mui/material';

export const NoMapInfo = ({ venue }) => {
  return (
    <Card sx={{ p: 4, textAlign: 'center', mx: 0.5 }} elevation={3}>
      <Typography variant="h6" gutterBottom>
        Location Information
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {venue.location.name}, {venue.location.postalCode}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
        Map view not available for this location
      </Typography>
    </Card>
  );
};
