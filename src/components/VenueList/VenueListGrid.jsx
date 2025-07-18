import { Box, Grid } from '@mui/material';

import { VenueListSummary } from './VenueListSummary';
import { VenueListPagination } from './VenueListPagination';
import { LoadingInfo } from '../LoadingInfo/LoadingInfo';
import { ErrorInfo } from '../ErrorInfo/ErrorInfo';
import { useVenuesList } from '../../hooks/useVenuesList';
import { usePagination } from '../../hooks/usePagination';
import { VenueCard } from './VenueCard/VenueCard';

const ITEMS_PER_PAGE = 12;

export const VenueListGrid = () => {
  const { venues, isLoading } = useVenuesList();
  const { currentPage, handlePageChange, startIndex, endIndex, totalPages } =
    usePagination(venues.length, ITEMS_PER_PAGE);

  // Get current page venues
  const currentVenues = venues.slice(startIndex, endIndex);

  if (isLoading) {
    return <LoadingInfo />;
  }

  return (
    <Box>
      <VenueListSummary
        venues={venues}
        startIndex={startIndex}
        endIndex={endIndex}
      />

      {venues.length === 0 && !isLoading && (
        <ErrorInfo text={'No venues found'} />
      )}

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
