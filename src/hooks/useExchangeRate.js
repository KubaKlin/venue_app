import { useState, useEffect } from 'react';

export const useExchangeRate = () => {
  const [exchangeRate, setExchangeRate] = useState(null);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await Promise.all([
          fetch('https://api.exchangerate-api.com/v4/latest/EUR'),
        ]);

        const [rateData] = await Promise.all(response.map((res) => res.json()));

        setExchangeRate(rateData.rates.PLN);
      } catch (error) {
        console.error('Error fetching exchange rate:', error);
        // if api dont response use default rate
        setExchangeRate(4.25);
      }
    };

    fetchExchangeRate();
  }, []);

  return { exchangeRate };
};
