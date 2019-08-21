import * as types from '../constants/ActionTypes';

// populateBoard thunk
export const populateBoard = () => dispatch => fetch('/api/game/start', {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify({ session_id: 1 }),
})
  .then(response => response.json())
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

// SHOULD THIS BE A POST REQ? WHEN DOES FIRST USER ENTER NAME?
export const makeNewSession = () => dispatch => fetch('/api/session/create')
  .then(res => res.json())
  .then((data) => {
    console.log('got data back: ', data);
    // dispatch(makeNewSessionAction(data.currentSessionID));
    dispatch({
      type: types.NEW_SESSION,
      payload: { sessionID: data.currentSessionID },
    });
  })
  .catch(e => console.log('error caught: ', e));

export const joinSessionAction = () => ({
  // NEED A THUNK
  type: types.JOIN_SESSION,
  payload: 'filler',
});

export const joinSession = (currentSession, newUsername) => (dispatch) => {
  console.log('inside join session thunk');
  return fetch('/api/user/create', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      username: newUsername,
      roomID: currentSession,
    }),
  })
    .then(res => res.json())
    .then((data) => {
      console.log('data returned: ,', data);
      joinSessionAction();
    })
    .catch(e => console.log('error in joining session: ', e));
};

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
