import {
  StyledMainBox,
  StyledFlexBox,
  StyledStar,
  StyledPeople,
  StyledTypography,
  StyledNumber,
} from './VenueCardFooter.styles';
import peopleIco from '../../../assets/people_ico.svg';

export const VenueCardFooter = ({ rating, capacity }) => (
  <StyledMainBox>
    <StyledFlexBox>
      <StyledStar />
      <StyledTypography variant="body2">
        rating
        <StyledNumber>
          {rating}
        </StyledNumber>
      </StyledTypography>
    </StyledFlexBox>
    <StyledFlexBox>
      <StyledPeople src={peopleIco} />
      <StyledTypography variant="body2">
        capacity
        <StyledNumber>
          {capacity}
        </StyledNumber>
      </StyledTypography>
    </StyledFlexBox>
  </StyledMainBox>
);
