import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import clueReducer from './clueReducer';

const reducers = combineReducers({
  game: gameReducer,
  clue: clueReducer,
});

export default reducers;
