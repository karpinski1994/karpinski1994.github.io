import axios from 'axios';
const SET_PRODUCTS = "SET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";
const REMOVE_PRODUCT = "REMOVE_PRODUCT";

export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: product,
});

export const removeProduct = (productName) => ({
  type: REMOVE_PRODUCT,
  payload: productName,
});

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: [...products]
  }
};

export const fetchProducts = () => {
  return function (dispatch) {
    return axios.get("http://localhost:3000/products").then(({ data }) => {
      console.log('ACTIONS fetchProducts axios data: ', data);
      dispatch(setProducts(data));
    });
  };
};
