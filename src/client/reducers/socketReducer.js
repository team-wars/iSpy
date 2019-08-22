import io from 'socket.io-client';
import { JOIN_SESSION, NEW_SESSION, NEW_MESSAGE } from '../constants/ActionTypes';

const initialState = {
  socket: null,
};


const socketReducer = (state = initialState, action) => {
  switch (action.type) {
    case JOIN_SESSION: {
      const { sessionID } = action.payload;

      return {
        socket: io('localhost:3000', {
          query: `r_var=${sessionID}`,
        }),
      };
    }
    case NEW_SESSION: {
      const { sessionID, username } = action.payload;

      const socket = io('localhost:3000', {
        query: `r_var=${sessionID}`,
      });
      socket.emit('join session', username);
      return { socket };
    }
    default:
      return state;
  }
};

export default socketReducer;
