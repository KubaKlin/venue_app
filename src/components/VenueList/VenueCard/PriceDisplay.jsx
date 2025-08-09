import { StyledTypography } from './PriceDisplay.styles';

export const PriceDisplay = ({ pricePerNightInEUR }) => (
  <StyledTypography>
    {`€${pricePerNightInEUR.toFixed(0)} / night`}
  </StyledTypography>
);
