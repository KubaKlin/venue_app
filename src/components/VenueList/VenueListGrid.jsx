import { Box, Grid } from '@mui/material';

import { useState, useEffect } from 'react';
import { VenueCard } from './VenueCard';
import { VenueListSummary } from './VenueListSummary';
import { VenueListPagination } from './VenueListPagination';
import { VenuesListIsLoading } from './VenuesListIsLoading';
import { VenueListEmpty } from './VenueListEmpty.jsx';

const ITEMS_PER_PAGE = 12;

export const VenueListGrid = () => {
  const [venues, setVenues] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadVenues = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:3999/venues');
        const data = await response.json();
        setVenues(data || []);
      } catch (error) {
        console.error('Error loading venues:', error);
        setVenues([]);
      } finally {
        setLoading(false);
      }
    };

    loadVenues();
  }, []);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    // Scroll to top of venue list when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // pagination
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentVenues = venues.slice(startIndex, endIndex);
  const totalPages = Math.ceil(venues.length / ITEMS_PER_PAGE);

  if (loading) {
    return <VenuesListIsLoading />;
  }

  return (
    <Box>
      <VenueListSummary
        venues={venues}
        startIndex={startIndex}
        endIndex={endIndex}
      />

      {venues.length === 0 && !loading && <VenueListEmpty />}

      {/* Venue Grid */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {currentVenues.map((venue) => (
          <Grid key={venue.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <VenueCard venue={venue} />
          </Grid>
        ))}
      </Grid>

      <VenueListPagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </Box>
  );
};
