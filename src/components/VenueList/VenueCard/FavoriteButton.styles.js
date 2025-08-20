import { Box, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { COLORS } from '../../../constants/colors';

export const FavoriteButtonContainer = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 1,
});

export const StyledFavoriteButton = styled(IconButton)(({ isFavorite, isBigger }) => ({
  color: isFavorite ? COLORS.PRIMARY : 'white',
  backgroundColor: COLORS.OVERLAY_BACKGROUND,
  borderRadius: 0,
  borderBottomRightRadius: 10,
  width: isBigger ? 40 : 32,
  height: isBigger ? 40 : 32,
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  transition: 'all 0.2s ease',
}));
