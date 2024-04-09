const express = require("express");
const router = express.Router();
const {
  getOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
} = require("../controllers/order.controller"); // Adjust the import to use order-related controller functions

// Checking if the backend is working
router.get("/", getOrders);

router.get("/:id", getOrder);

router.post("/", createOrder);

router.put("/:id", updateOrder);

router.delete("/:id", deleteOrder);

module.exports = router;
