import { TextField, InputAdornment } from '@mui/material';

export const FilterTextField = ({
  label,
  startIcon,
  endIcon,
  type = 'text',
  value,
  readOnly = false,
  ...props
}) => {
  const defaultSx = {
    backgroundColor: '#fff',
    borderRadius: 1,
  };

  const slotProps = {
    input: {},
  };

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
    <TextField
      label={label}
      type={type}
      variant="outlined"
      sx={defaultSx}
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
