// routes/productRoutes.js
const express = require("express");
const Product = require("../models/Product");
const router = express.Router();

// CREATE a new product
router.post("/products", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).send(newProduct);
  } catch (err) {
    res.status(400).send(err);
  }
});

// READ all products
router.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (err) {
    res.status(500).send(err);
  }
});

// READ a product by ID
router.get("/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).send("Product not found");
    res.status(200).send(product);
  } catch (err) {
    res.status(500).send(err);
  }
});

// UPDATE a product by ID
router.put("/products/:id", async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedProduct) return res.status(404).send("Product not found");
    res.status(200).send(updatedProduct);
  } catch (err) {
    res.status(400).send(err);
  }
});

// DELETE a product by ID
router.delete("/products/:id", async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) return res.status(404).send("Product not found");
    res.status(200).send(`Product with ID ${req.params.id} deleted`);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
