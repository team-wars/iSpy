import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import io from 'socket.io-client';
import Dashboard from '../containers/Dashboard';

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
  const readyToggle = () => {
    const socketConnect = (room) => io('localhost:3000', {
      query: `r_var=${room}`,
    });
    const socket = socketConnect(roomNum);
    socket.emit('ready', username);
    socket.on('ready changed', (msg) => console.log(msg));
  };

  return (
    // <>
    //   <input type="text" value={username} onChange={(e) => changeUser(e.target.value)} />
    //   <input type="text" value={roomNum} onChange={(e) => changeRoom(e.target.value)} />
    //   <button type="button" onClick={handleClick}>testing</button>
    //   <button type="button" onClick={readyToggle}>Ready Up</button>
    //   <GameContainer />
    //   <ListContainer />
    //   <SpymasterContainer />
    <>
      <Router>
        <Dashboard />
      </Router>
    </>
  );
};

export default App;
