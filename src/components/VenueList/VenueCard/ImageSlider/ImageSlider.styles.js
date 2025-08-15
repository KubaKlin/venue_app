import { Box, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

export const SliderContainer = styled(Box)({
  position: 'relative',
  height: '100%',
  width: '100%',
  overflow: 'hidden',
});

export const SliderImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center',
});

export const SliderControlButton = styled(IconButton)({
  color: 'white',
});
