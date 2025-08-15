import React, { useState } from 'react';
import {
  StyledBox,
  StyledTextField,
  StyledTypography,
} from './VenuePerPageSelector.styles';

export const VenuePerPageSelector = ({
  itemsPerPage,
  onItemsPerPageChange,
}) => {
  const [inputValue, setInputValue] = useState(itemsPerPage);

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const handleBlur = () => {
    const numValue = parseInt(inputValue, 10);
    onItemsPerPageChange(numValue);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.target.blur(); // Trigger blur to apply
    }
  };

  return (
    <StyledBox>
      <StyledTypography variant="body2">Show</StyledTypography>
      <StyledTextField
        size="small"
        value={inputValue}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        type="number"
        inputProps={{
          min: 1,
          max: 100,
          'aria-label': 'venues per page',
        }}
      />
      <StyledTypography variant="body2">on the page</StyledTypography>
    </StyledBox>
  );
};
