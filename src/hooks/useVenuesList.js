import { useState, useEffect } from 'react';

export const useVenuesList = () => {
  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadVenues = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:3999/venues');
        const data = await response.json();
        setVenues(data || []);
      } catch (error) {
        console.error('Error loading venues:', error);
        setVenues([]);
      } finally {
        setLoading(false);
      }
    };

    loadVenues();
  }, []);

  return { venues, loading };
};
