import { Card, Tabs, Tab } from '@mui/material';
import { styled } from '@mui/material/styles';
import { COLORS } from '../../constants/colors';

export const StyledCard = styled(Card)(() => ({
  borderBottom: 1,
  borderColor: 'divider',
  padding: '14px',
}));

export const StyledTabs = styled(Tabs)(() => ({
  '& .MuiTab-root': {
    display: 'flex',
    textTransform: 'none',
    fontSize: '16px',
    fontWeight: 600,
    justifyContent: 'space-between',
    width: '33%',
  },
  '& .Mui-selected': {
    color: COLORS.PRIMARY,
    borderColor: COLORS.PRIMARY,
  },
  '& .MuiTabs-indicator': {
    backgroundColor: COLORS.PRIMARY,
  },
}));

export const StyledTab = styled(Tab)(() => ({
  color: COLORS.PRIMARY,
}));

