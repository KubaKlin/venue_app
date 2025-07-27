import { Card, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  marginLeft: theme.spacing(0.5),
  marginRight: theme.spacing(0.5),
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(1),
}));

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
