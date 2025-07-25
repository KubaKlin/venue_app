import { Box } from '@mui/material';
import { DescriptionTab } from './DescriptionTab';
import { GalleryTab } from './GalleryTab';
import { MapTab } from '../MapTab/MapTab';

export const VenueTabsContent = ({ tabValue, venue }) => {
  return (
    <Box sx={{ py: 3 }}>
      {tabValue === 0 && <DescriptionTab venue={venue} />}
      {tabValue === 1 && <GalleryTab venue={venue} />}
      {tabValue === 2 && <MapTab venue={venue} />}
    </Box>
  );
};
