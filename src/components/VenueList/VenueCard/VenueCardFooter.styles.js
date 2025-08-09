import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { People, Star } from '@mui/icons-material';

export const StyledMainBox = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(1),
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  border: '1px solid #ccc',
  borderBottomRightRadius: 4,
  borderBottomLeftRadius: 4,
}));

export const StyledFlexBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
}));

export const StyledStar = styled(Star)(() => ({
  fontSize: 16,
  color: '#7f8c8d',
}));

export const StyledPeople = styled(People)(() => ({
  fontSize: 16,
  color: '#7f8c8d',
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  color: '#7f8c8d',
  marginLeft: theme.spacing(0.5),
}));

