import { Box, Tabs, Tab } from '@mui/material';

export const VenueTabsNavigation = ({ tabValue, onTabChange }) => {
  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs
        value={tabValue}
        onChange={onTabChange}
        aria-label="venue details tabs"
        sx={{
          '& .MuiTab-root': {
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: 500,
          },
        }}
      >
        <Tab label="description" id="tab-0" aria-controls="tabpanel-0" />
        <Tab label="gallery" id="tab-1" aria-controls="tabpanel-1" />
        <Tab label="map" id="tab-2" aria-controls="tabpanel-2" />
      </Tabs>
    </Box>
  );
};
