import { Container, Card, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { LoadingInfo } from '../components/LoadingInfo/LoadingInfo';
import { ErrorInfo } from '../components/ErrorInfo/ErrorInfo';
import { BookingCard } from '../components/VenueDetails/BookingCard';
import { VenueHeader } from '../components/VenueDetails/VenueHeader';
import { VenueHeroImage } from '../components/VenueDetails/VenueHeroImage';
import { VenueTabsNavigation } from '../components/VenueDetails/VenueTabsNavigation';
import { VenueTabsContent } from '../components/VenueDetails/VenueTabsContent';
import { useVenueDetails } from '../hooks/useVenueDetails';

export const VenueDetails = () => {
  const { id } = useParams();
  const { venue, isLoading } = useVenueDetails(id);
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  if (isLoading) {
    return <LoadingInfo />;
  }

  if (!venue) {
    return <ErrorInfo text={'Venue not found'} />;
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={3} pt={4}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Card elevation={0} sx={{ borderRadius: 2 }}>
            <VenueHeader venue={venue} />
            <VenueHeroImage />
            <VenueTabsNavigation
              tabValue={tabValue}
              onTabChange={handleTabChange}
            />
            <VenueTabsContent tabValue={tabValue} venue={venue} />
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <BookingCard venue={venue} />
        </Grid>
      </Grid>
    </Container>
  );
};
