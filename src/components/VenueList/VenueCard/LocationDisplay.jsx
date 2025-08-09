import { StyledBox, StyledLocationOn, StyledTypography } from './LocationDisplay.styles';

export const LocationDisplay = ({ locationName }) => (
  <StyledBox>
    <StyledLocationOn />
    <StyledTypography>{locationName}</StyledTypography>
  </StyledBox>
);
