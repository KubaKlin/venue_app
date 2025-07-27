import { Container, Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FilterPanel } from '../components/FilterPanel/FilterPanel';
import { VenueListGrid } from '../components/VenueList/VenueListGrid';

const StyledBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: '#fafafa',
  borderRadius: theme.spacing(2),
  minHeight: 400,
}));

export const VenueList = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} pt={4}>
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
