import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useMediaQuery, useTheme } from '@mui/material';

export const useFilterBanner = () => {
  const { register, handleSubmit, watch, setValue } = useForm();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [isFieldVisible, setIsFieldVisible] = useState(false);

  const guestCount = watch('guests', 1);

  const onSubmit = (data) => {
    console.log('Search data:', data);
  };

  const handleFieldVisibility = () => {
    setIsFieldVisible(!isFieldVisible);
  };

  const getButtonText = () => {
    if (isFieldVisible) {
      return 'I want to be more specific';
    }
    return "I don't want to be that specific";
  };

  const handleGuestDecrease = () => {
    const currentValue = Math.max(1, guestCount - 1);
    setValue('guests', currentValue);
  };

  const handleGuestIncrease = () => {
    const currentValue = guestCount + 1;
    setValue('guests', currentValue);
  };

  useEffect(() => {
    const hideSpecificOnMobile = () => {
      if (isMobile) {
        setIsFieldVisible(true);
      }
    };

    hideSpecificOnMobile();
  }, [isMobile]);

  return {
    register,
    handleSubmit,
    watch,
    setValue,
    isFieldVisible,
    guestCount,
    isMobile,
    onSubmit,
    handleFieldVisibility,
    handleGuestDecrease,
    handleGuestIncrease,
    getButtonText,
  };
};
