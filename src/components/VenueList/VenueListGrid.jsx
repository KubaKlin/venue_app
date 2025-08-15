import { Box, Grid } from '@mui/material';
import { VenueListSummary } from './VenueListSummary';
import { VenueListPagination } from './VenueListPagination';
import { LoadingInfo } from '../LoadingInfo/LoadingInfo';
import { ErrorInfo } from '../ErrorInfo/ErrorInfo';
import { useVenuesList } from '../../hooks/useVenuesList';
import { usePagination } from '../../hooks/usePagination';
import { VenueCard } from './VenueCard/VenueCard';
import { StyledGrid } from './VenueListGrid.styles';

export const VenueListGrid = () => {
  const { venues, isLoading } = useVenuesList();
  const {
    currentPage,
    itemsPerPage,
    handlePageChange,
    handleItemsPerPageChange,
    startIndex,
    endIndex,
    totalPages,
  } = usePagination(venues.length);

  // Get current page venues
  const currentVenues = venues.slice(startIndex, endIndex);

  if (isLoading) {
    return <LoadingInfo />;
  }

  return (
    <Box>
      <VenueListSummary
        itemsPerPage={itemsPerPage}
        onItemsPerPageChange={handleItemsPerPageChange}
      />

      {venues.length === 0 && !isLoading && (
        <ErrorInfo text={'No venues found'} />
      )}

      <StyledGrid container spacing={3}>
        {currentVenues.map((venue) => (
          <Grid key={venue.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <VenueCard venue={venue} />
          </Grid>
        ))}
      </StyledGrid>

      <VenueListPagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </Box>
  );
};
