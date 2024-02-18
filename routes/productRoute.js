const express = require("express");
const router = express.Router();
const {
  getProducts,
  createProduct,
  getProductById,
  updateProductById,
  deleteProductById,
} = require("../controllers/productController.js");

router.get("/", getProducts);

router.post("/create", createProduct);

router.get("/:id", getProductById);

router.put("/:id", updateProductById);

router.get("/:id", deleteProductById);

module.exports = router;
