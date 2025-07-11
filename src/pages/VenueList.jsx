import { Container, Box, Grid } from '@mui/material';
import { FilterPanel } from '../components/FilterPanel/FilterPanel';
import { VenueListGrid } from '../components/VenueList/VenueListGrid';

export const VenueList = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} pt={4}>
        <Grid size={{ xs: 12, md: 3 }}>
          <FilterPanel />
        </Grid>

        <Grid size={{ xs: 12, md: 9 }}>
          <Box
            sx={{
              p: 3,
              backgroundColor: '#fafafa',
              borderRadius: 2,
              minHeight: 400,
            }}
          >
            <VenueListGrid />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
