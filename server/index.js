// to avoid require we can also use "type": "module", in package.json outside the client folder
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/Item.models");
const productRoute = require("./routes/product.route.js");
const dotenv = require("./dotenv");
const authRoutes = require("./routes/auth.route.js");
const userRoutes = require("./routes/user.route.js");
const supplyRoutes = require("./routes/supplier.route.js");
const transactionRoutes = require("./routes/transaction.route.js");
const orderRoutes = require("./routes/order.route.js");

dotenv.config();
// Middleware for parsing JSON requests

app.use(express.json());

// to accept form data
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/supply", supplyRoutes);
app.use("/api/transaction", transactionRoutes);
app.use("/api/orders", orderRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});

app.get("/", (req, res) => {
  res.send("Backend is working successfully");
});

// // GET operation to fetch all products
// app.get("/api/products", async (req, res) => {
//   try {
//     const products = await Product.find({});
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.get("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findById(id);
//     res.status(200).json(product);
//   } catch {
//     res.status(500).json({ message: error.message });
//   }
// });

// // POST operation to create a new product
// app.post("/api/products", async (req, res) => {
//   try {
//     const productData = {
//       index: req.body.index,
//       CATEGORY: req.body.CATEGORY,
//       BRAND: req.body.BRAND,
//       PRICE_CURRENT: req.body.PRICE_CURRENT,
//       PRICE_RETAIL: req.body.PRICE_RETAIL,
//       PRODUCT_SIZE: req.body.PRODUCT_SIZE,
//     };
//     const product = await Product.create(productData);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Update the product by Id
// app.put("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndUpdate(id, req.body);
//     if (!product) {
//       return res.status(404).json({ messages: "Product not found" });
//     }
//     const updatedProduct = await Product.findById(id);
//     res.status(200).json(updatedProduct);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.delete("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndDelete(id);

//     if (!product) {
//       return res.status(404).json({ message: "Product not found" });
//     }

//     res.status(200).json({ message: "Product deleted successfully" });
//   } catch {
//     res.status(500).json({ message: error.message });
//   }
// });

// Connect to MongoDB and start the server
mongoose
  .connect(
    "mongodb+srv://root:root4567@practicum-cluster.qiwg4la.mongodb.net/inventory_management",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection Failed");
  });
