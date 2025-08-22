import { Card, Box, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  marginLeft: theme.spacing(0.5),
  marginRight: theme.spacing(0.5),
  boxShadow: '0 2px 4px rgba(0,0,0,0.25)',
  border: '1px inset rgba(0,0,0,0.20)',
  borderRadius: 0,
}));

export const GalleryContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export const GalleryImage = styled(CardMedia)(() => ({
  height: 145,
  width: '100%',
  objectFit: 'cover',
  cursor: 'pointer',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
  },
}));
