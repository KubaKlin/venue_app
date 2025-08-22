import { Box, useTheme, useMediaQuery } from '@mui/material';
import { useFilterForm } from '../../hooks/useFilterForm';
import { FilterHeader } from './FilterHeader';
import { FilterAccordion } from './FilterAccordion';
import { filterSections } from './filterConfig';
import { StyledPaper, StyledMobileOverlay } from './FilterPanel.styles';

export const FilterPanel = ({ isOpen, onClose }) => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down('md'));

  const {
    watchedValues,
    handleReset,
    handlePriceChange,
    getStateBySection,
    getHandlerBySection,
  } = useFilterForm();

  const handleOverlayClick = () => {
    onClose();
  };

  return (
    <>
      <StyledMobileOverlay
        isOpen={isMobileView && isOpen}
        onClick={handleOverlayClick}
      />
      <StyledPaper elevation={2} isMobile={isMobileView} isOpen={isOpen}>
        <FilterHeader onReset={handleReset} />

        <form>
          <Box>
            {filterSections.map((section) => (
              <FilterAccordion
                key={section.id}
                section={section}
                watchedValues={watchedValues}
                handlePriceChange={handlePriceChange}
                getStateBySection={getStateBySection}
                getHandlerBySection={getHandlerBySection}
              />
            ))}
          </Box>
        </form>
      </StyledPaper>
    </>
  );
};
