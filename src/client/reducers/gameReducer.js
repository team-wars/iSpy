import * as types from '../constants/ActionTypes';
import mockGameBoard from '../constants/mockGameBoard';

const initialTeamObj = {
  members: [],
  wordsLeft: [],
};

const initialState = {
  sessionID: null,
  isBlueTurn: true,
  redTeam: initialTeamObj,
  blueTeam: initialTeamObj,
  currUser: {
    username: '',
    isSpyMaster: false,
    team: 'blue',
  },
  gameBoard: mockGameBoard,
  messages: [],
  currentClue: '',
  guessesLeft: 0,
  // newGuesses: 0,
  // newClue: '',
};

const gameReducer = (state = initialState, action) => {
  // console.log(mockGameBoard);
  // console.log('inside reducer');
  console.log('action is ', action);
  switch (action.type) {
    case types.NEW_SESSION: {
      console.log('got a new session', action.payload.sessionID);
      const { sessionID, username } = action.payload;
      console.log('inside new session reducer, ', username);
      return {
        ...state,
        sessionID,
        currUser: { username, isSpyMaster: true, team: 'blue' },
        blueTeam: {
          ...state.blueTeam,
          members: [...state.blueTeam.members, { username, isSpyMaster: true, ready: false }],
        },
      };
    }
    case types.JOIN_SESSION: {
      const { sessionID, username } = action.payload;
      const redCount = state.redTeam.members.length;
      const blueCount = state.redTeam.members.length;
      const team = blueCount > redCount ? 'red' : 'blue';
      const teamKey = `${team}Team`;
      const isSpyMaster = redCount === 0;
      return {
        ...state,
        sessionID,
        currUser: { username, isSpyMaster, team },
        [teamKey]: {
          ...state[teamKey],
          members: [...state[teamKey].members.map((cv) => ({ ...cv })), { username, isSpyMaster, ready: false }],
        },
      };
    }
    case types.NEW_MESSAGE:
      return { ...state, messages: [...state.messages, action.payload] };

    case types.POPULATE_BOARD:
      return {
        ...state,
        gameBoard: action.payload,
      };
    case types.SET_CURRENT_CLUE:
      console.log('set current clue, game reducer');
      return {
        ...state,
        currentClue: action.payload.clue,
        guessesLeft: action.payload.guesses,
      };
    case types.SELECT_TILE:
      const newGameBoard = JSON.parse(JSON.stringify(state.gameBoard));
      newGameBoard[action.payload.boardLocation].selected = true;
      return {
        ...state,
        // isBlueTurn: true,
        guessesLeft: state.guessesLeft - 1 >= 0 ? state.guessesLeft - 1 : 0,
        gameBoard: newGameBoard,
      };
    case types.UPDATE_TEAMS:
      return {
        ...state,
        [action.payload.teamKey]: { ...state[action.payload.teamKey], members: [...state[action.payload.teamKey].members.map((cv) => ({ ...cv })), action.payload.user] },
      };
    default:
      console.log('default reducer run');
      return state;
  }
};

export default gameReducer;
