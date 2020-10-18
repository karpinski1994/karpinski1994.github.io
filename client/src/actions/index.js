import axios from "axios";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const ADD_PRODUCT_SUCCESS = "ADD_PRODUCT_SUCCESS";
export const REMOVE_PRODUCT_SUCCESS = "REMOVE_PRODUCT_SUCCESS";
const API_URL = "http://localhost:5000/api/products";

export const removeProduct = (productName) => ({
  type: REMOVE_PRODUCT,
  payload: productName,
});

export const fetchProductsSuccess = (products) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: [...products],
  };
};

export const removeProductSuccess = (products) => {
  return {
    type: REMOVE_PRODUCT_SUCCESS,
    payload: [...products],
  };
};

export const addProductSuccess = (products) => {
  return {
    type: ADD_PRODUCT_SUCCESS,
    payload: {
      loading: false,
      error: false,
      products
    },
  };
};

export const fetchProducts = () => {
  return function (dispatch) {
    // TODO: Handle fetch products failures
    return axios.get(API_URL).then(({ data }) => {
      dispatch(fetchProductsSuccess([...data.products]));
    });
  };
};

export const removeProductAction = (id) => {
  return function (dispatch) {
    return axios.delete(`${API_URL}/${id}`).then(({data}) => {
      dispatch(removeProductSuccess(data.products))
    });
  };
};

export const addProductAction = (product) => {
  return function (dispatch) {
    return axios({
      method: "post",
      url: API_URL,
      data: JSON.stringify(product),
      headers: { "Content-Type": "application/json" },
    }).then(({data}) => {
      dispatch(addProductSuccess(data.products))
    })
  };
};
