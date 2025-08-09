import { Box, Typography, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledMainBox = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  marginTop: theme.spacing(1),
}));

export const StyledRowBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: theme.spacing(1),
}));

export const StyledTotalRowBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

export const StyledPriceTypography = styled(Typography)(() => ({
  fontWeight: 500,
}));

export const StyledDivider = styled(Divider)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

export const StyledTotalTypography = styled(Typography)(() => ({
  fontWeight: 600,
}));

