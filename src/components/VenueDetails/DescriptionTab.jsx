import {
  StyledCard,
  StyledDescriptionTypography,
  StyledDivider,
  StyledFeaturesBox,
  StyledFeatureBox,
  StyledFeatureBoxTypography,
  StyledCheck,
  StyledDetailsBox,
  StyledDetailItemBox,
  StyledBed,
  StyledAccessTime,
  StyledLocationCity,
} from './DescriptionTab.styles';

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
