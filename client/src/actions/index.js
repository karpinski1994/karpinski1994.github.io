import axios from "axios";

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
} from "./types";

const API_URL = "http://localhost:5000/products";

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
      console.log('res: ', res);
        dispatch(addProdSuccess(res.data));
      })
      .catch((err) => {
      console.log('err: ', err);
        dispatch(addProdFailure(err.message));
      });
  };
};

const addProdSuccess = (updatedProducts) => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: [...updatedProducts]
});

const addProdStarted = () => ({
  type: ADD_PRODUCT_STARTED,
});

const addProdFailure = (error) => {
  return {
    type: ADD_PRODUCT_FAILURE,
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
  type: REMOVE_PRODUCT_SUCCESS,
  payload: [...updatedProducts],
});

const removeProdStarted = () => ({
  type: REMOVE_PRODUCT_STARTED,
});

const removeProdFailure = (error) => {
  return {
    type: REMOVE_PRODUCT_FAILURE,
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
          dispatch(fetchProdSuccess(data));
        })
        .catch((err) => {
          dispatch(fetchProdFailure(err.message));
        });
  }
};

const fetchProdSuccess = (products) => ({
  type: FETCH_PRODUCT_SUCCESS,
  payload: [...products],
});

const fetchProdStarted = () => ({
  type: FETCH_PRODUCT_STARTED,
});

const fetchProdFailure = (error) => {
  return {
    type: FETCH_PRODUCT_FAILURE,
    payload: {
      error,
    },
  };
};
