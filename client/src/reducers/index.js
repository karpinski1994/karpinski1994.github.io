import {combineReducers} from "redux";
import {FETCH_PRODUCTS_SUCCESS, REMOVE_PRODUCT_SUCCESS, ADD_PRODUCT_SUCCESS} from 'actions';
import {
  FETCH_PROD_STARTED,
  FETCH_PROD_SUCCESS,
  FETCH_PROD_FAILURE,
  ADD_PROD_STARTED,
  ADD_PROD_SUCCESS,
  ADD_PROD_FAILURE,
  REMOVE_PROD_STARTED,
  REMOVE_PROD_SUCCESS,
  REMOVE_PROD_FAILURE,
} from 'actions/types';

// TODO: Reducers should handle async operations, change for ON_SUCCESSFUL_ADD, ON_SUCCESSFSUL_REMOVE etc. 
// TODO: Handle errors generically (throw error), then catch by React boundary and TOAST
// TODO: Handle cashing data using async storage/
const productsReducer = (products = [], action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return [...action.payload];

    case REMOVE_PRODUCT_SUCCESS:
      return [...action.payload];

    case ADD_PRODUCT_SUCCESS:
      return {
        loaded: true,
        products: [...action.payload.products]
      };

    default:
      return [...products];
  }
};


const initialState = {
  loading: false,
  productsList: [],
  error: null
};

function prodsReducer(state = initialState, action) {
console.log('prodsReducer state: ', state);
  switch (action.type) {
    case FETCH_PROD_STARTED:
      return {
        ...state,
        loading: true
      };
    case FETCH_PROD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        productsList: [...action.payload]
      };
    case FETCH_PROD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    case ADD_PROD_STARTED:
      return {
        ...state,
        loading: true
      };
    case ADD_PROD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        productsList: [...action.payload]
      };
    case ADD_PROD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    case REMOVE_PROD_STARTED:
      return {
        ...state,
        loading: true
      };
    case REMOVE_PROD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        productsList: [...action.payload]
      };
    case REMOVE_PROD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}

// TODO: Clean reducer
export default combineReducers({
  products: productsReducer,
  prds: prodsReducer
});
