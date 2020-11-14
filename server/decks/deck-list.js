const { validationResult } = require("express-validator");
// const mongoose = require("mongoose");

// const HttpError = require("../models/http-error");

let mockDecks =  [
    {
      id: "1",
      title: "Javascript ipt ipt",
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
function makeDeckList(Deck) {

  return Object.freeze({
    add,
    getAll,
    findById,
    remove,
  });
  async function getAll() {
    // TODO: we can one error more generic
    // try {
    //   // products = await Deck.find();
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
    return mockDecks
  };

  async function findById({deckId}) {
    const found =  mockDecks.find(({id}) => id === deckId);
    console.log("FIND BY ID")
    console.log('mockDecks: ', mockDecks);
    console.log('found: ', found);
    return found;
  }

  async function add(newDeck) {
    try {
 mockDecks.push(newDeck);
      console.log('newDeck: ', newDeck);
      console.log('mockDecks: ', mockDecks);
    }
     catch(err) {
       console.log("ERR: ",err)
     }
     
      return mockDecks;
    }

    res.status(201).json({ products: updatedProducts });
  };

  async function remove({deckId}) {
  console.log('deckId: ', deckId);
    // const { pid } = req.params;
    // let product;
    // let newProducts = [];
    // try {
    //   product = await Deck.findById(pid);
    // } catch (err) {
    //   const error = new HttpError("Server error, could not delete product.", 500);
    //   return next(error);
    // }
    // if (!product) {
    //   const error = new HttpError("Could not find product with this name.", 404);
    //   return next(error);
    // }

    // try {
    //   const sess = await mongoose.startSession();
    //   sess.startTransaction();
    //   await product.remove({ session: sess });
    //   await sess.commitTransaction();
    //   newProducts = await Deck.find();
    // } catch (err) {
    //   const error = new HttpError("Server error, could not delete product.", 500);
    //   return next(error);
    // }
    try {
      mockDecks =  mockDecks.filter(({id}) => id !== deckId);
    }
    catch (err) {
      console.log("ERROR: ", err)
    }
    
    return mockDecks;
    // res.status(200).json({ message: "Deck deleted.", products: newProducts });
  };





// exports.getProducts = getProducts;
// exports.addProduct = addProduct;
module.exports = makeDeckList;
