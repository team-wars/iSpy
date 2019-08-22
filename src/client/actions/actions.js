import * as types from '../constants/ActionTypes';

// populateBoard thunk
export const populateBoard = (sessionID) => (dispatch) => fetch('/api/game/start', {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify({ session_id: sessionID }),
})
  .then((response) => response.json())
  .then((data) => {
    console.log('this is my data! ', data);
    dispatch({
      type: types.POPULATE_BOARD,
      payload: data,
    });
  })
  .catch((err) => {
    console.log('error in populateBoard fetch ', err);
  });

export const populateBoardSocket = (newBoard) => ({
  type: types.POPULATE_BOARD,
  payload: newBoard,
});

// export const newClueInput = (newClue) => ({
//   type: types.NEW_CLUE_INPUT,
//   payload: newClue,
// });

export const setCurrentClue = (clue, guesses) => ({
  type: types.SET_CURRENT_CLUE,
  payload: { clue, guesses },
});

// export const updateGuesses = (guesses) => ({
//   type: types.UPDATE_GUESSES,
//   payload: guesses,
// });

// SHOULD THIS BE A POST REQ? WHEN DOES FIRST USER ENTER NAME?
export const newSession = (username) => (dispatch) => fetch('/api/session/create', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ username }),
})
  .then((res) => res.json())
  .then((data) => {
    console.log('got data back: ', data);
    dispatch({
      type: types.NEW_SESSION,
      payload: { sessionID: data.roomID, username },
    });
  })
  .catch((e) => console.log('error caught: ', e));

// export const joinSessionAction = () => ({
//   // NEED A THUNK
//   type: types.JOIN_SESSION,
//   payload: 'filler',
// });

export const updateStores = (room) => (dispatch) => fetch(`/api/session/update-stores?room=${room}`)
  .then((data) => data.json())
  .then((json) => {
    console.log('update stores data: ', json);
    // const {
    //   messages, blueTeam, redTeam, gameBoard,
    // } = json;

    dispatch({
      type: types.UPDATE_STORES,
      payload: json,
    });
  });

export const joinSession = (roomID, username) => ({
  type: types.JOIN_SESSION,
  payload: { sessionID: roomID, username },
});

export const updateTeams = (payload) => ({
  type: types.UPDATE_TEAMS,
  payload,
});
export const startGame = () => ({
  // NEED A THUNK
  type: types.START_GAME,
  payload: 'filler',
});

export const endGame = () => ({
  // NEED A THUNK
  type: types.END_GAME,
  payload: 'filler',
});

export const selectTile = (boardLocation) => ({
  // NEED A THUNK
  type: types.SELECT_TILE,
  payload: {
    boardLocation,
  },
});

export const changeTurn = () => ({
  // NEED A THUNK
  type: types.CHANGE_TURN,
  payload: 'filler',
});

export const submitClue = () => ({
  // NEED A THUNK
  type: types.SUBMIT_CLUE,
  payload: 'filler',
});

export const newMessage = (payload) => ({
  // NEED A THUNK
  type: types.NEW_MESSAGE,
  payload,
});

export const loadMessages = () => ({
  // NEED A THUNK
  type: types.LOAD_MESSAGES,
  payload: 'filler',
});

// MIGHT NOT NEED
export const userLogin = () => ({
  // NEED A THUNK
  type: types.USER_LOGIN,
  payload: 'filler',
});

// MIGHT NOT NEED
export const createUser = () => ({
  // NEED A THUNK
  type: types.CREATE_USER,
  payload: 'filler',
});

// TEST
export const testFunc = (testMsg) => ({
  type: types.TEST,
  payload: testMsg,
});
