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
  decks: [
    {
      id: "1",
      title: "Javascript",
      questionsQuantity: "30",
      description: 'Javascript descbalbalalsl',
      buttonText: "Start",
      buttonVariant: "contained",
      questions: [
        {
          question: "Where ES6 was released?",
          answer: "2015?",
        },
        {
          question: "What map does?",
          answer: "Lets us to overwrite array elements",
        },
      ],
    },
    {
      id: "2",
      title: "React & Redux",
      questionsQuantity: "30",
      description: 'Redux and REact questions something something somehow',
      buttonText: "Start",
      buttonVariant: "contained",
      questions: [
        {
          question: "What is the first lifecycle of the compoennt?",
          answer: "constructor",
        },
        {
          question: "What every component should return?",
          answer: "At least one JSX element",
        },
      ],
    },
    {
      id: "3",
      title: "Algos and DS",
      questionsQuantity: "30",
      description: 'algos desc balbalbla',
      buttonText: "Start",
      buttonVariant: "contained",
      questions: [
        {
          question: "What is the main difference of array and linked list?",
          answer: "Linked list is more dynamic",
        },
        {
          question: "What are main types of algorithms",
          answer: "Searching, sorting and something",
        },
      ],
    },
  ],
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
