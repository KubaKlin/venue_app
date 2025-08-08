import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCheckbox = styled(Checkbox)(() => ({
  color: '#4caf50',
  '&.Mui-checked': {
    color: '#4caf50',
  },
}));

export const CheckboxGroup = ({ section, state, onChange }) => {
  return (
    <FormGroup>
      {section.options.map((option) => (
        <FormControlLabel
          key={option.key}
          control={
            <StyledCheckbox
              checked={state[option.key] || false}
              onChange={onChange(option.key)}
            />
          }
          label={option.label}
        />
      ))}
    </FormGroup>
  );
};
