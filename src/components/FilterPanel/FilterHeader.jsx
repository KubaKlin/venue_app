import { Box, Typography, Button } from '@mui/material';

export const FilterHeader = ({ onReset }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        p: 2,
        borderBottom: '1px solid #e0e0e0',
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          letterSpacing: 2,
          color: '#333',
        }}
      >
        FILTERS
      </Typography>
      <Button
        variant="text"
        onClick={onReset}
        sx={{
          color: '#4caf50',
          textTransform: 'lowercase',
          fontWeight: 400,
        }}
      >
        reset
      </Button>
    </Box>
  );
};
