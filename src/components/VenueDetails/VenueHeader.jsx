import { Box, Typography, Rating } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledMainBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
}));

const StyledLeftBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(2),
}));

const StyledNameTypography = styled(Typography)(() => ({
  fontWeight: 700,
  textTransform: 'capitalize',
}));

const StyledLocationTypography = styled(Typography)(() => ({
  textTransform: 'capitalize',
  fontWeight: 500,
}));

const StyledRightBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(2),
}));

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
