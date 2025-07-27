import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledBox = styled(Box)(({ theme }) => ({
  height: 300,
  background: `linear-gradient(45deg, #${Math.floor(Math.random() * 16777215).toString(16)}66, #${Math.floor(Math.random() * 16777215).toString(16)}66)`,
  position: 'relative',
  borderRadius: theme.spacing(2),
  marginBottom: theme.spacing(3),
}));

export const VenueHeroImage = () => {
  return <StyledBox />;
};
