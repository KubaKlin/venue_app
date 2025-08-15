import { useState } from 'react';

export const useSliderControls = (images) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setCurrentIndex((previousIndex) =>
      previousIndex === 0 ? images.length - 1 : previousIndex - 1,
    );
  };

  const handleNext = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setCurrentIndex((previousIndex) =>
      previousIndex === images.length - 1 ? 0 : previousIndex + 1,
    );
  };

  return {
    handlePrevious,
    handleNext,
    currentIndex,
  };
};
