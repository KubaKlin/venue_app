import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledBox = styled(Box)(({ backgroundImage }) => ({
  height: 150,
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  position: 'relative',
}));

export const VenueCardHeader = ({ children, backgroundImage }) => (
  <StyledBox backgroundImage={backgroundImage}>{children}</StyledBox>
);
