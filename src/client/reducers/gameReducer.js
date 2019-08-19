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
    default:
      return state;
  }
};

export default gameReducer;
