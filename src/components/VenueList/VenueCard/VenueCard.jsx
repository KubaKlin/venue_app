import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { VenueCardHeader } from './VenueCardHeader';
import { VenueNameOverlay } from './VenueNameOverlay';
import { VenuePriceOverlay } from './VenuePriceOverlay';
import { VenueCardFooter } from './VenueCardFooter';

const StyledCard = styled(Card)(() => ({
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
  },
}));

export const VenueCard = ({ venue }) => (
  <StyledCard
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
  </StyledCard>
);
