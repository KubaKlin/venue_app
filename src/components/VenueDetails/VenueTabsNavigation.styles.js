import { Card, Tabs, Tab } from '@mui/material';
import { styled } from '@mui/material/styles';
import { COLORS } from '../../constants/colors';

export const StyledCard = styled(Card)(({ theme }) => ({
  borderBottom: 1,
  borderColor: 'divider',
  padding: '14px',
  marginLeft: theme.spacing(0.5),
  marginRight: theme.spacing(0.5),
  boxShadow: '0 2px 4px rgba(0,0,0,0.25)',
  borderRadius: 0
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
