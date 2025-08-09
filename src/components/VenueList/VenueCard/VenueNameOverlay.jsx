import { StyledBox, StyledTypography } from './VenueNameOverlay.styles';

export const VenueNameOverlay = ({ venueName }) => (
  <StyledBox>
    <StyledTypography>{venueName}</StyledTypography>
  </StyledBox>
);
