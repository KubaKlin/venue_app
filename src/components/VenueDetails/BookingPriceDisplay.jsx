import { Typography } from '@mui/material';
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
        <Typography variant="body2">per day</Typography>
        <StyledPriceTypography variant="body2">
          {`${pricePerDayPLN} zł`}
        </StyledPriceTypography>
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
