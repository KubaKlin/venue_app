import { Card, Box, Typography } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Polish cities coordinates mapping
const cityCoordinates = {
  'warszawa': [52.2297, 21.0122],
  'kraków': [50.0647, 19.9450],
  'gdańsk': [54.3520, 18.6466],
  'wrocław': [51.1079, 17.0385],
  'poznań': [52.4064, 16.9252],
  'łódź': [51.7592, 19.4560],
  'katowice': [50.2649, 19.0238],
  'szczecin': [53.4285, 14.5528],
  'bydgoszcz': [53.1235, 18.0084],
  'lublin': [51.2465, 22.5684],
  'białystok': [53.1325, 23.1688],
  'ustrzyki dolne': [49.4312, 22.5959],
  'zakopane': [49.2992, 19.9496],
  'sopot': [54.4415, 18.5601],
  'kielce': [50.8661, 20.6286],
  'toruń': [53.0138, 18.5984],
  'radom': [51.4027, 21.1471],
  'rzeszów': [50.0412, 21.9991],
  'płock': [52.5463, 19.7065],
  'ełk': [53.8281, 22.3606],
};

export const MapTab = ({ venue }) => {
  const cityName = venue.location.name.toLowerCase();
  const coordinates = cityCoordinates[cityName];

  if (!coordinates) {
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
  }

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
              </Box>
            </Popup>
          </Marker>
        </MapContainer>
      </Box>
    </Card>
  );
};
