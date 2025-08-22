import React from 'react';
import {
  StyledBox,
  StyledTextField,
  StyledTypography,
} from './VenuePerPageSelector.styles';
import { usePerPageSelector } from './hooks/usePerPageSelector';

export const VenuePerPageSelector = ({
  itemsPerPage,
  onItemsPerPageChange,
}) => {
  const { inputValue, handleChange, handleBlur, handleKeyDown } =
    usePerPageSelector(itemsPerPage, onItemsPerPageChange);

  return (
    <StyledBox>
      <StyledTypography variant="body2">show</StyledTypography>
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
