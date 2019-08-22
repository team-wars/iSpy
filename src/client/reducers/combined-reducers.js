import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import socketReducer from './socketReducer';

const reducers = combineReducers({
  game: gameReducer,
  socket: socketReducer,
});

export default reducers;
