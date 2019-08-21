import * as types from '../constants/ActionTypes';

export const makeNewSessionAction = sessionID => ({
  // THUNK BELOW
  type: types.NEW_SESSION,
  payload: { sessionID },
});

// THUNK FOR ABOVE
// SHOULD THIS BE A POST REQ? WHEN DOES FIRST USER ENTER NAME?
export const makeNewSession = () => (dispatch) => {
  console.log('inside thunk');
  return fetch('/api/session/create')
    .then(res => res.json())
    .then((data) => {
      console.log('got data back: ', data);
      dispatch(makeNewSessionAction(data.currentSessionID));
    })
    .catch(e => console.log('error caught: ', e));
};

export const joinSession = () => ({
  // NEED A THUNK
  type: types.JOIN_SESSION,
  payload: 'filler',
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

export const selectTile = () => ({
  // NEED A THUNK
  type: types.SELECT_TILE,
  payload: 'filler',
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

export const submitMessage = () => ({
  // NEED A THUNK
  type: types.SUBMIT_MESSAGE,
  payload: 'filler',
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
export const testFunc = testMsg => ({
  type: types.TEST,
  payload: testMsg,
});
