import { Box, Pagination } from '@mui/material';

export const VenueListPagination = ({
  totalPages,
  currentPage,
  handlePageChange,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mt: 4,
      }}
    >
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        color="primary"
        size="large"
        showFirstButton
        showLastButton
        sx={{
          '& .MuiPaginationItem-root': {
            borderRadius: 20,
          },
          '& .Mui-selected': {
            backgroundColor: '#67AA92',
          },
        }}
      />
    </Box>
  );
};
