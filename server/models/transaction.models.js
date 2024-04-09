const mongoose = require("mongoose");

const transactionSchema = mongoose.Schema(
  {
    TransactionID: {
      type: Number,
      required: true,
    },
    ItemID: {
      type: Number,
      required: true,
    },
    TransactionType: {
      type: String,
      required: true,
    },
    Quantity: {
      type: Number,
      required: true,
    },
    TransactionDate: {
      type: Date,
      default: Date.now,
    },
    Notes: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
