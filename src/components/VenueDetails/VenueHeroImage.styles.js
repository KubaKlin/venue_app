import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledBox = styled(Box)(({ backgroundImage, theme }) => ({
  height: 350,
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  position: 'relative',
  marginBottom: 52,
  [theme.breakpoints.down('sm')]: {
    height: 200,
    marginBottom: 0,
  },
}));
