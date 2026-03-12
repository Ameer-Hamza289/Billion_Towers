import { useEffect, useState } from "react";
import axios from "axios";

const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:3099";

export function useEthPrice() {
  const [price, setPrice] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [up, setUp] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchPrice = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/eth-price`);

        if (!isMounted) return;

        setPrice(response.data.price);
        setLastUpdated(response.data.lastUpdated);
        setUp(response.data.up);
        setError(null);
        setLoading(false);
      } catch (err) {
        if (!isMounted) return;
        setError("Failed to load ETH price");
        setLoading(false);
      }
    };

    // Initial fetch
    fetchPrice();

    // Poll every 10 seconds
    const intervalId = setInterval(fetchPrice, 10000);

    return () => {
      isMounted = false;
      clearInterval(intervalId);
    };
  }, []);

  return {
    price,
    lastUpdated,
    up,
    loading,
    error,
  };
}

