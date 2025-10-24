import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useNavigate } from 'react-router-dom';
import { StyledBackButton } from './BackButton.styles';

export const BackButton = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <StyledBackButton
      onClick={handleBackClick}
      startIcon={<ChevronLeftIcon />}
      variant="text"
      size="medium"
    >
      back to results
    </StyledBackButton>
  );
};
