import { Checkbox } from '@mui/material';
import { styled } from '@mui/material/styles';
import { COLORS } from '../../constants/colors.js';

export const StyledCheckbox = styled(Checkbox)(() => ({
  '&.Mui-checked': {
    color: COLORS.DARK_PRIMARY,
  },
}));
