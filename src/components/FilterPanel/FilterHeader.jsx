import { StyledBox, StyledTypography, StyledButton } from './FilterHeader.styles';

export const FilterHeader = ({ onReset }) => {
  return (
    <StyledBox>
      <StyledTypography variant="h6">FILTERS</StyledTypography>
      <StyledButton variant="text" onClick={onReset}>
        reset
      </StyledButton>
    </StyledBox>
  );
};
