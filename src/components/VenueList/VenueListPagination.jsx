import { StyledBox, StyledPagination } from './VenueListPagination.styles';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PaginationItem from "@mui/material/PaginationItem";


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
        renderItem={(item) => (
          <PaginationItem
            slots={{
              next: PlayArrowIcon,
              previous: PlayArrowIcon,
            }}
            {...item}
          />
        )}
      />
    </StyledBox>
  );
};
