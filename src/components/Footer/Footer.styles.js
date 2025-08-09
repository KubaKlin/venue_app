import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const StyledFooter = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '40px',
  paddingBottom: '40px'
}));

export const StyledFooterCopy = styled(Typography)(() => ({
  textAlign: 'center',
  paddingBlock: '56px',
}));

export const StyledFooterWrapper = styled(Box)(() => ({
  display: 'flex',
  maxWidth: '700px',
  margin: '0 auto',
  justifyContent: 'space-around',
}));

export const StyledFooterNav = styled(Box)(() => ({
  borderBottom: '1px solid #000',
  paddingBlock: '56px',
}));


