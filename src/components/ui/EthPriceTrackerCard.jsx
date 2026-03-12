import React from "react";
import { TrendingDown, TrendingUp } from "lucide-react";

const EthPriceTrackerCard = ({
  ethPrice,
  lastUpdated,
  up,
  loading,
  error,
  ethAmount = 300,
}) => {
  return (
    <div
      className={`rounded-2xl p-6 border border-dark-600/60 shadow-lg backdrop-blur-sm transition-colors duration-500 ${
        up == null ? "bg-dark-800/80" : up ? "bg-green-500/80" : "bg-red-500/80"
      }`}
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-display font-semibold text-white mb-1">
            ETH Price Tracker
          </h2>
          <p className="text-white/80 text-sm">
            Live simulation for Billion Towers building valuation.
          </p>
          {lastUpdated && (
            <p className="text-white/70 text-xs mt-2">
              Last updated: {new Date(lastUpdated).toLocaleTimeString()}
            </p>
          )}
        </div>
        <div className="flex flex-col md:items-end gap-1">
          {error && <span className="text-sm text-white">{error}</span>}
          {loading && !error && (
            <span className="text-sm text-white">Loading ETH price...</span>
          )}
          {!loading && !error && ethPrice != null && (
            <>
              <div className="text-sm text-white/80">
                1 ETH ≈{" "}
                <span className="font-semibold text-white">
                  ${ethPrice.toLocaleString()}
                </span>
              </div>
              <div className="text-lg md:text-2xl font-bold text-white">
                {ethAmount} ETH ≈ $
                {Math.round(ethAmount * ethPrice).toLocaleString()}
              </div>
              {up != null && (
                <div className="flex items-center text-xs text-white mt-1">
                  {up ? (
                    <>
                      <TrendingUp className="w-4 h-4 mr-1" />
                      <span>Price increased since last update</span>
                    </>
                  ) : (
                    <>
                      <TrendingDown className="w-4 h-4 mr-1" />
                      <span>Price decreased since last update</span>
                    </>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EthPriceTrackerCard;

