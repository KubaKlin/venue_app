import { useState, useEffect } from 'react';

export const useSliderControls = (images) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const handlePrevious = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsLoading(true);
    setCurrentIndex((previousIndex) =>
      previousIndex === 0 ? images.length - 1 : previousIndex - 1,
    );
  };

  const handleNext = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsLoading(true);
    setCurrentIndex((previousIndex) =>
      previousIndex === images.length - 1 ? 0 : previousIndex + 1,
    );
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
  }, [images]);

  return {
    handlePrevious,
    handleNext,
    currentIndex,
    isLoading,
    handleImageLoad,
  };
};
