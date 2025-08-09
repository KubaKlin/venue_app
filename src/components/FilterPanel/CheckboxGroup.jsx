import { FormControlLabel, FormGroup } from '@mui/material';
import { StyledCheckbox } from './CheckboxGroup.styles';

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
