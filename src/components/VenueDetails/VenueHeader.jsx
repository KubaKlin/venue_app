import { Typography, useMediaQuery, useTheme } from '@mui/material';
import {
  StyledMainBox,
  StyledLeftBox,
  StyledNameTypography,
  StyledLocationTypography,
  StyledRightBox,
  StyledRating,
} from './VenueHeader.styles';

export const VenueHeader = ({ venue }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
          size={isMobile ? 'small' : 'large'}
        />
      </StyledRightBox>
    </StyledMainBox>
  );
};
