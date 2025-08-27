import { Link } from 'react-router-dom';
import { VenueCardHeader } from './VenueCardHeader';
import { VenueNameOverlay } from './VenueNameOverlay';
import { VenuePriceOverlay } from './VenuePriceOverlay';
import { VenueCardFooter } from './VenueCardFooter';
import { ImageSlider } from './ImageSlider/ImageSlider';
import { FavoriteButton } from './FavoriteButton';
import { StyledCard } from './VenueCard.styles';
import {useBookingCalculations} from "../../BookingCard/hooks/useBookingCalculations.js";

export const VenueCard = ({ venue }) => {
  const { totalPLN } = useBookingCalculations({venue});

  return(
    <StyledCard elevation={0} component={Link} to={`/venue-details/${venue.id}`}>
      <VenueCardHeader>
        <ImageSlider images={venue.cardImages} venueName={venue.name} />
        <FavoriteButton isBigger={false} venueId={venue.id} />
        <VenueNameOverlay venueName={venue.name} />
        <VenuePriceOverlay
          totalPLN={totalPLN}
          locationName={venue.location.name}
        />
      </VenueCardHeader>
      <VenueCardFooter rating={venue.rating} capacity={venue.capacity} />
    </StyledCard>
  );
}
