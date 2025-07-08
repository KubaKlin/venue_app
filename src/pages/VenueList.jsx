import { Container, Typography, Box, Grid } from '@mui/material';
import { FilterPanel } from "../components/FilterPanel/FilterPanel";

export const VenueList = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} pt={4}>
        <Grid item xs={12} md={3}>
          <FilterPanel />
        </Grid>

        <Grid item xs={12} md={9}>
          <Box sx={{
            p: 3,
            backgroundColor: '#fafafa',
            borderRadius: 2,
            minHeight: 400
          }}>
            <Typography variant="h6" sx={{ mb: 2}}>
              Venue list
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}; 