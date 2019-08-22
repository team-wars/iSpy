import * as types from '../constants/ActionTypes';

const initialState = {
  currentClue: '',
  guessesLeft: 0,
  // newClue: '',
  // newGuesses: 0,
};

const clueReducer = (state = initialState, action) => {
  console.log('action in clueReducer: ', action);
  switch (action.type) {
    // case types.NEW_CLUE_INPUT:
    //   console.log('in new clue input, clue reducer');
    //   return {
    //     ...state,
    //     newClue: action.payload,
    //   };
    case types.SET_CURRENT_CLUE:
      console.log('set current clue, clue reducer');
      return {
        ...state,
        currentClue: action.payload.clue,
        guessesLeft: action.payload.guesses,
      };
    case types.SELECT_TILE:
    // case types.UPDATE_GUESSES:
    //   console.log('update guesses, clue reducer');
    //   return {
    //     ...state,
    //     newGuesses: action.payload,
    //   };
    default:
      console.log('default reducer run, clue reducer');
      return state;
  }
};

export default clueReducer;
