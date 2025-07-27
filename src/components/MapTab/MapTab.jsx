import { Card, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { NoMapInfo } from './NoMapInfo';

const StyledCard = styled(Card)(({ theme }) => ({
  marginLeft: theme.spacing(0.5),
  marginRight: theme.spacing(0.5),
}));

const StyledMapBox = styled(Box)(({ theme }) => ({
  height: 400,
  borderRadius: theme.spacing(1),
  overflow: 'hidden',
}));

const StyledPopupBox = styled(Box)(() => ({
  textAlign: 'center',
}));

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
    <StyledCard elevation={3}>
      <StyledMapBox>
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
              <StyledPopupBox>
                <Typography variant="h6" gutterBottom>
                  {venue.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {venue.location.name}, {venue.location.postalCode}
                </Typography>
              </StyledPopupBox>
            </Popup>
          </Marker>
        </MapContainer>
      </StyledMapBox>
    </StyledCard>
  );
};
