import {combineReducers} from "redux";
import {
  FETCH_PRODUCT_STARTED,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
  ADD_PRODUCT_STARTED,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILURE,
  REMOVE_PRODUCT_STARTED,
  REMOVE_PRODUCT_SUCCESS,
  REMOVE_PRODUCT_FAILURE,
} from 'actions/types';

// TODO: Reducers should handle async operations, change for ON_SUCCESSFUL_ADD, ON_SUCCESSFSUL_REMOVE etc. 
// TODO: Handle errors generically (throw error), then catch by React boundary and TOAST
// TODO: Handle cashing data using async storage/


const initialState = {
  loading: false,
  productsList: [],
  error: null
};

function productsReducer(state = initialState, action) {
console.log('productsReducer state: ', state);
  switch (action.type) {
    case FETCH_PRODUCT_STARTED:
      return {
        ...state,
        loading: true
      };
    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        productsList: [...action.payload]
      };
    case FETCH_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    case ADD_PRODUCT_STARTED:
      return {
        ...state,
        loading: true
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        productsList: [...action.payload]
      };
    case ADD_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    case REMOVE_PRODUCT_STARTED:
      return {
        ...state,
        loading: true
      };
    case REMOVE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        productsList: [...action.payload]
      };
    case REMOVE_PRODUCT_FAILURE:
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
  products: productsReducer
});
