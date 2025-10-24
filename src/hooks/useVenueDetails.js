import { useState, useEffect } from 'react';

export const useVenueDetails = (id) => {
  const [venue, setVenue] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadVenue = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `http://localhost:3999/venuesDetails?venueId=${id}`,
        );
        const data = await response.json();

        if (data.length > 0) {
          setVenue(data[0]);
        } else {
          setVenue(null);
        }
      } catch (error) {
        console.error('Error loading venue:', error);
        setVenue(null);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      loadVenue();
    }
  }, [id]);

  return { venue, isLoading };
};
