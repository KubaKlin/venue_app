import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: 300,
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

const StyledTypography = styled(Typography)(() => ({
  color: '#7f8c8d',
}));

export const ErrorInfo = ({ text }) => {
  return (
    <StyledBox>
      <StyledTypography variant="h6">
        {text}
      </StyledTypography>
    </StyledBox>
  );
};
