import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { PriceDisplay } from './PriceDisplay';
import { LocationDisplay } from './LocationDisplay';
import { COLORS } from '../../../constants/colors';

const StyledBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  padding: theme.spacing(1),
  backgroundColor: COLORS.OVERLAY_BACKGROUND,
  borderTopRightRadius: 12,
}));

export const VenuePriceOverlay = ({ pricePerNightInEUR, locationName }) => (
  <StyledBox>
    <PriceDisplay pricePerNightInEUR={pricePerNightInEUR} />
    <LocationDisplay locationName={locationName} />
  </StyledBox>
);
