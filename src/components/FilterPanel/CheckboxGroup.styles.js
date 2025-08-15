import { Checkbox } from '@mui/material';
import { styled } from '@mui/material/styles';
import { COLORS } from '../../constants/colors.js';

export const StyledCheckbox = styled(Checkbox)(() => ({
  color: COLORS.DARK_PRIMARY,
  '&.Mui-checked': {
    color: COLORS.DARK_PRIMARY,
  },
}));
