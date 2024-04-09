const express = require("express");
const router = express.Router();
const Transaction = require("../models/transaction.models"); // Adjust the import to use the Transaction model
const {
  getTransactions,
  getTransaction,
  createTransaction,
  updateTransaction,
  deleteTransaction,
} = require("../controllers/transaction.controller"); // Adjust the import to use transaction-related controller functions

// Checking if the backend is working
router.get("/", getTransactions);

router.get("/:id", getTransaction);

router.post("/", createTransaction);

router.put("/:id", updateTransaction);

router.delete("/:id", deleteTransaction);

module.exports = router;
