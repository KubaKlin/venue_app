import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Star } from '@mui/icons-material';

export const StyledMainBox = styled(Box)(() => ({
  flexGrow: 1,
  padding: '5px 10px',
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
  fontWeight: 400,
  lineHeight: '24px',
}));

export const StyledNumber = styled('span')(() => ({
  color: 'rgba(0,0,0,0.65)',
  marginLeft: 8,
  fontSize: 16,
  fontWeight: 500,
  lineHeight: '24px',
}));
