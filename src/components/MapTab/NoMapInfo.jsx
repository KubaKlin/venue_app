import { Typography } from '@mui/material';
import { StyledCard, StyledTypography } from './NoMapInfo.styles';

export const NoMapInfo = ({ venue }) => {
  return (
    <StyledCard elevation={3}>
      <Typography variant="h6" gutterBottom>
        Location Information
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {venue.location.name}, {venue.location.postalCode}
      </Typography>
      <StyledTypography variant="body2" color="text.secondary">
        Map view not available for this location
      </StyledTypography>
    </StyledCard>
  );
};
