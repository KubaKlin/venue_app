import { StyledBox, StyledPagination } from './VenueListPagination.styles';

export const VenueListPagination = ({
  totalPages,
  currentPage,
  handlePageChange,
}) => {
  return (
    <StyledBox>
      <StyledPagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        color="primary"
        size="large"
        showFirstButton
        showLastButton
      />
    </StyledBox>
  );
};
