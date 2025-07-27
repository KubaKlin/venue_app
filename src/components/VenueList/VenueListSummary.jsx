import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
}));

const StyledTypography = styled(Typography)(() => ({
  color: '#7f8c8d',
}));

const StyledButton = styled(Button)(() => ({
  color: '#4caf50',
  fontWeight: 600,
  fontSize: '16px',
  textTransform: 'lowercase',
}));

export const VenueListSummary = ({ venues, startIndex, endIndex }) => {
  return (
    <StyledBox>
      <StyledTypography variant="body1">
        Showing {startIndex + 1}-{Math.min(endIndex, venues.length)} of{' '}
        {venues.length} venues
      </StyledTypography>
      <StyledButton variant="text">
        Sort
      </StyledButton>
    </StyledBox>
  );
};
