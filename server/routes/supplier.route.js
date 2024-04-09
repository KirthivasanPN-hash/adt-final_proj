const express = require("express");
const router = express.Router();
const {
  getSuppliers,
  getSupplier,
  createSupply,
  updateSuppli,
  deleteSuppli,
} = require("../controllers/supplier.controller");

// checking the backend is working
router.get("/", getSuppliers);

router.get("/:id", getSupplier);

router.post("/", createSupply);

router.put("/:id", updateSuppli);

router.delete("/:id", deleteSuppli);

module.exports = router;
