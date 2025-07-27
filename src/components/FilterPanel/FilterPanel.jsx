import { Box, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useFilterForm } from '../../hooks/useFilterForm';
import { FilterHeader } from './FilterHeader';
import { FilterAccordion } from './FilterAccordion';
import { filterSections } from './filterConfig';

const StyledPaper = styled(Paper)(({ theme }) => ({
  width: '100%',
  backgroundColor: '#FDFDFD',
  borderRadius: theme.spacing(2),
}));

export const FilterPanel = () => {
  const {
    watchedValues,
    handleReset,
    handlePriceChange,
    getStateBySection,
    getHandlerBySection,
  } = useFilterForm();

  return (
    <StyledPaper elevation={2}>
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
  );
};
