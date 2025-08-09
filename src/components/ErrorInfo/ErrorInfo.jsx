import { StyledBox, StyledTypography } from './ErrorInfo.styles';

export const ErrorInfo = ({ text }) => {
  return (
    <StyledBox>
      <StyledTypography variant="h6">{text}</StyledTypography>
    </StyledBox>
  );
};
