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
import checkIcon from '../../assets/check_ico.svg';
import bedIcon from '../../assets/bed_ico.svg';
import townIcon from '../../assets/town_ico.svg';
import clockIcon from '../../assets/clock_ico.svg';

export const DescriptionTab = ({ venue }) => (
  <StyledCard elevation={3}>
    <StyledDescriptionTypography variant="body1">
      {venue.description}
    </StyledDescriptionTypography>

    <StyledDivider />

    <StyledFeaturesBox>
      {venue.features.map((feature, index) => (
        <StyledFeatureBox key={index}>
          <StyledCheck src={checkIcon} />
          <StyledFeatureBoxTypography variant="body2">
            {feature}
          </StyledFeatureBoxTypography>
        </StyledFeatureBox>
      ))}
    </StyledFeaturesBox>

    <StyledDivider />

    <StyledDetailsBox>
      <StyledDetailItemBox>
        <StyledBed src={bedIcon} />
        <StyledFeatureBoxTypography variant="body2">
          {venue.sleapingDetails.amoutOfBeds} beds /{' '}
          {venue.sleapingDetails.maxCapacity} sleeping places
        </StyledFeatureBoxTypography>
      </StyledDetailItemBox>

      <StyledDetailItemBox>
        <StyledAccessTime src={clockIcon} />
        <StyledFeatureBoxTypography variant="body2">
          check-in {venue.checkInHour} / check-out {venue.checkOutHour}
        </StyledFeatureBoxTypography>
      </StyledDetailItemBox>

      <StyledDetailItemBox>
        <StyledLocationCity src={townIcon} />
        <StyledFeatureBoxTypography variant="body2">
          {venue.distanceFromCityCenterInKM} km to the city
        </StyledFeatureBoxTypography>
      </StyledDetailItemBox>
    </StyledDetailsBox>
  </StyledCard>
);
