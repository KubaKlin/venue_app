import { Box, Typography, Rating } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledMainBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
}));

export const StyledLeftBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(1),
  },
}));

export const StyledNameTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  textTransform: 'capitalize',
  fontSize: 40,
  [theme.breakpoints.down('sm')]: {
    fontSize: 20,
  },
}));

export const StyledLocationTypography = styled(Typography)(({ theme }) => ({
  textTransform: 'capitalize',
  fontWeight: 400,
  fontSize: 25,
  [theme.breakpoints.down('sm')]: {
    fontSize: 14,
  },
}));

export const StyledRightBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(2),
}));

export const StyledRating = styled(Rating)(({ theme }) => ({
  width: 'fit-content',
  minWidth: '120px',
  '& .MuiRating-iconFilled': {
    color: '#C7981E', // Gold color for filled stars
  },
  '& .MuiRating-root': {
    display: 'flex',
    alignItems: 'center',
  },
  '& .MuiRating-icon': {
    fontSize: 'inherit',
  },
  [theme.breakpoints.down('md')]: {
    minWidth: '90px',
  },
}));
