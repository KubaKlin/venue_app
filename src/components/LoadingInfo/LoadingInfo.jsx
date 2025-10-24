import { CircularProgress } from '@mui/material';
import { StyledBox } from './LoadingInfo.styles';

export const LoadingInfo = () => {
  return (
    <StyledBox>
      <CircularProgress />
    </StyledBox>
  );
};
