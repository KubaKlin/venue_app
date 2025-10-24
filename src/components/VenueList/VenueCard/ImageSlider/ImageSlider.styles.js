import { Box, IconButton, CircularProgress } from '@mui/material';
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
  padding: 0,
  svg: {
    fontSize: 40,
    opacity: 0.8,
  },
});

export const LoadingOverlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  zIndex: 1,
});

export const LoadingSpinner = styled(CircularProgress)({
  color: 'white',
});
