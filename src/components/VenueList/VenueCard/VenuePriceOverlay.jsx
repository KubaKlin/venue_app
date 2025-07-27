import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { PriceDisplay } from './PriceDisplay';
import { LocationDisplay } from './LocationDisplay';

const StyledBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  padding: theme.spacing(1),
  backgroundColor: 'rgba(0,0,0,0.7)',
  borderTopRightRadius: 12,
}));

export const VenuePriceOverlay = ({ pricePerNightInEUR, locationName }) => (
  <StyledBox>
    <PriceDisplay pricePerNightInEUR={pricePerNightInEUR} />
    <LocationDisplay locationName={locationName} />
  </StyledBox>
);
