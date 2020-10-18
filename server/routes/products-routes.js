const express = require("express");

const productControllers = require("../controllers/products-controllers");

const router = express.Router();

router.get("/", productControllers.getProducts);

router.post("/", productControllers.addProduct);

router.delete('/:pid', productControllers.removeProduct);

module.exports = router;
