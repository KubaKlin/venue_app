import { Box, Typography, Divider, Card } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledCard = styled(Card)(({ theme }) => ({
  padding: '56px 72px',
  marginLeft: theme.spacing(0.5),
  marginRight: theme.spacing(0.5),
  boxShadow: '0 2px 4px rgba(0,0,0,0.25)',
  border: '1px inset rgba(0,0,0,0.20)',
  borderRadius: 0,
  [theme.breakpoints.down('sm')]: {
    padding: 0,
    border: 'none',
    boxShadow: 'none',
  },
}));

export const StyledDescriptionTypography = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  lineHeight: 2.2,
  fontSize: '20px',
  fontWeight: 300,
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
  },
}));

export const StyledDivider = styled(Divider)(({ theme }) => ({
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));

export const StyledFeaturesBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(3),
}));

export const StyledFeatureBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

export const StyledFeatureBoxTypography = styled(Typography)(({ theme }) => ({
  fontSize: 20,
  marginLeft: 16,
  [theme.breakpoints.down('sm')]: {
    fontSize: 14,
  },
}));

export const StyledCheck = styled('img')(({ theme }) => ({
  fontSize: 20,
  color: '#333',
  [theme.breakpoints.down('sm')]: {
    width: 20,
  },
}));

export const StyledDetailsBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

export const StyledDetailItemBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

export const StyledBed = styled('img')(({ theme }) => ({
  fontSize: 30,
  color: '#333',
  [theme.breakpoints.down('sm')]: {
    width: 30,
  },
}));

export const StyledAccessTime = styled('img')(({ theme }) => ({
  fontSize: 30,
  color: '#333',
  [theme.breakpoints.down('sm')]: {
    width: 30,
  },
}));

export const StyledLocationCity = styled('img')(({ theme }) => ({
  fontSize: 30,
  color: '#333',
  [theme.breakpoints.down('sm')]: {
    width: 30,
  },
}));
