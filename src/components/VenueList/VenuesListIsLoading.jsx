import { Box, CircularProgress } from '@mui/material';

export const LoadingInfo = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 400,
      }}
    >
      <CircularProgress />
    </Box>
  );
};
