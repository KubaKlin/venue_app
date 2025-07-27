import { Container, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledBox = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  textAlign: 'center',
}));

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
