import { Typography, Rating } from '@mui/material';
import {
  StyledMainBox,
  StyledLeftBox,
  StyledNameTypography,
  StyledLocationTypography,
  StyledRightBox,
} from './VenueHeader.styles';

export const VenueHeader = ({ venue }) => {
  return (
    <StyledMainBox>
      <StyledLeftBox>
        <StyledNameTypography variant="h4">{venue.name}</StyledNameTypography>
        <StyledLocationTypography variant="h6">
          {venue.location.postalCode}, {venue.location.name}
        </StyledLocationTypography>
      </StyledLeftBox>
      <StyledRightBox>
        <Typography variant="body2">{venue.numberOfReviews} reviews</Typography>
        <Rating value={venue.rating} precision={0.1} readOnly size="medium" />
      </StyledRightBox>
    </StyledMainBox>
  );
};
