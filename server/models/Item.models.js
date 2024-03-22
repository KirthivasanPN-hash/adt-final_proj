// index
// 1
// SHIPPING_LOCATION
// 79936
// DEPARTMENT
// "Deli"
// CATEGORY
// "Hummus, Dips, & Salsa"
// BREADCRUMBS
// "Deli/Hummus, Dips, & Salsa"
// SKU
// 105455228
// PRODUCT_URL
// "https://www.walmart.com/ip/Marketside-Roasted-Garlic-Hummus-10-Oz/1054…"
// PRODUCT_NAME
// "Marketside Roasted Garlic Hummus, 10 Oz"
// BRAND
// "Marketside"
// PRICE_RETAIL
// 2.67
// PRICE_CURRENT
// 2.67
// PRODUCT_SIZE
// 10
// RunDate
// "2022-09-11 21:20:04"
// tid

const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  index: {
    type: Number,
    required: true,
  },
  SHIPPING_LOCATION: {
    type: Number,
    required: false,
  },
  DEPARTMENT: {
    type: String,
    required: false,
  },
  CATEGORY: {
    type: String,
    required: true,
  },
  BREADCRUMBS: {
    type: String,
    required: false,
  },
  SKU: {
    type: Number,
    required: false,
  },
  PRODUCT_URL: {
    type: String,
    required: false,
  },
  PRODUCT_NAME: {
    type: String,
    required: false,
  },
  BRAND: {
    type: String,
    required: true,
  },
  PRICE_RETAIL: {
    type: Number,
    required: true,
  },
  PRICE_CURRENT: {
    type: Number,
    required: true,
  },
  PRODUCT_SIZE: {
    type: Number,
    required: true,
  },
  RunDate: {
    type: String,
    required: false,
  },
  tid: {
    type: Number,
    required: false,
  },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
