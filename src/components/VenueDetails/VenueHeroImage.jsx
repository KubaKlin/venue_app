import { StyledBox } from './VenueHeroImage.styles';
import { FavoriteButton } from '../VenueList/VenueCard/FavoriteButton';
import { ImageSlider } from '../VenueList/VenueCard/ImageSlider/ImageSlider';

export const VenueHeroImage = ({ venue }) => {
  return (
    <StyledBox>
      <ImageSlider images={venue.galleryImages} venueName={venue.name} />
      <FavoriteButton isBigger={true} venueId={venue.venueId || venue.id} />
    </StyledBox>
  );
};
