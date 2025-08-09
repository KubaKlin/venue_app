import { StyledBox } from './VenueHeroImage.styles';

export const VenueHeroImage = ({ venue }) => {
  return <StyledBox backgroundImage={venue?.heroImageUrl} />;
};
