import { Box, Typography, Divider, Card } from '@mui/material';
import {
  CheckCircle,
  Bed,
  AccessTime,
  LocationCity,
} from '@mui/icons-material';

export const DescriptionTab = ({ venue }) => (
  <Card sx={{ p: 4, mx: 0.5 }} elevation={3}>
    <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
      {venue.description}
    </Typography>

    <Divider sx={{ my: 3 }} />

    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3 }}>
      {venue.features.map((feature, index) => (
        <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <CheckCircle sx={{ fontSize: 20, color: 'success.main' }} />
          <Typography variant="body2">{feature}</Typography>
        </Box>
      ))}
    </Box>

    <Divider sx={{ my: 3 }} />

    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Bed sx={{ fontSize: 30, color: '#333' }} />
        <Typography variant="body2">
          {venue.sleapingDetails.amoutOfBeds} beds /{' '}
          {venue.sleapingDetails.maxCapacity} sleeping places
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <AccessTime sx={{ fontSize: 30, color: '#333' }} />
        <Typography variant="body2">
          check-in {venue.checkInHour} / check-out {venue.checkOutHour}
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <LocationCity sx={{ fontSize: 30, color: '#333' }} />
        <Typography variant="body2">
          {venue.distanceFromCityCenterInKM} km to the city
        </Typography>
      </Box>
    </Box>
  </Card>
);
