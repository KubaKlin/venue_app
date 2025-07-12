import { 
  Box, 
  Typography, 
  Container, 
  Card, 
  CardContent, 
} from '@mui/material';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { LoadingInfo } from '../components/LoadingInfo/LoadingInfo';
import { ErrorInfo } from '../components/ErrorInfo/ErrorInfo';

export const VenueDetails = () => {
  const { id } = useParams();
  const [venue, setVenue] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadVenue = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:3999/venuesDetails?venueId=${id}`);
        const data = await response.json();
        // The endpoint returns an array, so we take the first (and should be only) result
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
    return <ErrorInfo text={'Venue not found'}/>;
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Card elevation={0} sx={{ borderRadius: 2 }}>
        <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              textTransform: 'capitalize',
            }}
        >
          {venue.name}
        </Typography>
        <Typography variant="h6" sx={{ textTransform: 'capitalize', fontWeight: 500 }}>
          {venue.location.postalCode}, {venue.location.name}
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 500 }}>
          {venue.rating} / 5.0
        </Typography>
        <Box
          sx={{
            height: 300,
            background: `linear-gradient(45deg, #${Math.floor(Math.random() * 16777215).toString(16)}66, #${Math.floor(Math.random() * 16777215).toString(16)}66)`,
            position: 'relative',
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
          }}
        >
        </Box>

        <CardContent sx={{ p: 4 }}>
          <Typography variant="body2" component="div">{venue.description}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};