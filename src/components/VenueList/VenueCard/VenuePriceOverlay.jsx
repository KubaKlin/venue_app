import { PriceDisplay } from './PriceDisplay';
import { LocationDisplay } from './LocationDisplay';
import { StyledBox } from './VenuePriceOverlay.styles';

export const VenuePriceOverlay = ({ totalPLN, locationName }) => (
  <StyledBox>
    <PriceDisplay totalPLN={totalPLN} />
    <LocationDisplay locationName={locationName} />
  </StyledBox>
);
