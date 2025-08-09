import { StyledBox } from './VenueCardHeader.styles';

export const VenueCardHeader = ({ children, backgroundImage }) => (
  <StyledBox backgroundImage={backgroundImage}>{children}</StyledBox>
);
