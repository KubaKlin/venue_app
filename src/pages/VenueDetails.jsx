import {
  Box,
  Typography,
  Container,
  Card,
  Rating,
  Tabs,
  Tab,
  Grid,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { LoadingInfo } from '../components/LoadingInfo/LoadingInfo';
import { ErrorInfo } from '../components/ErrorInfo/ErrorInfo';
import { DescriptionTab } from '../components/VenueDetails/DescriptionTab';
import { GalleryTab } from '../components/VenueDetails/GalleryTab';
import { MapTab } from '../components/VenueDetails/MapTab';

export const VenueDetails = () => {
  const { id } = useParams();
  const [venue, setVenue] = useState(null);
  const [loading, setLoading] = useState(true);
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  useEffect(() => {
    const loadVenue = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `http://localhost:3999/venuesDetails?venueId=${id}`,
        );
        const data = await response.json();
        setVenue(data.length > 0 ? data[0] : null);
      } catch (error) {
        console.error('Error loading venue:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadVenue();
    }
  }, [id]);

  if (loading) {
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
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
              }}
            >
              <Box
                sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 2 }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    textTransform: 'capitalize',
                  }}
                >
                  {venue.name}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ textTransform: 'capitalize', fontWeight: 500 }}
                >
                  {venue.location.postalCode}, {venue.location.name}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  gap: 1,
                  mb: 2,
                }}
              >
                <Typography variant="body2">
                  {venue.numberOfReviews} reviews
                </Typography>
                <Rating
                  value={venue.rating}
                  precision={0.1}
                  readOnly
                  size="medium"
                />
              </Box>
            </Box>

            <Box
              sx={{
                height: 300,
                background: `linear-gradient(45deg, #${Math.floor(Math.random() * 16777215).toString(16)}66, #${Math.floor(Math.random() * 16777215).toString(16)}66)`,
                position: 'relative',
                borderRadius: 2,
                mb: 3,
              }}
            ></Box>

            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs
                value={tabValue}
                onChange={handleTabChange}
                aria-label="venue details tabs"
                sx={{
                  '& .MuiTab-root': {
                    textTransform: 'none',
                    fontSize: '16px',
                    fontWeight: 500,
                  },
                }}
              >
                <Tab
                  label="description"
                  id="tab-0"
                  aria-controls="tabpanel-0"
                />
                <Tab label="gallery" id="tab-1" aria-controls="tabpanel-1" />
                <Tab label="map" id="tab-2" aria-controls="tabpanel-2" />
              </Tabs>
            </Box>

            <Box sx={{ py: 3 }}>
              {tabValue === 0 && <DescriptionTab venue={venue} />}
              {tabValue === 1 && <GalleryTab venue={venue} />}
              {tabValue === 2 && <MapTab venue={venue} />}
            </Box>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}></Grid>
      </Grid>
    </Container>
  );
};
