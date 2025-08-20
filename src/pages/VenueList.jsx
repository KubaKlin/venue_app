import { Grid } from '@mui/material';
import { FilterPanel } from '../components/FilterPanel/FilterPanel';
import { VenueListGrid } from '../components/VenueList/VenueListGrid';
import { StyledBox, StyledContainer } from './VenueList.styles';

export const VenueList = () => {
  return (
    <StyledContainer>
      <Grid container spacing={{ lg:9, md: 3 }} mt={16}>
        <Grid size={{ xs: 12, md: 3 }}>
          <FilterPanel />
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
