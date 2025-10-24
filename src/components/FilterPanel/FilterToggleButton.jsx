import { useTheme, useMediaQuery } from '@mui/material';
import { StyledButton } from './FilterToggleButton.styles';

export const FilterToggleButton = ({ onClick, isOpen }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  if (!isMobile) return null;

  return (
    <StyledButton
      size="medium"
      onClick={onClick}
      aria-expanded={isOpen}
      isOpen={isOpen}
    >
      Filters
    </StyledButton>
  );
};
