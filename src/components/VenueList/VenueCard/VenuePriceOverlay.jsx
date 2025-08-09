import { PriceDisplay } from './PriceDisplay';
import { LocationDisplay } from './LocationDisplay';
import { StyledBox } from './VenuePriceOverlay.styles';

export const VenuePriceOverlay = ({ pricePerNightInEUR, locationName }) => (
  <StyledBox>
    <PriceDisplay pricePerNightInEUR={pricePerNightInEUR} />
    <LocationDisplay locationName={locationName} />
  </StyledBox>
);
