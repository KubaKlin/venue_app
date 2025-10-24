import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const SliderControlsContainer = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: 0,
  right: 0,
  transform: 'translateY(-50%)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 8px',
  zIndex: 2,
});
