import { Typography } from '@mui/material';
import { StyledCard, StyledTypography } from './GalleryTab.styles';

export const GalleryTab = () => (
  <StyledCard elevation={3}>
    <Typography variant="h6" color="text.secondary">
      Gallery coming soon...
    </Typography>
    <StyledTypography variant="body2" color="text.secondary">
      Photo gallery will be available here
    </StyledTypography>
  </StyledCard>
);
