import * as types from '../constants/ActionTypes';

export const testFunc = testMsg => ({
  type: types.TEST,
  payload: testMsg,
});

export const test2Func = () => ({
  types: types.TEST,
  payload: 'reset',
});
