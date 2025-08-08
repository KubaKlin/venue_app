import { Box, Pagination } from '@mui/material';
import { styled } from '@mui/material/styles';
import { COLORS } from '../../constants/colors';

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: theme.spacing(4),
}));

const StyledPagination = styled(Pagination)(() => ({
  '& .MuiPaginationItem-root': {
    borderRadius: 20,
  },
  '& .Mui-selected': {
    backgroundColor: COLORS.PRIMARY,
  },
}));

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
