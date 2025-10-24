import { useState, useEffect } from 'react';

const FAVORITES_KEY = 'venue_favorites';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const loadFavorites = () => {
      try {
        const savedFavorites = localStorage.getItem(FAVORITES_KEY);
        if (savedFavorites) {
          const favoriteIds = JSON.parse(savedFavorites);
          setFavorites(favoriteIds);
        }
      } catch (error) {
        console.error('Error loading favorites from localStorage:', error);
      }
    };

    loadFavorites();
  }, []);

  const saveFavorites = (newFavorites) => {
    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
    } catch (error) {
      console.error('Error saving favorites to localStorage:', error);
    }
  };

  const toggleFavorite = (venueId) => {
    setFavorites((prevFavorites) => {
      const isCurrentlyFavorite = prevFavorites.includes(venueId);

      if (isCurrentlyFavorite) {
        const newFavorites = prevFavorites.filter((id) => id !== venueId);
        saveFavorites(newFavorites);
        return newFavorites;
      } else {
        const newFavorites = [...prevFavorites, venueId];
        saveFavorites(newFavorites);
        return newFavorites;
      }
    });
  };

  const isFavorite = (venueId) => {
    return favorites.includes(venueId);
  };

  return {
    toggleFavorite,
    isFavorite,
    favoritesCount: favorites.length,
  };
};
