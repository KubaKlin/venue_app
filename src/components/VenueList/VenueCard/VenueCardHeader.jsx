import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledBox = styled(Box)(() => ({
  height: 150,
  background: `linear-gradient(45deg, #${Math.floor(Math.random() * 16777215).toString(16)}66, #${Math.floor(Math.random() * 16777215).toString(16)}66)`,
  position: 'relative',
}));

export const VenueCardHeader = ({ children }) => (
  <StyledBox>
    {children}
  </StyledBox>
);
