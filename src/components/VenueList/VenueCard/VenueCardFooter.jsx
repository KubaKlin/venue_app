import {
  StyledMainBox,
  StyledFlexBox,
  StyledStar,
  StyledPeople,
  StyledTypography,
} from './VenueCardFooter.styles';

export const VenueCardFooter = ({ rating, capacity }) => (
  <StyledMainBox>
    <StyledFlexBox>
      <StyledStar />
      <StyledTypography variant="body2">Rating: ({rating})</StyledTypography>
    </StyledFlexBox>
    <StyledFlexBox>
      <StyledPeople />
      <StyledTypography variant="body2">capacity: {capacity}</StyledTypography>
    </StyledFlexBox>
  </StyledMainBox>
);
