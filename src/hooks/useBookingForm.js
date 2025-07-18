import { useForm } from 'react-hook-form';

export const useBookingForm = () => {
  const { control, watch, setValue, handleSubmit } = useForm({
    defaultValues: {
      startDate: null,
      endDate: null,
      isOneDayBooking: false,
    },
    mode: 'onChange',
  });

  const watchedValues = watch();
  const { startDate, endDate, isOneDayBooking } = watchedValues;

  const handleStartDateChange = (newDate) => {
    setValue('startDate', newDate, { shouldValidate: true });
    if (isOneDayBooking) {
      setValue('endDate', newDate, { shouldValidate: true });
    }
  };

  const handleEndDateChange = (newDate) => {
    setValue('endDate', newDate, { shouldValidate: true });
  };

  const handleOneDayToggle = (checked) => {
    setValue('isOneDayBooking', checked, { shouldValidate: true });
    if (checked && startDate) {
      setValue('endDate', startDate, { shouldValidate: true });
    } else if (!checked && startDate) {
      setValue('endDate', null, { shouldValidate: true });
    }
  };

  return {
    control,
    handleSubmit,
    startDate,
    endDate,
    isOneDayBooking,
    handleStartDateChange,
    handleEndDateChange,
    handleOneDayToggle,
  };
};
