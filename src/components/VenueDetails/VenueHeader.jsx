import { Typography } from '@mui/material';
import {
  StyledMainBox,
  StyledLeftBox,
  StyledNameTypography,
  StyledLocationTypography,
  StyledRightBox,
  StyledRating,
} from './VenueHeader.styles';

export const VenueHeader = ({ venue }) => {
  return (
    <StyledMainBox>
      <StyledLeftBox>
        <StyledNameTypography>{venue.name}</StyledNameTypography>
        <StyledLocationTypography variant="h6">
          {venue.location.postalCode}, {venue.location.name}
        </StyledLocationTypography>
      </StyledLeftBox>
      <StyledRightBox>
        <Typography variant="body2">{venue.numberOfReviews} reviews</Typography>
        <StyledRating
          value={venue.rating}
          precision={0.1}
          readOnly
          size="large"
        />
      </StyledRightBox>
    </StyledMainBox>
  );
};
