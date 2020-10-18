const express = require("express");

const productControllers = require("../controllers/products-controllers");

const router = express.Router();

router.get("/", productControllers.getProducts);

router.post("/", productControllers.createProduct);

router.delete("/name", productControllers.deleteProduct);

module.exports = router;
