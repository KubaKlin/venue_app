import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { SliderControlButton } from './ImageSlider.styles';

export const SliderButton = ({ direction, onClick, ariaLabel }) => {
  const Icon = direction === 'prev' ? ChevronLeft : ChevronRight;

  return (
    <SliderControlButton onClick={onClick} size="small" aria-label={ariaLabel}>
      <Icon />
    </SliderControlButton>
  );
};
