import { Card } from '@mui/material';
import { Link } from 'react-router-dom';
import { VenueCardHeader } from './VenueCardHeader';
import { VenueNameOverlay } from './VenueNameOverlay';
import { VenuePriceOverlay } from './VenuePriceOverlay';
import { VenueCardFooter } from './VenueCardFooter';

export const VenueCard = ({ venue }) => (
  <Card
    sx={{
      transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
      },
      cursor: 'pointer',
    }}
    elevation={0}
    component={Link}
    to={`/venue-details/${venue.id}`}
  >
    <VenueCardHeader>
      <VenueNameOverlay venueName={venue.name} />
      <VenuePriceOverlay
        pricePerNightInEUR={venue.pricePerNightInEUR}
        locationName={venue.location.name}
      />
    </VenueCardHeader>

    <VenueCardFooter rating={venue.rating} capacity={venue.capacity} />
  </Card>
);
