import { Box, Typography, Divider, Card } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Check, Bed, AccessTime, LocationCity } from '@mui/icons-material';

export const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(4),
  marginLeft: theme.spacing(0.5),
  marginRight: theme.spacing(0.5),
}));

export const StyledDescriptionTypography = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  lineHeight: 1.5,
  fontSize: '20px',
}));

export const StyledDivider = styled(Divider)(({ theme }) => ({
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3),
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

export const StyledFeatureBoxTypography = styled(Typography)(() => ({
  fontSize: 20,
}));

export const StyledCheck = styled(Check)(() => ({
  fontSize: 20,
  color: '#333',
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

export const StyledBed = styled(Bed)(() => ({
  fontSize: 30,
  color: '#333',
}));

export const StyledAccessTime = styled(AccessTime)(() => ({
  fontSize: 30,
  color: '#333',
}));

export const StyledLocationCity = styled(LocationCity)(() => ({
  fontSize: 30,
  color: '#333',
}));

