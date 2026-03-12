const express = require("express");
const { getSimulatedPrice } = require("../services/ethPriceService");

const router = express.Router();

router.get("/eth-price", async (req, res) => {
  try {
    const result = await getSimulatedPrice();
    return res.json(result);
  } catch (error) {
    console.error("Error in /api/eth-price handler:", error);
    return res.status(500).json({
      message: "Failed to retrieve ETH price",
    });
  }
});

module.exports = router;
