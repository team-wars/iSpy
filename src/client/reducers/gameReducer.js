import * as types from '../constants/ActionTypes';
import mockGameBoard from '../constants/mockGameBoard';

const initialTeamObj = {
  members: [],
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
  messages: [],
};

const gameReducer = (state = initialState, action) => {
  // console.log(mockGameBoard);
  // console.log('inside reducer');
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
          members: [...state[teamKey].members, { username, isSpyMaster, ready: false }],
        },
      };
    }
    case types.NEW_MESSAGE:
      // alert(action.payload);
      console.log('payload:', action.payload);
      // delete state.socket;
      return { ...state, messages: [...state.messages, action.payload] };
    default:
      console.log('default reducer run');
      return state;
  }
};

export default gameReducer;
