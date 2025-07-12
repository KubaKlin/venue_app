import { Box, Card, Typography } from '@mui/material';
import { LocationOn, People, Star } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export const VenueCard = ({ venue }) => (
  <Card
    sx={{
      transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
      },
      cursor: 'pointer',
    }}
    elevation={0}
    component={Link}
    to={`/venue-details/${venue.id}`}
  >
    <Box
      sx={{
        height: 150,
        background: `linear-gradient(45deg, #${Math.floor(Math.random() * 16777215).toString(16)}66, #${Math.floor(Math.random() * 16777215).toString(16)}66)`,
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          padding: 1,
          backgroundColor: 'rgba(0,0,0,0.7)',
          borderBottomLeftRadius: 12,
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            textTransform: 'capitalize',
            color: 'white',
            fontSize: 14,
          }}
        >
          {venue.name}
        </Typography>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          padding: 1,
          backgroundColor: 'rgba(0,0,0,0.7)',
          borderTopRightRadius: 12,
        }}
      >
        <Typography
          sx={{ fontSize: 14, color: 'white', fontWeight: 600 }}
        >{`€${venue.pricePerNightInEUR.toFixed(0)} / night`}</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <LocationOn sx={{ fontSize: 16, color: 'rgba(255,255,255,0.7)' }} />
          <Typography
            sx={{
              color: 'white',
              textTransform: 'capitalize',
              fontSize: 13,
              marginLeft: 0.5,
            }}
          >
            {venue.location.name}
          </Typography>
        </Box>
      </Box>
    </Box>

    <Box
      sx={{
        flexGrow: 1,
        p: 1,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '1px solid #ccc',
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Star sx={{ fontSize: 16, color: '#7f8c8d' }} />
        <Typography variant="body2" sx={{ color: '#7f8c8d', ml: 0.5 }}>
          Rating: ({venue.rating})
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <People sx={{ fontSize: 16, color: '#7f8c8d' }} />
        <Typography variant="body2" sx={{ color: '#7f8c8d', ml: 0.5 }}>
          capacity: {venue.capacity}
        </Typography>
      </Box>
    </Box>
  </Card>
);
