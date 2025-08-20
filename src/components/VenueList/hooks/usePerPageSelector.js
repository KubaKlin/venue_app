import { useState } from 'react';

export const usePerPageSelector = (itemsPerPage, onItemsPerPageChange) => {
  const [inputValue, setInputValue] = useState(itemsPerPage);

  const handleChange = (event) => {
    const value = event.target.value;

    // allow empty input for a better ux
    if (value === '') {
      setInputValue(value);
      return;
    }

    // Only allow positive numbers
    const numValue = parseInt(value, 10);
    if (!isNaN(numValue) && numValue >= 0) {
      setInputValue(value);
    }
  };

  const handleBlur = () => {
    if (inputValue === '' || inputValue === '0') {
      setInputValue(1);
      onItemsPerPageChange(1);
      return;
    }

    let numValue = parseInt(inputValue, 10);

    if (isNaN(numValue) || numValue < 1) {
      numValue = 1;
    } else if (numValue > 100) {
      numValue = 100;
    }

    setInputValue(numValue);
    onItemsPerPageChange(numValue);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.target.blur();
    }
  };

  return {
    inputValue,
    handleChange,
    handleBlur,
    handleKeyDown,
  };
};
