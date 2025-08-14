import { InputAdornment } from '@mui/material';
import { StyledTextField } from './FilterTextField.styles';

export const FilterTextField = ({
  isVisible,
  label,
  startIcon,
  endIcon,
  type = 'text',
  value,
  readOnly = false,
  ...props
}) => {
  const slotProps = {
    input: {},
  };

  if (isVisible) {
    return null;
  }

  if (startIcon) {
    slotProps.input.startAdornment = (
      <InputAdornment position="start">{startIcon}</InputAdornment>
    );
  }

  if (endIcon) {
    slotProps.input.endAdornment = (
      <InputAdornment position="end">{endIcon}</InputAdornment>
    );
  }

  return (
    <StyledTextField
      label={label}
      type={type}
      variant="outlined"
      slotProps={slotProps}
      value={value}
      InputProps={{
        readOnly: readOnly,
        ...slotProps.input,
      }}
      {...props}
    />
  );
};
