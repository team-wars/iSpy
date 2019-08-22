import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import socketReducer from './socketReducer';
import clueReducer from './clueReducer';

const reducers = combineReducers({
  game: gameReducer,
  socket: socketReducer,
  clue: clueReducer,
});

export default reducers;
