import React, { useState } from 'react';
import io from 'socket.io-client';
import { connect } from 'react-redux';
import { makeNewSessionAction } from '../actions/actions';

const mapDispatchToProps = (dispatch) => ({
  updateSessionID: (sessionID) => dispatch(makeNewSessionAction(sessionID)),
});

const FormContainer = (props) => {
  const [roomNum, changeRoom] = useState('');
  const [username, changeUser] = useState('');
  const handleClick = () => {
    const socketConnect = (room) => io('localhost:3000', {
      query: `r_var=${room}`,
    });
    const socket = socketConnect(roomNum);
    props.updateSessionID(roomNum);
    // should update store here
    socket.emit('join session', username);
    socket.on('joined', (msg) => console.log(msg));
  };
  return (
    <>
      <input type="text" value={username} onChange={(e) => changeUser(e.target.value)} />
      <input type="text" value={roomNum} onChange={(e) => changeRoom(e.target.value)} />
      <button type="button" onClick={handleClick}>join</button>
    </>
  );
};

export default connect(null, mapDispatchToProps)(FormContainer);
