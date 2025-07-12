import { Box, Typography } from '@mui/material';

export const ErrorInfo = ({ text }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 300,
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Typography variant="h6" sx={{ color: '#7f8c8d' }}>
        {text}
      </Typography>
    </Box>
  );
};
