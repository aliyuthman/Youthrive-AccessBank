const express = require("express");
const router = express.Router();

const { productArray } = require("../utils/productArray");

const nigerianFood = productArray();

router.route("/").get(async (req, res) => {
  res.send(nigerianFood);
});

router.route("/").post(async (req, res) => {
  const { name, category, price, description } = req.body;

  // Validate required fields
  if (!name || !category || !price || !description) {
    return res
      .status(400)
      .json({ error: "Please provide all required fields." });
  }

  // Create a new product object
  const newProduct = {
    name,
    category,
    price,
    description,
  };

  // Add the new product to the array
  nigerianFood.push(newProduct);

  // Respond with the added product
  res.status(201).json(newProduct);
});

module.exports = router;
