import { Container, Typography, Box } from '@mui/material';

export const Login = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4, textAlign: 'center' }}>
        <Typography variant="h3" component="h1">
          Login
        </Typography>
      </Box>
    </Container>
  );
}; 