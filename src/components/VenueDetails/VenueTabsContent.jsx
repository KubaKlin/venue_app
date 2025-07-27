import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { DescriptionTab } from './DescriptionTab';
import { GalleryTab } from './GalleryTab';
import { MapTab } from '../MapTab/MapTab';

const StyledBox = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
}));

export const VenueTabsContent = ({ tabValue, venue }) => {
  return (
    <StyledBox>
      {tabValue === 0 && <DescriptionTab venue={venue} />}
      {tabValue === 1 && <GalleryTab venue={venue} />}
      {tabValue === 2 && <MapTab venue={venue} />}
    </StyledBox>
  );
};
