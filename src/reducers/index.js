import {combineReducers} from "redux";
// array of products
// import initProducts from "./products";

const productsReducer = (products = [], action) => {
  switch (action.type) {
    
    case "SET_PRODUCTS":
      return [...action.payload];

    case "REMOVE_PRODUCT":
      return products.filter(({name}) => name !== action.payload);

    case "ADD_PRODUCT":
      return [...products, action.payload];

    default:
      return [...products];
  }
};

export default combineReducers({
  products: productsReducer,
});
