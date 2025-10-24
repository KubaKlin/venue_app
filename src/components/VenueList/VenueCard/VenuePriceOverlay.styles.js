import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { COLORS } from '../../../constants/colors';

export const StyledBox = styled(Box)(() => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  padding: '11px 26px 11px 11px',
  backgroundColor: COLORS.OVERLAY_BACKGROUND,
  borderTopRightRadius: 12,
}));
