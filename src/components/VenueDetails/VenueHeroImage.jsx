import { Box } from '@mui/material';

export const VenueHeroImage = () => {
  return (
    <Box
      sx={{
        height: 300,
        background: `linear-gradient(45deg, #${Math.floor(Math.random() * 16777215).toString(16)}66, #${Math.floor(Math.random() * 16777215).toString(16)}66)`,
        position: 'relative',
        borderRadius: 2,
        mb: 3,
      }}
    />
  );
};
