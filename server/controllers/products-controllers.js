const { validationResult } = require("express-validator");
const mongoose = require("mongoose");

const HttpError = require("../models/http-error");
const Product = require("../models/product");
const products = require("./mock-products");

const getProducts = async (req, res, next) => {
  res.json({...products});
};

const createProduct = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError(
        "Invalid data passed, please check your data and try again.",
        422
      )
    );
  }

  const { title, category, description } = req.body;
  const newProduct = new Product({
    title,
    category,
    description,
  });

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await newProduct.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      "Creating product failed, please try again.",
      500
    );
    return next(error);
  }

  res.status(201).json({ product: newProduct });
};

const deleteProduct = async (req, res, next) => {
  const name = req.params.name;

  let product;
  try {
    product = await Product.findById(name);
  } catch (err) {
    const error = new HttpError("Server error, could not delete product.", 500);
    return next(error);
  }

  if (!product) {
    const error = new HttpError("Could not find product with this name.", 404);
    return next(error);
  }

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await product.remove({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError("Server error, could not delete product.", 500);
    return next(error);
  }

  res.status(200).json({ message: "Product deleted." });
};

exports.getProducts = getProducts;
exports.createProduct = createProduct;
exports.deleteProduct = deleteProduct;
