import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

export const StyledFooter = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '80px',
  paddingBottom: '56px',
  backgroundColor: '#FDFDFD',
  [theme.breakpoints.down('sm')]: {
    paddingInline: 20,
    marginTop: 30
  },
}));

export const StyledFooterCopy = styled(Typography)(() => ({
  textAlign: 'center',
}));

export const StyledFooterWrapper = styled(Box)(() => ({
  display: 'flex',
  maxWidth: '590px',
  margin: '56px auto 0',
  justifyContent: 'space-between',
}));

export const StyledFooterNav = styled(Box)(() => ({
  borderBottom: '1px solid #000',
  paddingBottom: '56px',
  marginBottom: '56px',
}));
