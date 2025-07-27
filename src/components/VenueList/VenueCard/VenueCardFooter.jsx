import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { People, Star } from '@mui/icons-material';

const StyledMainBox = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(1),
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  border: '1px solid #ccc',
  borderBottomRightRadius: 4,
  borderBottomLeftRadius: 4,
}));

const StyledFlexBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
}));

const StyledStar = styled(Star)(() => ({
  fontSize: 16,
  color: '#7f8c8d',
}));

const StyledPeople = styled(People)(() => ({
  fontSize: 16,
  color: '#7f8c8d',
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: '#7f8c8d',
  marginLeft: theme.spacing(0.5),
}));

export const VenueCardFooter = ({ rating, capacity }) => (
  <StyledMainBox>
    <StyledFlexBox>
      <StyledStar />
      <StyledTypography variant="body2">Rating: ({rating})</StyledTypography>
    </StyledFlexBox>
    <StyledFlexBox>
      <StyledPeople />
      <StyledTypography variant="body2">capacity: {capacity}</StyledTypography>
    </StyledFlexBox>
  </StyledMainBox>
);
