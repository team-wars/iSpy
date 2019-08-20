import * as types from '../constants/ActionTypes';
import mockGameBoard from '../constants/mockGameBoard';

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
    userName: 'Alfredo',
    isSpyMaster: false,
    team: 'Blue',
  },
  gameBoard: mockGameBoard,
};

const gameReducer = (state = initialState, action) => {
  // console.log(mockGameBoard);
  switch (action.type) {
    case types.TEST:
      alert(action.payload);
      return state;
    default:
      console.log('reducer run');
      return state;
  }
};

export default gameReducer;
