import React, { useState } from 'react';
import io from 'socket.io-client';
// import Board from './Board.jsx';
import GameContainer from '../containers/GameContainer';
// import ChatboxContainer from '../containers/ChatboxContainer.jsx';
import ListContainer from '../containers/ListContainer';
import SpymasterContainer from '../containers/SpymasterContainer';

const App = () => {
  // const socket = io();
  const [roomNum, changeRoom] = useState('');
  const [username, changeUser] = useState('');
  const handleClick = () => {
    const socketConnect = (room) => io('localhost:3000', {
      query: `r_var=${room}`,
    });
    const socket = socketConnect(roomNum);
    socket.emit('join session', username);
    socket.on('joined', (msg) => console.log(msg));
  };

  return (
    <>
      <input type="text" value={username} onChange={(e) => changeUser(e.target.value)} />
      <input type="text" value={roomNum} onChange={(e) => changeRoom(e.target.value)} />
      <button type="button" onClick={handleClick}>testing</button>
      <section>
        <h2> Hello world! </h2>
      </section>
      <>
        <GameContainer />
      </>
      <>
        <ListContainer />
      </>
      <>
        <SpymasterContainer />
      </>
    </>
  );
};

export default App;
