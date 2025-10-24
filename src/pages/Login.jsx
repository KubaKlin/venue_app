import { Container, Typography } from '@mui/material';
import { StyledBox } from './shared.styles';

export const Login = () => {
  return (
    <Container maxWidth="lg">
      <StyledBox>
        <Typography variant="h3" component="h1">
          Login
        </Typography>
      </StyledBox>
    </Container>
  );
};
