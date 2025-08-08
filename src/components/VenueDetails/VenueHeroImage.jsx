import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledBox = styled(Box)(({ theme, backgroundImage }) => ({
  height: 300,
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  position: 'relative',
  borderRadius: theme.spacing(2),
  marginBottom: theme.spacing(3),
}));

export const VenueHeroImage = ({ venue }) => {
  return <StyledBox backgroundImage={venue?.heroImageUrl} />;
};
