import { Box, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: 400,
}));

export const LoadingInfo = () => {
  return (
    <StyledBox>
      <CircularProgress />
    </StyledBox>
  );
};
