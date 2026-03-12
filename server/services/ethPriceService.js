const axios = require("axios");

// In-memory state for price simulation and caching
let cachedPrice = null;
let lastUpdated = null;
let lastPrice = null;
let lastUp = null;
let lastUpdateTimestamp = 0;

const fetchInitialEthPrice = async () => {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/simple/price",
      {
        params: {
          ids: "ethereum",
          vs_currencies: "usd",
        },
        timeout: 5000,
      }
    );

    const price = response.data?.ethereum?.usd;
    if (typeof price === "number" && price > 0) {
      return price;
    }
  } catch (error) {
    console.error("Failed to fetch initial ETH price:", error.message);
  }

  // Fallback: apply same ±2% to previous value (or default seed when none)
  const DEFAULT_ETH_SEED = 3000;
  const base = lastPrice ?? DEFAULT_ETH_SEED;
  const delta = (Math.random() * 0.04) - 0.02;
  return base * (1 + delta);
};

/**
 * Returns current simulated ETH price with 6s cache and ±2% variation.
 * @returns {Promise<{ price: number, lastUpdated: string, up: boolean }>}
 */
const getSimulatedPrice = async () => {
  const now = Date.now();

  if (cachedPrice !== null && now - lastUpdateTimestamp < 6000) {
    return {
      price: cachedPrice,
      lastUpdated,
      up: lastUp ?? true,
    };
  }

  if (lastPrice === null) {
    lastPrice = await fetchInitialEthPrice();
  }

  const deltaPercentage = (Math.random() * 0.04) - 0.02;
  const newPrice = lastPrice * (1 + deltaPercentage);
  const up = newPrice > lastPrice;

  lastPrice = newPrice;
  cachedPrice = Number(newPrice.toFixed(2));
  lastUp = up;
  lastUpdated = new Date().toISOString();
  lastUpdateTimestamp = now;

  return {
    price: cachedPrice,
    lastUpdated,
    up,
  };
};

module.exports = { getSimulatedPrice };
