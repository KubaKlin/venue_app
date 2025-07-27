import { Card, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  marginLeft: theme.spacing(0.5),
  marginRight: theme.spacing(0.5),
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(1),
}));

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
