import { combineReducers } from "redux";
import {decksReducer} from './deck-list';
import {deckReducer} from './deck';

export const decksSelector = (state) => state.decksData.decks;
export const deckSelector = (state) => state.deckData.deck;

export default combineReducers({
  decksData: decksReducer,
  deckData: deckReducer,
});
