import {
  StyledCard,
  StyledTabs,
  StyledTab,
} from './VenueTabsNavigation.styles';

export const VenueTabsNavigation = ({ tabValue, onTabChange }) => {
  return (
    <StyledCard elevation={3}>
      <StyledTabs
        value={tabValue}
        onChange={onTabChange}
        aria-label="venue details tabs"
      >
        <StyledTab label="description" id="tab-0" aria-controls="tabpanel-0" />
        <StyledTab label="gallery" id="tab-1" aria-controls="tabpanel-1" />
        <StyledTab label="map" id="tab-2" aria-controls="tabpanel-2" />
      </StyledTabs>
    </StyledCard>
  );
};
