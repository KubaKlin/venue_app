import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { COLORS } from '../../../constants/colors';

export const StyledBox = styled(Box)(() => ({
  position: 'absolute',
  top: 0,
  right: 0,
  padding: '4px 19px',
  backgroundColor: COLORS.OVERLAY_BACKGROUND,
  borderBottomLeftRadius: 12,
}));

export const StyledTypography = styled(Typography)(() => ({
  fontWeight: 600,
  textTransform: 'capitalize',
  color: 'white',
  fontSize: 16,
}));
