import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { LocationOn } from '@mui/icons-material';

const StyledBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
}));

const StyledLocationOn = styled(LocationOn)(() => ({
  fontSize: 16,
  color: 'rgba(255,255,255,0.7)',
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: 'white',
  textTransform: 'capitalize',
  fontSize: 13,
  marginLeft: theme.spacing(0.5),
}));

export const LocationDisplay = ({ locationName }) => (
  <StyledBox>
    <StyledLocationOn />
    <StyledTypography>{locationName}</StyledTypography>
  </StyledBox>
);
