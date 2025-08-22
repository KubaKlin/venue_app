import { Box, Pagination } from '@mui/material';
import { styled } from '@mui/material/styles';
import { COLORS } from '../../constants/colors';

export const StyledBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: 92,
}));

export const StyledPagination = styled(Pagination)(() => ({
  '& .MuiPaginationItem-root': {
    borderRadius: 20,
  },
  '& .MuiPagination-ul li:first-of-type .MuiPaginationItem-root': {
    transform: 'rotate(180deg)',
  },
  '& .Mui-selected.Mui-selected': {
    backgroundColor: COLORS.PRIMARY,
    color: '#fff',
  },
  '.MuiPaginationItem-text': {
    color: '#000',
    fontSize: '16px',
    fontWeight: 400,
  },

}));
