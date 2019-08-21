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
  newClue: '',
};

const gameReducer = (state = initialState, action) => {
  // console.log(mockGameBoard);
  // console.log('inside reducer');
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
      return {
        ...state,
        newClue: action.payload,
      };
    case types.SET_CURRENT_CLUE:
      return {
        ...state,
        currentClue: action.payload,
        newClue: '',
      };
    default:
      console.log('default reducer run');
      return state;
  }
};

export default gameReducer;
