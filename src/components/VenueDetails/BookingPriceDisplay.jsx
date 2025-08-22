import {
  StyledMainBox,
  StyledRowBox,
  StyledTotalRowBox,
  StyledPriceTypography,
  StyledDivider,
  StyledTotalTypography,
} from './BookingPriceDisplay.styles';

export const BookingPriceDisplay = ({ pricePerDayPLN, totalPLN }) => {
  return (
    <StyledMainBox>
      <StyledRowBox>
        <StyledPriceTypography>per day</StyledPriceTypography>
        <StyledPriceTypography>{`${pricePerDayPLN} zł`}</StyledPriceTypography>
      </StyledRowBox>

      <StyledDivider />

      <StyledTotalRowBox>
        <StyledTotalTypography variant="h6">total</StyledTotalTypography>
        <StyledTotalTypography variant="h6">
          {`${Math.round(totalPLN)} zł`}
        </StyledTotalTypography>
      </StyledTotalRowBox>
    </StyledMainBox>
  );
};
