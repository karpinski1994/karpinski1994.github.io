const { validationResult } = require("express-validator");
// const mongoose = require("mongoose");

// const HttpError = require("../models/http-error");

const mockProducts =  [
    {
      id: "1",
      title: "Javascript",
      questionsQuantity: "30",
      description: 'Javascript descbalbalalsl',
      buttonText: "Start",
      buttonVariant: "contained",
      questions: [
        {
          id: '1',
          question: "Where ES6 was released?",
          answer: "2015?",
          dateCreated: '20-08-20'
        },
        {
          id: '2',
          question: "What map does?",
          answer: "Lets us to overwrite array elements",
          dateCreated: '20-08-20'
        },
      ],
    },
    {
      id: "2",
      title: "React & Redux",
      questionsQuantity: "30",
      description: 'Redux and REact questions something something somehow',
      buttonText: "Start",
      buttonVariant: "contained",
      questions: [
        {
          id: '1',
          question: "What is the first lifecycle of the compoennt?",
          answer: "constructor",
          dateCreated: '20-08-20'
        },
        {
          id: '2',
          question: "What every component should return?",
          answer: "At least one JSX element",
          dateCreated: '20-08-20'
        },
      ],
    },
    {
      id: "3",
      title: "Algos and DS",
      questionsQuantity: "30",
      description: 'algos desc balbalbla',
      buttonText: "Start",
      buttonVariant: "contained",
      questions: [
        {
          id: '1',
          question: "What is the main difference of array and linked list?",
          answer: "Linked list is more dynamic",
          dateCreated: '20-08-20'
        },
        {
          id: '2',
          question: "What are main types of algorithms",
          answer: "Searching, sorting and something",
          dateCreated: '20-08-20'
        },
      ],
    },
  ]
function makeProductList(Product) {

  return Object.freeze({
    add,
    getAll,
    remove,
  });
  async function getAll() {
    let products;
    // TODO: we can one error more generic
    // try {
    //   // products = await Product.find();
    // } catch (err) {
    //   return new HttpError(
    //     "Fetching products failed, please try again later.",
    //     500
    //   );
    // }

    // if (!products || products.length === 0) {
    //   return new HttpError("Could not find any products", 404)
    // }
    // return products;
    return mockProducts
  };

  async function add(req, res, next) {
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
