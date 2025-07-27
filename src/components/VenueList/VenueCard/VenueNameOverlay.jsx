import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  right: 0,
  padding: theme.spacing(1),
  backgroundColor: 'rgba(0,0,0,0.7)',
  borderBottomLeftRadius: 12,
}));

const StyledTypography = styled(Typography)(() => ({
  fontWeight: 600,
  textTransform: 'capitalize',
  color: 'white',
  fontSize: 14,
}));

export const VenueNameOverlay = ({ venueName }) => (
  <StyledBox>
    <StyledTypography>
      {venueName}
    </StyledTypography>
  </StyledBox>
);
