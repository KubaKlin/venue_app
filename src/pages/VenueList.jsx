import { Grid } from '@mui/material';
import { useState } from 'react';
import { FilterPanel } from '../components/FilterPanel/FilterPanel';
import { FilterToggleButton } from '../components/FilterPanel/FilterToggleButton';
import { VenueListGrid } from '../components/VenueList/VenueListGrid';
import { StyledBox, StyledContainer } from './VenueList.styles';

export const VenueList = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleToggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleCloseFilter = () => {
    setIsFilterOpen(false);
  };

  return (
    <StyledContainer>
      <FilterToggleButton onClick={handleToggleFilter} isOpen={isFilterOpen} />

      <Grid container spacing={{ lg: 9, md: 3, xs: 2 }} mt={{ md: 16, xs: 4 }}>
        <Grid size={{ xs: 12, md: 3 }} mb={{ md: 0, xs: 4 }}>
          <FilterPanel isOpen={isFilterOpen} onClose={handleCloseFilter} />
        </Grid>

        <Grid size={{ xs: 12, md: 9 }}>
          <StyledBox>
            <VenueListGrid />
          </StyledBox>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};
