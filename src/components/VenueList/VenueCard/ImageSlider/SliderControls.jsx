import { SliderButton } from './SliderButton';
import { SliderControlsContainer } from './SliderControls.styles';

export const SliderControls = ({ onPrevious, onNext }) => {
  return (
    <SliderControlsContainer>
      <SliderButton
        direction="prev"
        onClick={onPrevious}
        ariaLabel="Previous image"
      />

      <SliderButton direction="next" onClick={onNext} ariaLabel="Next image" />
    </SliderControlsContainer>
  );
};
