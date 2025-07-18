import { useForm } from 'react-hook-form';
import { filterDefaultValues } from '../components/FilterPanel/filterDefaults';

export const useFilterForm = () => {
  const { watch, setValue, reset } = useForm({
    defaultValues: filterDefaultValues,
  });

  const watchedValues = watch();

  const handleReset = () => {
    reset();
  };

  const handlePriceChange = (event, newValue) => {
    setValue('priceRange', newValue);
  };

  const createCheckboxHandler = (sectionKey) => (optionKey) => () => {
    const currentValue = watchedValues[sectionKey]?.[optionKey] || false;
    setValue(`${sectionKey}.${optionKey}`, !currentValue);
  };

  const stateMap = {
    amenities: watchedValues.amenities || {},
    'room-amenities': watchedValues.roomAmenities || {},
    neighbourhoods: watchedValues.neighbourhoods || {},
    'handicap-accessibility': watchedValues.handicapAccessibility || {},
  };

  const handlerMap = {
    amenities: createCheckboxHandler('amenities'),
    'room-amenities': createCheckboxHandler('roomAmenities'),
    neighbourhoods: createCheckboxHandler('neighbourhoods'),
    'handicap-accessibility': createCheckboxHandler('handicapAccessibility'),
  };

  const getStateBySection = (sectionId) => stateMap[sectionId] || {};
  const getHandlerBySection = (sectionId) => {
    return handlerMap[sectionId] || (() => {});
  }

  return {
    watchedValues,
    handleReset,
    handlePriceChange,
    getStateBySection,
    getHandlerBySection,
  };
};
