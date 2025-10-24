import { Box, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

export const SocialMediaContainer = styled(Box)(() => ({
  display: 'flex',
  gap: 55,
  flexWrap: 'wrap',
  marginTop: 40,
}));

export const SocialIconButton = styled(IconButton)(() => ({
  padding: 0,
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
  },
}));

export const SocialIcon = styled('img')({
  width: 40,
  height: 40,
});
