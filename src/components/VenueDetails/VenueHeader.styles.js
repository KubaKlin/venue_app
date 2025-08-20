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
}));

export const StyledNameTypography = styled(Typography)(() => ({
  fontWeight: 600,
  textTransform: 'capitalize',
  fontSize: 40
}));

export const StyledLocationTypography = styled(Typography)(() => ({
  textTransform: 'capitalize',
  fontWeight: 400,
  fontSize: 25
}));

export const StyledRightBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(2),
}));

export const StyledRating = styled(Rating)(() => ({
  '& .MuiRating-iconFilled': {
    color: '#C7981E', // Gold color for filled stars
  },
  '& .MuiRating-iconHover': {
    color: '#FFC107', // Slightly different gold for hover (though it's readOnly)
  },
}));
