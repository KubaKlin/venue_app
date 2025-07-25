import { Card, Box, Typography } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { NoMapInfo } from './NoMapInfo';

export const MapTab = ({ venue }) => {
  // Check if coordinates are available in the venue data
  const { latitude, longitude } = venue.location;
  const hasCoordinates =
    latitude && longitude && !isNaN(latitude) && !isNaN(longitude);

  if (!hasCoordinates) {
    return <NoMapInfo venue={venue} />;
  }

  const coordinates = [latitude, longitude];

  return (
    <Card sx={{ mx: 0.5 }} elevation={3}>
      <Box sx={{ height: 400, borderRadius: 1, overflow: 'hidden' }}>
        <MapContainer
          center={coordinates}
          zoom={13}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={coordinates}>
            <Popup>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom>
                  {venue.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {venue.location.name}, {venue.location.postalCode}
                </Typography>
              </Box>
            </Popup>
          </Marker>
        </MapContainer>
      </Box>
    </Card>
  );
};
