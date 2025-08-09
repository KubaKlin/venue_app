import { StyledBox, StyledTypography, StyledButton } from './VenueListSummary.styles';

export const VenueListSummary = ({ venues, startIndex, endIndex }) => {
  return (
    <StyledBox>
      <StyledTypography variant="body1">
        Showing {startIndex + 1}-{Math.min(endIndex, venues.length)} of{' '}
        {venues.length} venues
      </StyledTypography>
      <StyledButton variant="text">Sort</StyledButton>
    </StyledBox>
  );
};
