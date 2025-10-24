import { DescriptionTab } from './DescriptionTab';
import { GalleryTab } from './GalleryTab';
import { MapTab } from '../MapTab/MapTab';
import { StyledBox } from './VenueTabsContent.styles';

export const VenueTabsContent = ({ tabValue, venue }) => {
  return (
    <StyledBox>
      {tabValue === 0 && <DescriptionTab venue={venue} />}
      {tabValue === 1 && <GalleryTab venue={venue} />}
      {tabValue === 2 && <MapTab venue={venue} />}
    </StyledBox>
  );
};
