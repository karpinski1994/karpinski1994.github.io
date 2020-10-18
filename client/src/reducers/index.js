import {combineReducers} from "redux";
import {FETCH_PRODUCTS_SUCCESS, REMOVE_PRODUCT_SUCCESS, ADD_PRODUCT_SUCCESS} from 'actions';

// TODO: Reducers should handle async operations, change for ON_SUCCESSFUL_ADD, ON_SUCCESSFSUL_REMOVE etc. 
// TODO: Handle errors generically (throw error), then catch by React boundary and TOAST
// TODO: Handle cashing data
const productsReducer = (products = [], action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return [...action.payload];

    case REMOVE_PRODUCT_SUCCESS:
      return [...action.payload];

    case ADD_PRODUCT_SUCCESS:
      return [...action.payload];

    default:
      return [...products];
  }
};

export default combineReducers({
  products: productsReducer,
});
