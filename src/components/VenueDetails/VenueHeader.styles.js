import { Box, Typography } from '@mui/material';
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
  fontWeight: 700,
  textTransform: 'capitalize',
}));

export const StyledLocationTypography = styled(Typography)(() => ({
  textTransform: 'capitalize',
  fontWeight: 500,
}));

export const StyledRightBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(2),
}));

