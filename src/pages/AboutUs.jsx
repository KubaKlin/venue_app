import { Container, Typography } from '@mui/material';
import { StyledBox } from './shared.styles';

export const AboutUs = () => {
  return (
    <Container maxWidth="lg">
      <StyledBox>
        <Typography variant="h3" component="h1">
          About Us
        </Typography>
      </StyledBox>
    </Container>
  );
};
