import { Container, Typography } from '@mui/material';
import { StyledBox } from './shared.styles';

export const YourFavourites = () => {
  return (
    <Container maxWidth="lg">
      <StyledBox>
        <Typography variant="h3" component="h1">
          Your Favourites
        </Typography>
      </StyledBox>
    </Container>
  );
};
