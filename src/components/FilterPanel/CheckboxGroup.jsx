import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';

export const CheckboxGroup = ({
  section,
  getStateBySection,
  getHandlerBySection,
}) => {
  const state = getStateBySection(section.id);
  const handler = getHandlerBySection(section.id);

  return (
    <FormGroup>
      {section.options.map((option) => (
        <FormControlLabel
          key={option.key}
          control={
            <Checkbox
              checked={state[option.key] || false}
              onChange={handler(option.key)}
              sx={{
                color: '#4caf50',
                '&.Mui-checked': { color: '#4caf50' },
              }}
            />
          }
          label={option.label}
        />
      ))}
    </FormGroup>
  );
};
