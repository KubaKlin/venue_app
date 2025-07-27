import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTypography = styled(Typography)(() => ({
  fontSize: 14,
  color: 'white',
  fontWeight: 600,
}));

export const PriceDisplay = ({ pricePerNightInEUR }) => (
  <StyledTypography>
    {`€${pricePerNightInEUR.toFixed(0)} / night`}
  </StyledTypography>
);
