import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Star } from '@mui/icons-material';

export const StyledMainBox = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(1),
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  border: '1px solid #ccc',
}));

export const StyledFlexBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
}));

export const StyledStar = styled(Star)(() => ({
  fontSize: 22,
  color: 'rgba(0,0,0,0.65)',
}));

export const StyledPeople = styled('img')(() => ({
  color: 'rgba(0,0,0,0.65)',
}));

export const StyledTypography = styled(Typography)(() => ({
  display: 'flex',
  alignItems: 'flex-end',
  color: 'rgba(0,0,0,0.65)',
  marginLeft: 8,
  fontSize: 14,
}));

export const StyledNumber = styled(Typography)(() => ({
  color: 'rgba(0,0,0,0.65)',
  marginLeft: 8,
  fontSize: 16
}));


