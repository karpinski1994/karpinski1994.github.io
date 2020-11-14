import {
  FETCH_DECK_STARTED,
  FETCH_DECK_SUCCESS,
  FETCH_DECK_FAILURE,
} from "actions/types";

// TODO: Reducers should handle async operations, change for ON_SUCCESSFUL_ADD, ON_SUCCESSFSUL_REMOVE etc.
// TODO: Handle errors generically (throw error), then catch by React boundary and TOAST
// TODO: Handle cashing data using async storage/
// TODO: extract deck reducer to other file and decks and combine reducers in global reducer


export function deckReducer(state = {}, action) {
  switch (action.type) {

    case FETCH_DECK_STARTED:
      return {
        ...state,
        loading: true,
      };

    case FETCH_DECK_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        deck: {...action.payload},
      };

    case FETCH_DECK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
}