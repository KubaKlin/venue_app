import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { COLORS } from '../../../constants/colors';

export const StyledBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  padding: theme.spacing(1),
  backgroundColor: COLORS.OVERLAY_BACKGROUND,
  borderTopRightRadius: 12,
}));
