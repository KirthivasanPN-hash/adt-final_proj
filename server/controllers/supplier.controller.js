const supply = require("../models/supplier.models");

const getSuppliers = async (req, res) => {
  try {
    const supplies = await supply.find({});
    res.status(200).json(supply);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSupplier = async (req, res) => {
  try {
    const { id } = req.params;
    const suppli = await supply.findById(id);
    res.status(200).json(suppli);
  } catch {
    res.status(500).json({ message: error.message });
  }
};

const createSupply = async (req, res) => {
  try {
    const supplyData = {
      SupplierID: req.body.index,
      Name: req.body.CATEGORY,
      Contact_Person: req.body.BRAND,
      Email: req.body.PRICE_CURRENT,
      Address: req.body.PRICE_RETAIL,
      PRODUCT_SIZE: req.body.PRODUCT_SIZE, // Assuming PRODUCT_SIZE remains unchanged
    };
    const suppli = await supply.create(supplyData);
    res.status(200).json(suppli);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateSuppli = async (req, res) => {
  try {
    const { id } = req.params;
    const suppli = await Product.findByIdAndUpdate(id, req.body);
    if (!suppli) {
      return res.status(404).json({ messages: "No supplier found" });
    }
    const updatedsuppli = await supply.findById(id);
    res.status(200).json(updatedsuppli);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteSuppli = async (req, res) => {
  try {
    const { id } = req.params;
    const suppli = await supply.findByIdAndDelete(id);

    if (!suppli) {
      return res.status(404).json({ message: "Supplier not found" });
    }

    res.status(200).json({ message: "Supplier deleted successfully" });
  } catch {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getSuppliers,
  getSupplier,
  createSupply,
  updateSuppli,
  deleteSuppli,
};
