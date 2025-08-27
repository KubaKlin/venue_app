import { SliderControls } from './SliderControls';
import { 
  SliderContainer, 
  SliderImage, 
  LoadingOverlay, 
  LoadingSpinner 
} from './ImageSlider.styles';
import { useSliderControls } from './hooks/useSliderControls';

export const ImageSlider = ({ images, venueName }) => {
  const { 
    handlePrevious, 
    handleNext, 
    currentIndex, 
    isLoading, 
    handleImageLoad, 
  } = useSliderControls(images);

  return (
    <SliderContainer>
      <SliderImage
        src={images[currentIndex]}
        alt={`${venueName} - Image ${currentIndex + 1}`}
        onLoad={handleImageLoad}
      />

      {isLoading && (
        <LoadingOverlay>
          <LoadingSpinner size={40} />
        </LoadingOverlay>
      )}

      {images.length > 1 && (
        <SliderControls onPrevious={handlePrevious} onNext={handleNext} />
      )}
    </SliderContainer>
  );
};
