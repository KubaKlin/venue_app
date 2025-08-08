import { PriceSlider } from './PriceSlider';
import { CheckboxGroup } from './CheckboxGroup';

export const SectionContent = ({
  section,
  watchedValues,
  handlePriceChange,
  getStateBySection,
  getHandlerBySection,
}) => {
  if (section.type === 'slider') {
    return (
      <PriceSlider
        priceRange={watchedValues.priceRange || [50, 500]}
        handlePriceChange={handlePriceChange}
      />
    );
  }

  const state = getStateBySection(section.id);
  const onChange = getHandlerBySection(section.id);

  return <CheckboxGroup section={section} state={state} onChange={onChange} />;
};
