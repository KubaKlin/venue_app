import { StyledBox } from './VenueHeroImage.styles';
import { FavoriteButton } from '../VenueList/VenueCard/FavoriteButton';
import {ImageSlider} from "../VenueList/VenueCard/ImageSlider/ImageSlider.jsx";

export const VenueHeroImage = ({ venue }) => {
  return (
    <StyledBox>
      <ImageSlider images={venue.galleryImages} venueName={venue.name} />
      <FavoriteButton venueId={venue.venueId || venue.id} />
    </StyledBox>
  )
};
