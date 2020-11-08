import axios from "axios";
// TODO: Separate deck and deckslist
import {
  FETCH_DECKS_STARTED,
  FETCH_DECKS_SUCCESS,
  FETCH_DECKS_FAILURE,
  GET_DECK,
  ADD_DECK_STARTED,
  ADD_DECK_SUCCESS,
  ADD_DECK_FAILURE,
  REMOVE_DECK_STARTED,
  REMOVE_DECK_SUCCESS,
  REMOVE_DECK_FAILURE,
} from "./types";

const API_URL = "http://localhost:5000/products";

export const createDeck = (product) => {
  return (dispatch) => {
    dispatch(createDeckStarted());
    axios({
      method: "post",
      url: API_URL,
      data: JSON.stringify(product),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        console.log('res: ', res);
        dispatch(createDeckSuccess(res.data));
      })
      .catch((err) => {
        console.log('err: ', err);
        dispatch(createDeckFailure(err.message));
      });
  };
};

const createDeckSuccess = (updatedProducts) => ({
  type: ADD_DECK_SUCCESS,
  payload: [...updatedProducts]
});

const createDeckStarted = () => ({
  type: ADD_DECK_STARTED,
});

const createDeckFailure = (error) => {
  return {
    type: ADD_DECK_FAILURE,
    payload: {
      error,
    },
  };
};

//
export const removeDeck = (id) => {

  return (dispatch) => {
    dispatch(removeDeckStarted());
    axios
      .delete(`${API_URL}/${id}`)
      .then(({ data }) => {
        dispatch(removeDeckSuccess(data.products));
      })
      .catch((err) => {
        dispatch(removeDeckFailure(err.message));
      });
  };
};

const removeDeckSuccess = (updatedProducts) => ({
  type: REMOVE_DECK_SUCCESS,
  payload: [...updatedProducts],
});

const removeDeckStarted = () => ({
  type: REMOVE_DECK_STARTED,
});

const removeDeckFailure = (error) => {
  return {
    type: REMOVE_DECK_FAILURE,
    payload: {
      error,
    },
  };
};
//

//
export const fetchDecks = () => {
  return function (dispatch) {
    dispatch(fetchDecksStarted());
    axios.get(API_URL)
      .then(({ data }) => {
        dispatch(fetchDecksSuccess(data));
      })
      .catch((err) => {
        dispatch(fetchDecksFailure(err.message));
      });
  }
};

export const getDeck = (id) => {
  return {
    type: GET_DECK,
    payload: id,
  }
};

const fetchDecksSuccess = (products) => ({
  type: FETCH_DECKS_SUCCESS,
  payload: [...products],
});

const fetchDecksStarted = () => ({
  type: FETCH_DECKS_STARTED,
});

const fetchDecksFailure = (error) => {
  return {
    type: FETCH_DECKS_FAILURE,
    payload: {
      error,
    },
  };
};
