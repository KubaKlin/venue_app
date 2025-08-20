import { Box, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

export const SocialMediaContainer = styled(Box)(() => ({
  display: 'flex',
  gap: 105,
  flexWrap: 'wrap',
}));

export const SocialIconButton = styled(IconButton)(({ theme }) => ({
  padding: theme.spacing(1),
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
  },
}));

export const SocialIcon = styled('img')({
  width: '32px',
  height: '32px',
});
