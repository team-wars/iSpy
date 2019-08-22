import io from 'socket.io-client';
import * as types from '../constants/ActionTypes';
import mockGameBoard from '../constants/mockGameBoard';

const initialTeamObj = {
  members: [
    // {
    //   username: '',
    //   isSpyMaster: false,
    //   ready: false,
    // },
  ],
  wordsLeft: [],
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
  currentClue: '',
  guessesLeft: 0,
  // newGuesses: 0,
  // newClue: '',
  socket: null,
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
        socket: io('localhost:3000', {
          query: `r_var=${sessionID}`,
        }),
        blueTeam: {
          ...state.blueTeam,
          members: [...state.blueTeam.members, { username, isSpyMaster: true, ready: false }],
        },
      };
    }
    case types.JOIN_SESSION: {
      console.log('joining session');
      const { sessionID, username } = action.payload;
      const socket = io('localhost:3000', {
        query: `r_var=${sessionID}`,
      });
      socket.emit('join session', username);
      const redCount = state.redTeam.members.length;
      const blueCount = state.redTeam.members.length;
      const team = blueCount > redCount ? 'red' : 'blue';
      const teamKey = `${team}Team`;
      const isSpyMaster = redCount === 0;
      console.log('emitted join');
      return {
        ...state,
        sessionID,
        currUser: { username, isSpyMaster, team },
        socket,
        [teamKey]: {
          ...state[teamKey],
          members: [...state[teamKey].members, { username, isSpyMaster, ready: false }],
        },
      };
    }
    case types.TEST:
      // alert(action.payload);
      console.log('testing testing');
      return state;
    case types.POPULATE_BOARD:
      return {
        ...state,
        gameBoard: action.payload,
      };
    // case types.NEW_CLUE_INPUT:
    //   console.log('in new clue input');
    //   return {
    //     ...state,
    //     newClue: action.payload,
    //   };
    // case types.SET_CURRENT_CLUE:
    //   console.log('set current clue');
    //   return {
    //     ...state,
    //     currentClue: action.payload.clue,
    //     guessesLeft: action.payload.guesses,
    //     newClue: '',
    //     newGuesses: 0,
    //   };
    // case types.UPDATE_GUESSES:
    //   return {
    //     ...state,
    //     newGuesses: action.payload,
    //   };
    default:
      console.log('default reducer run');
      return state;
  }
};

export default gameReducer;
