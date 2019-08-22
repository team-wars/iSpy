import io from 'socket.io-client';
import { JOIN_SESSION, NEW_SESSION } from '../constants/ActionTypes';

const initialState = {
  socket: null,
};


const socketReducer = (state = initialState, action) => {
  switch (action.type) {
    case JOIN_SESSION: {
      const { sessionID, username } = action.payload;
      const socket = io('localhost:3000', {
        query: `r_var=${sessionID}`,
      });
      socket.emit('join session', username);

      return {
        socket,
      };
    }
    case NEW_SESSION: {
      const { sessionID } = action.payload;

      const socket = io('localhost:3000', {
        query: `r_var=${sessionID}`,
      });
      return { socket };
    }
    default:
      return state;
  }
};

export default socketReducer;
