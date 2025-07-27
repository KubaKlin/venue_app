import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(2),
  borderBottom: '1px solid #e0e0e0',
}));

const StyledTypography = styled(Typography)(() => ({
  fontWeight: 600,
  letterSpacing: 2,
  color: '#333',
}));

const StyledButton = styled(Button)(() => ({
  color: '#4caf50',
  textTransform: 'lowercase',
  fontWeight: 400,
}));

export const FilterHeader = ({ onReset }) => {
  return (
    <StyledBox>
      <StyledTypography variant="h6">FILTERS</StyledTypography>
      <StyledButton variant="text" onClick={onReset}>
        reset
      </StyledButton>
    </StyledBox>
  );
};
