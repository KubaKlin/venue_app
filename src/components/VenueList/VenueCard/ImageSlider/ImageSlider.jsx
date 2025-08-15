import { SliderControls } from './SliderControls';
import { SliderContainer, SliderImage } from './ImageSlider.styles';
import { useSliderControls } from './hooks/useSliderControls';

export const ImageSlider = ({ images, venueName }) => {
  const { handlePrevious, handleNext, currentIndex } =
    useSliderControls(images);

  return (
    <SliderContainer>
      <SliderImage
        src={images[currentIndex]}
        alt={`${venueName} - Image ${currentIndex + 1}`}
      />

      {images.length > 1 && (
        <SliderControls onPrevious={handlePrevious} onNext={handleNext} />
      )}
    </SliderContainer>
  );
};
