import * as types from '../constants/ActionTypes';
import mockGameBoard from '../constants/mockGameBoard';

const initialTeamObj = {
  members: [
    {
      username: '',
      isSpyMaster: false,
      ready: false,
    },
  ],
  wordsLeft: [],
};

const initialState = {
  sessionID: null,
  isRedTurn: true,
  redTeam: initialTeamObj,
  blueTeam: initialTeamObj,
  currUser: {
    username: 'Alfredo',
    isSpyMaster: false,
    team: 'Blue',
  },
  gameBoard: mockGameBoard,
  currentClue: '',
  guessesLeft: 0,
  newGuesses: 0,
  newClue: '',
};

const gameReducer = (state = initialState, action) => {
  // console.log(mockGameBoard);
  // console.log('inside reducer');
  console.log('action is ', action)
  switch (action.type) {
    case types.NEW_SESSION:
      console.log('got a new session');
      return {
        ...state,
        sessionID: action.payload.sessionID,
      };
    case types.TEST:
      // alert(action.payload);
      console.log('testing testing');
      return state;
    case types.POPULATE_BOARD:
      return {
        ...state,
        gameBoard: action.payload,
      };
    case types.NEW_CLUE_INPUT:
      console.log('in new clue input');
      return {
        ...state,
        newClue: action.payload,
      };
    case types.SET_CURRENT_CLUE:
      console.log('set current clue');
      return {
        ...state,
        currentClue: action.payload.clue,
        newClue: '',
        newGuesses: 0,
        guessesLeft: action.payload.guesses,
      };
    case types.UPDATE_GUESSES:
      return {
        ...state,
        newGuesses: action.payload,
      };
    default:
      console.log('default reducer run');
      return state;
  }
};

export default gameReducer;
