const { validationResult } = require("express-validator");
const mongoose = require("mongoose");

const HttpError = require("../models/http-error");


function makeProductList(Product) {

  return Object.freeze({
    add,
    getAll,
    remove,
  });
  async function getAll() {
    let products;
    // TODO: we can one error more generic
    try {
      products = await Product.find();
    } catch (err) {
      return new HttpError(
        "Fetching products failed, please try again later.",
        500
      );
    }

    if (!products || products.length === 0) {
      return new HttpError("Could not find any products", 404)
    }
    return products;
  };

  async function add(productData) {
     const newProduct = new Product(productData);
    let updatedProducts = [];
    try {
      const sess = await mongoose.startSession();
      sess.startTransaction();
      await newProduct.save({ session: sess });
      updatedProducts = await Product.find();
      await sess.commitTransaction();
    } catch (err) {
       return new HttpError(
        "Creating product failed, please try again.",
        500
      );
    }

    return updatedProducts;
  };

  async function remove(req, res, next) {
    const { pid } = req.params;
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
}
// exports.getProducts = getProducts;
// exports.addProduct = addProduct;
module.exports = makeProductList;
