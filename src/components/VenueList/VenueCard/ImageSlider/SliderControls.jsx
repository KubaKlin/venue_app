import { SliderButton } from './SliderButton';
import { SliderControlsContainer } from './SliderControls.styles';

export const SliderControls = ({ onPrevious, onNext, isControlsBigger }) => {
  return (
    <SliderControlsContainer>
      <SliderButton
        direction="prev"
        onClick={onPrevious}
        ariaLabel="Previous image"
        isControlsBigger={isControlsBigger}
      />

      <SliderButton direction="next" onClick={onNext} ariaLabel="Next image" />
    </SliderControlsContainer>
  );
};
