import { Box, Typography, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledMainBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: '#f6f6f6',
  borderRadius: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const StyledRowBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: theme.spacing(1),
}));

const StyledTotalRowBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

const StyledPriceTypography = styled(Typography)(() => ({
  fontWeight: 500,
}));

const StyledDivider = styled(Divider)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const StyledTotalTypography = styled(Typography)(() => ({
  fontWeight: 600,
}));

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
        <StyledTotalTypography variant="h6">
          total
        </StyledTotalTypography>
        <StyledTotalTypography variant="h6">
          {`${Math.round(totalPLN)} zł`}
        </StyledTotalTypography>
      </StyledTotalRowBox>
    </StyledMainBox>
  );
};
