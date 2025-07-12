import { Card, Typography } from '@mui/material';

export const GalleryTab = () => (
  <Card sx={{ p: 2, textAlign: 'center', mx: 0.5 }} elevation={3}>
    <Typography variant="h6" color="text.secondary">
      Gallery coming soon...
    </Typography>
    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
      Photo gallery will be available here
    </Typography>
  </Card>
);
