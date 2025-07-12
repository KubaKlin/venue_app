import { useState, useEffect } from 'react';

export const useVenueDetails = (id) => {
  const [venue, setVenue] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadVenue = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `http://localhost:3999/venuesDetails?venueId=${id}`,
        );
        const data = await response.json();
        setVenue(data.length > 0 ? data[0] : null);
      } catch (error) {
        console.error('Error loading venue:', error);
        setVenue(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadVenue();
    }
  }, [id]);

  return { venue, loading };
}; 