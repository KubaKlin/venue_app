import { Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { LoadingInfo } from '../components/LoadingInfo/LoadingInfo';
import { ErrorInfo } from '../components/ErrorInfo/ErrorInfo';
import { BookingCard } from '../components/BookingCard/BookingCard';
import { BackButton } from '../components/VenueDetails/BackButton';
import { VenueHeader } from '../components/VenueDetails/VenueHeader';
import { VenueHeroImage } from '../components/VenueDetails/VenueHeroImage';
import { VenueTabsNavigation } from '../components/VenueDetails/VenueTabsNavigation';
import { VenueTabsContent } from '../components/VenueDetails/VenueTabsContent';
import { useVenueDetails } from '../hooks/useVenueDetails';
import { BookingContact } from '../components/BookingContact/BookingContact';
import { StyledContainer, StyledCard } from './VenueDetails.styles';

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
    <StyledContainer maxWidth="lg">
      <BackButton />
      <Grid container spacing={14} pt={2}>
        <Grid size={{ xs: 12, md: 7.5 }}>
          <StyledCard elevation={0}>
            <VenueHeader venue={venue} />
            <VenueHeroImage venue={venue} />
            <VenueTabsNavigation
              tabValue={tabValue}
              onTabChange={handleTabChange}
            />
            <VenueTabsContent tabValue={tabValue} venue={venue} />
          </StyledCard>
        </Grid>
        <Grid size={{ xs: 12, md: 4.5 }}>
          <BookingCard venue={venue} />
          <BookingContact venue={venue} />
        </Grid>
      </Grid>
    </StyledContainer>
  );
};
