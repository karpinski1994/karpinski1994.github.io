import axios from "axios";
// TODO: Separate deck and deckslist
import {
  FETCH_DECK_STARTED,
  FETCH_DECK_SUCCESS,
  FETCH_DECK_FAILURE,
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

const API_URL = `http://localhost:8000/decks`;

export const createDeck = (deck) => {
console.log('deck: ', deck);
  return (dispatch) => {
    dispatch(createDeckStarted());
    axios({
      method: "post",
      url: API_URL,
      data: JSON.stringify(deck),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        dispatch(createDeckSuccess(res.data));
      })
      .catch((err) => {
        dispatch(createDeckFailure(err.message));
      });
  };
};

const createDeckSuccess = (updatedProducts) => ({
  type: ADD_DECK_SUCCESS,
  payload: [...updatedProducts],
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
  console.log('removeDeck id: ', id)
  return (dispatch) => {
    dispatch(removeDeckStarted());
    axios
      .delete(`${API_URL}/${id}`)
      .then(({ data }) => {
      console.log('data: ', data);
        dispatch(removeDeckSuccess(data));
      })
      .catch((err) => {
        console.log('err: ', err)
        dispatch(removeDeckFailure(err.message));
      });
  };
};

const removeDeckSuccess = (updatedDecks) => {
console.log('updatedDecks: ', updatedDecks);
  
  return{
  type: REMOVE_DECK_SUCCESS,
  payload: [...updatedDecks],
}};

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
    axios
      .get(API_URL)
      .then(({ data }) => {
        dispatch(fetchDecksSuccess(data));
      })
      .catch((err) => {
        dispatch(fetchDecksFailure(err.message));
      });
  };
};

export const fetchDeck = (id) => {
  return function (dispatch) {
    dispatch(fetchDeckStarted());
    axios
      .get(`${API_URL}/${id}`)
      .then(({ data }) => {
        dispatch(fetchDeckSuccess(data));
      })
      .catch((err) => {
        dispatch(fetchDeckFailure(err.message));
      });
  };
};

export const getDeck = (id) => {
  return {
    type: GET_DECK,
    payload: id,
  };
};

const fetchDecksSuccess = (decks) => {
  return {
    type: FETCH_DECKS_SUCCESS,
    payload: [...decks],
  };
};

const fetchDecksStarted = () => ({
  type: FETCH_DECKS_STARTED,
});

const fetchDeckStarted = () => ({
  type: FETCH_DECK_STARTED,
});

const fetchDeckSuccess = (deck) => {
  return {
    type: FETCH_DECK_SUCCESS,
    payload: deck,
  };
};

const fetchDeckFailure = (error) => {
  return {
    type: FETCH_DECK_FAILURE,
    payload: {
      error,
    },
  };
};

const fetchDecksFailure = (error) => {
  return {
    type: FETCH_DECKS_FAILURE,
    payload: {
      error,
    },
  };
};
