import { Card, Tabs, Tab } from '@mui/material';
import { styled } from '@mui/material/styles';
import { COLORS } from '../../constants/colors';

const StyledBox = styled(Card)(() => ({
  borderBottom: 1,
  borderColor: 'divider',
  padding: '14px',
}));

const StyledTabs = styled(Tabs)(() => ({
  '& .MuiTab-root': {
    display: 'flex',
    textTransform: 'none',
    fontSize: '16px',
    fontWeight: 500,
    justifyContent: 'space-between',
  },
  '& .Mui-selected': {
    color: COLORS.PRIMARY,
    borderColor: COLORS.PRIMARY,
  },
  '& .MuiTabs-indicator': {
    backgroundColor: COLORS.PRIMARY,
  },
}));

const StyledTab = styled(Tab)(() => ({
  color: COLORS.PRIMARY,
}));

export const VenueTabsNavigation = ({ tabValue, onTabChange }) => {
  return (
    <StyledBox elevation={3}>
      <StyledTabs
        value={tabValue}
        onChange={onTabChange}
        aria-label="venue details tabs"
      >
        <StyledTab label="description" id="tab-0" aria-controls="tabpanel-0" />
        <StyledTab label="gallery" id="tab-1" aria-controls="tabpanel-1" />
        <StyledTab label="map" id="tab-2" aria-controls="tabpanel-2" />
      </StyledTabs>
    </StyledBox>
  );
};
