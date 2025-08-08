import { Box, Typography, Divider, Card } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Check, Bed, AccessTime, LocationCity } from '@mui/icons-material';

const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(4),
  marginLeft: theme.spacing(0.5),
  marginRight: theme.spacing(0.5),
}));

const StyledDescriptionTypography = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  lineHeight: 1.5,
  fontSize: '20px',
}));

const StyledDivider = styled(Divider)(({ theme }) => ({
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3),
}));

const StyledFeaturesBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(3),
}));

const StyledFeatureBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

const StyledFeatureBoxTypography = styled(Typography)(() => ({
  fontSize: 20,
}));

const StyledCheck = styled(Check)(() => ({
  fontSize: 20,
  color: '#333',
}));

const StyledDetailsBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

const StyledDetailItemBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

const StyledBed = styled(Bed)(() => ({
  fontSize: 30,
  color: '#333',
}));

const StyledAccessTime = styled(AccessTime)(() => ({
  fontSize: 30,
  color: '#333',
}));

const StyledLocationCity = styled(LocationCity)(() => ({
  fontSize: 30,
  color: '#333',
}));

export const DescriptionTab = ({ venue }) => (
  <StyledCard elevation={3}>
    <StyledDescriptionTypography variant="body1">
      {venue.description}
    </StyledDescriptionTypography>

    <StyledDivider />

    <StyledFeaturesBox>
      {venue.features.map((feature, index) => (
        <StyledFeatureBox key={index}>
          <StyledCheck />
          <StyledFeatureBoxTypography variant="body2">
            {feature}
          </StyledFeatureBoxTypography>
        </StyledFeatureBox>
      ))}
    </StyledFeaturesBox>

    <StyledDivider />

    <StyledDetailsBox>
      <StyledDetailItemBox>
        <StyledBed />
        <StyledFeatureBoxTypography variant="body2">
          {venue.sleapingDetails.amoutOfBeds} beds /{' '}
          {venue.sleapingDetails.maxCapacity} sleeping places
        </StyledFeatureBoxTypography>
      </StyledDetailItemBox>

      <StyledDetailItemBox>
        <StyledAccessTime />
        <StyledFeatureBoxTypography variant="body2">
          check-in {venue.checkInHour} / check-out {venue.checkOutHour}
        </StyledFeatureBoxTypography>
      </StyledDetailItemBox>

      <StyledDetailItemBox>
        <StyledLocationCity />
        <StyledFeatureBoxTypography variant="body2">
          {venue.distanceFromCityCenterInKM} km to the city
        </StyledFeatureBoxTypography>
      </StyledDetailItemBox>
    </StyledDetailsBox>
  </StyledCard>
);
