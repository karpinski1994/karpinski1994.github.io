import axios from "axios";

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
} from "./types";

const API_URL = "http://localhost:5000/api/products";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const ADD_PRODUCT_SUCCESS = "ADD_PRODUCT_SUCCESS";
export const REMOVE_PRODUCT_SUCCESS = "REMOVE_PRODUCT_SUCCESS";

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
      loaded: true,
      error: false,
      products,
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
    return axios.delete(`${API_URL}/${id}`).then(({ data }) => {
      dispatch(removeProductSuccess(data.products));
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
    })
      .then(({ data }) => {
        dispatch(addProductSuccess(data.products));
      })
      .catch((err) => {
        dispatch(addProdFailure(err.message));
      });
  };
};

// ----------------------------------------------------------------------

export const addProd = (product) => {
  return (dispatch) => {
    dispatch(addProdStarted());
    axios({
      method: "post",
      url: API_URL,
      data: JSON.stringify(product),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        dispatch(addProdSuccess(res.data));
      })
      .catch((err) => {
        dispatch(addProdFailure(err.message));
      });
  };
};

const addProdSuccess = (updatedProducts) => ({
  type: ADD_PROD_SUCCESS,
  payload: [...updatedProducts]
});

const addProdStarted = () => ({
  type: ADD_PROD_STARTED,
});

const addProdFailure = (error) => {
  return {
    type: ADD_PROD_FAILURE,
    payload: {
      error,
    },
  };
};

//
export const removeProd = (id) => {

  return (dispatch) => {
    dispatch(removeProdStarted());
    axios
      .delete(`${API_URL}/${id}`)
      .then(({ data }) => {
        dispatch(removeProdSuccess(data.products));
      })
      .catch((err) => {
        dispatch(removeProdFailure(err.message));
      });
  };
};

const removeProdSuccess = (updatedProducts) => ({
  type: REMOVE_PROD_SUCCESS,
  payload: [...updatedProducts],
});

const removeProdStarted = () => ({
  type: REMOVE_PROD_STARTED,
});

const removeProdFailure = (error) => {
  return {
    type: REMOVE_PROD_FAILURE,
    payload: {
      error,
    },
  };
};
//

//
export const fetchProd = () => {
  return function (dispatch) {
    dispatch(fetchProdStarted());
    axios.get(API_URL)
        .then(({ data }) => {
          dispatch(fetchProdSuccess(data.products));
        })
        .catch((err) => {
          dispatch(fetchProdFailure(err.message));
        });
  }
};

const fetchProdSuccess = (products) => ({
  type: FETCH_PROD_SUCCESS,
  payload: [...products],
});

const fetchProdStarted = () => ({
  type: FETCH_PROD_STARTED,
});

const fetchProdFailure = (error) => {
  return {
    type: FETCH_PROD_FAILURE,
    payload: {
      error,
    },
  };
};
