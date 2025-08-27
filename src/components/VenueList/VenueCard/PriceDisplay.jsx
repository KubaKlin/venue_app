import { StyledTypography } from './PriceDisplay.styles';

export const PriceDisplay = ({ totalPLN }) => (
  <StyledTypography>
    {`${totalPLN.toFixed(0)}zł / night`}
  </StyledTypography>
);
