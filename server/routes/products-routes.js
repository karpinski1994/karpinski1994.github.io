const express = require("express");

const productControllers = require("../controllers/products-controllers");

const router = express.Router();

router.get("/", productControllers.getProducts);

router.post("/", productControllers.createDeckuct);

router.delete('/:pid', productControllers.removeDeckuct);

module.exports = router;
