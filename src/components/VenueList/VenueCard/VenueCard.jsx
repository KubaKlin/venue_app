import { Link } from 'react-router-dom';
import { VenueCardHeader } from './VenueCardHeader';
import { VenueNameOverlay } from './VenueNameOverlay';
import { VenuePriceOverlay } from './VenuePriceOverlay';
import { VenueCardFooter } from './VenueCardFooter';
import { StyledCard } from './VenueCard.styles';

export const VenueCard = ({ venue }) => (
  <StyledCard elevation={0} component={Link} to={`/venue-details/${venue.id}`}>
    <VenueCardHeader backgroundImage={venue.cardImageUrl}>
      <VenueNameOverlay venueName={venue.name} />
      <VenuePriceOverlay
        pricePerNightInEUR={venue.pricePerNightInEUR}
        locationName={venue.location.name}
      />
    </VenueCardHeader>
    <VenueCardFooter rating={venue.rating} capacity={venue.capacity} />
  </StyledCard>
);
