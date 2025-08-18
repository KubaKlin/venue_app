import { StyledBox } from './VenueHeroImage.styles';
import { FavoriteButton } from '../VenueList/VenueCard/FavoriteButton';

export const VenueHeroImage = ({ venue }) => {
  return (
    <StyledBox backgroundImage={venue?.galleryImages[0]}>
      <FavoriteButton venueId={venue.venueId || venue.id} />
    </StyledBox>
  )
};
