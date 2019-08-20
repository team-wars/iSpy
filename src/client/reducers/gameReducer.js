import * as types from '../constants/ActionTypes';

const initialTeamObj = {
  members: [
    {
      username: '',
      isSpyMaster: false,
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
    userName: '',
    isSpyMaster: false,
    team: '',
  },
  gameBoard: [
    {
      word: '',
      ID: '',
      cardStatus: '',
      team: ' ',
    },
  ],
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TEST:
      alert(action.payload);
      return state;
    default:
      return state;
  }
};

export default gameReducer;
