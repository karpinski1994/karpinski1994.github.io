import {combineReducers} from "redux";
// array of products
// import initProducts from "./products";

// TODO: Reducers should handle async operations, change for ON_SUCCESSFUL_ADD, ON_SUCCESSFSUL_REMOVE etc. 
// TODO: Handle errors generically (throw error), then catch by React boundary and TOAST
// TODO: Handle cashing data
const productsReducer = (products = [], action) => {
console.log('action: ', action);
  switch (action.type) {
    case "FETCH_PRODUCTS_SUCCESS":
      return [...action.payload];

    case "REMOVE_PRODUCT_SUCCESS":
      return [...action.payload];

    case "ADD_PRODUCT_SUCCESS":
      return [...action.payload];

    default:
      return [...products];
  }
};

export default combineReducers({
  products: productsReducer,
});
