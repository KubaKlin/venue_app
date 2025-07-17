import { Box } from '@mui/material';

export const VenueCardHeader = ({ children }) => (
  <Box
    sx={{
      height: 150,
      background: `linear-gradient(45deg, #${Math.floor(Math.random() * 16777215).toString(16)}66, #${Math.floor(Math.random() * 16777215).toString(16)}66)`,
      position: 'relative',
    }}
  >
    {children}
  </Box>
);
