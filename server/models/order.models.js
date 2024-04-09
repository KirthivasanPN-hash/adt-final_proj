const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    OrderID: {
      type: Number,
      required: true,
    },
    SupplierID: {
      type: Number,
      required: true,
    },
    OrderDate: {
      type: Date,
      required: true,
      default: Date.now,
    },
    ExpectedDeliveryDate: {
      type: Date,
      required: true,
    },
    Status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
