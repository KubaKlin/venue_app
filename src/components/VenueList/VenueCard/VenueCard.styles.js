import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledCard = styled(Card)(() => ({
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
  },
}));

