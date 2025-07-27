import { Box, Typography, Divider, Card } from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  CheckCircle,
  Bed,
  AccessTime,
  LocationCity,
} from '@mui/icons-material';

const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(4),
  marginLeft: theme.spacing(0.5),
  marginRight: theme.spacing(0.5),
}));

const StyledDescriptionTypography = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  lineHeight: 1.5,
}));

const StyledDivider = styled(Divider)(({ theme }) => ({
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3),
}));

const StyledFeaturesBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(3),
}));

const StyledFeatureBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

const StyledCheckCircle = styled(CheckCircle)(() => ({
  fontSize: 20,
  color: 'green',
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
          <StyledCheckCircle />
          <Typography variant="body2">{feature}</Typography>
        </StyledFeatureBox>
      ))}
    </StyledFeaturesBox>

    <StyledDivider />

    <StyledDetailsBox>
      <StyledDetailItemBox>
        <StyledBed />
        <Typography variant="body2">
          {venue.sleapingDetails.amoutOfBeds} beds /{' '}
          {venue.sleapingDetails.maxCapacity} sleeping places
        </Typography>
      </StyledDetailItemBox>

      <StyledDetailItemBox>
        <StyledAccessTime />
        <Typography variant="body2">
          check-in {venue.checkInHour} / check-out {venue.checkOutHour}
        </Typography>
      </StyledDetailItemBox>

      <StyledDetailItemBox>
        <StyledLocationCity />
        <Typography variant="body2">
          {venue.distanceFromCityCenterInKM} km to the city
        </Typography>
      </StyledDetailItemBox>
    </StyledDetailsBox>
  </StyledCard>
);
