import { Container, Grid } from '@mui/material';
import { FilterPanel } from '../components/FilterPanel/FilterPanel';
import { VenueListGrid } from '../components/VenueList/VenueListGrid';
import { StyledBox } from './VenueList.styles';

export const VenueList = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} mt={4}>
        <Grid size={{ xs: 12, md: 3 }}>
          <FilterPanel />
        </Grid>

        <Grid size={{ xs: 12, md: 9 }}>
          <StyledBox>
            <VenueListGrid />
          </StyledBox>
        </Grid>
      </Grid>
    </Container>
  );
};
