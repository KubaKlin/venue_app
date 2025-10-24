import { Container, Typography } from '@mui/material';
import { StyledBox } from './shared.styles';

export const StartHosting = () => {
  return (
    <Container maxWidth="lg">
      <StyledBox>
        <Typography variant="h3" component="h1">
          Start Hosting
        </Typography>
      </StyledBox>
    </Container>
  );
};
