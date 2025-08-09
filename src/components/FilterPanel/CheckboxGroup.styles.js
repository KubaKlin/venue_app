import { Checkbox } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledCheckbox = styled(Checkbox)(() => ({
  color: '#4caf50',
  '&.Mui-checked': {
    color: '#4caf50',
  },
}));
