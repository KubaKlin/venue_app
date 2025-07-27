import { Box, Tabs, Tab } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledBox = styled(Box)(() => ({
  borderBottom: 1,
  borderColor: 'divider',
}));

const StyledTabs = styled(Tabs)(() => ({
  '& .MuiTab-root': {
    textTransform: 'none',
    fontSize: '16px',
    fontWeight: 500,
  },
}));

export const VenueTabsNavigation = ({ tabValue, onTabChange }) => {
  return (
    <StyledBox>
      <StyledTabs
        value={tabValue}
        onChange={onTabChange}
        aria-label="venue details tabs"
      >
        <Tab label="description" id="tab-0" aria-controls="tabpanel-0" />
        <Tab label="gallery" id="tab-1" aria-controls="tabpanel-1" />
        <Tab label="map" id="tab-2" aria-controls="tabpanel-2" />
      </StyledTabs>
    </StyledBox>
  );
};
