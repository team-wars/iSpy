import * as types from '../constants/ActionTypes';
import mockGameBoard from '../constants/mockGameBoard';

const initialTeamObj = {
  members: [],
  wordsLeft: 0,
};

const initialState = {
  sessionID: null,
  isRedTurn: true,
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
      const { sessionID, username } = action.payload;
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
      // return { sessionID: action.payload.sessionID, username: action.payload.username };
      const { sessionID, username } = action.payload;
      const redCount = state.redTeam.members.length;
      const blueCount = state.blueTeam.members.length;
      const team = blueCount > redCount ? 'red' : 'blue';
      const teamKey = `${team}Team`;
      const isSpyMaster = redCount === 0;
      console.log('payload in JOIN_SESSION', action.payload);
      console.log('isSpymaster: ', isSpyMaster);
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

    case types.UPDATE_STORES:
      console.log('************', action.payload.redTeam.length);
      return {
        ...state,
        messages: [...action.payload.messages],
        gameBoard: action.payload.gameBoard.length ? [...action.payload.gameBoard] : [...state.gameBoard],
        redTeam: { members: [...action.payload.redTeam], wordsLeft: action.payload.gameBoard.filter((cv) => cv.affiliation === 'red').length },
        blueTeam: { members: [...action.payload.blueTeam], wordsLeft: action.payload.gameBoard.filter((cv) => cv.affiliation === 'blue').length },
        currUser: {
          ...state.currUser,
          isSpyMaster: action.payload.redTeam.length === 0,
          // team: action.payload.redTeam.length === action.payload.blueTeam.length ? 'red' : 'blue',
        },

      };
    case types.NEW_MESSAGE:
      return { ...state, messages: [...state.messages, action.payload] };

    case types.POPULATE_BOARD:
      return {
        ...state,
        gameBoard: action.payload,
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
