import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { useFavorites } from './hooks/useFavorites';
import {
  FavoriteButtonContainer,
  StyledFavoriteButton,
} from './FavoriteButton.styles';

export const FavoriteButton = ({ venueId }) => {
  const { toggleFavorite, isFavorite } = useFavorites();
  const isVenueFavorite = isFavorite(venueId);

  const handleToggleFavorite = (event) => {
    event.preventDefault();
    toggleFavorite(venueId);
  };

  return (
    <FavoriteButtonContainer>
      <StyledFavoriteButton
        onClick={handleToggleFavorite}
        size="small"
        isFavorite={isVenueFavorite}
        aria-label={
          isVenueFavorite ? 'Remove from favorites' : 'Add to favorites'
        }
      >
        {isVenueFavorite ? <Favorite /> : <FavoriteBorder />}
      </StyledFavoriteButton>
    </FavoriteButtonContainer>
  );
};
