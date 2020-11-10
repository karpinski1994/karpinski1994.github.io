import { combineReducers } from "redux";
import {
  FETCH_DECKS_STARTED,
  FETCH_DECKS_SUCCESS,
  FETCH_DECKS_FAILURE,
  ADD_DECK_STARTED,
  ADD_DECK_SUCCESS,
  ADD_DECK_FAILURE,
  REMOVE_DECK_STARTED,
  REMOVE_DECK_SUCCESS,
  REMOVE_DECK_FAILURE,
  GET_DECK,
} from "actions/types";

// TODO: Reducers should handle async operations, change for ON_SUCCESSFUL_ADD, ON_SUCCESSFSUL_REMOVE etc.
// TODO: Handle errors generically (throw error), then catch by React boundary and TOAST
// TODO: Handle cashing data using async storage/

const initialState = {
  loading: false,
  decks: [],
  error: null,
};

function decksReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DECK:
      return state.decks.find(d => d.id === action.payload);

    case FETCH_DECKS_STARTED:
      return {
        ...state,
        loading: true,
      };

    case FETCH_DECKS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        decks: [...action.payload],
      };

    case FETCH_DECKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case ADD_DECK_STARTED:
      return {
        ...state,
        loading: true,
      };

    case ADD_DECK_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        decks: [...action.payload],
      };

    case ADD_DECK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    case REMOVE_DECK_STARTED:
      return {
        ...state,
        loading: true,
      };

    case REMOVE_DECK_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        decks: [...action.payload],
      };

    case REMOVE_DECK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
}
export const decksSelector = (state) => state.decksData.decks;
// TODO: Clean reducer
export default combineReducers({
  decksData: decksReducer,
});
