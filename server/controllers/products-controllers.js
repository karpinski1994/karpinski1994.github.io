const { validationResult } = require("express-validator");
const mongoose = require("mongoose");

const HttpError = require("../models/http-error");
const Product = require("../models/product");
const products = require("./mock-products");


const getProducts = async (req, res, next) => {

  // let places;
  let products;
  try {
    products = await Product.find();
  } catch (err) {
    const error = new HttpError(
      'Fetching places failed, please try again later.',
      500
    );
    return next(error);
  }

  // if (!places || places.length === 0) {
  if (!products || products.length === 0) {
    return next(
      new HttpError('Could not find places for the provided user id.', 404)
    );
  }

  res.json({ products });
};

const addProduct = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError(
        "Invalid data passed, please check your data and try again.",
        422
      )
    );
  }
  let updatedProducts = [];
  const { name, category, description } = req.body;
  const newProduct = new Product({
    name,
    category,
    description,
  });
  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await newProduct.save({ session: sess });
    updatedProducts = await Product.find();
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      "Creating product failed, please try again.",
      500
    );
    return next(error);
  }

  res.status(201).json({ products: updatedProducts });
};

const removeProduct = async (req, res, next) => {
  const {pid} = req.params;
  let product;
  let newProducts = [];
  try {
    product = await Product.findById(pid);
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
    newProducts = await Product.find();
  } catch (err) {
    const error = new HttpError("Server error, could not delete product.", 500);
    return next(error);
  }

  res.status(200).json({ message: "Product deleted.", products: newProducts });
};

exports.getProducts = getProducts;
exports.addProduct = addProduct;
exports.removeProduct = removeProduct;
