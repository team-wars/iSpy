import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
// import io from 'socket.io-client';
// import Board from './Board.jsx';
// import GameContainer from '../containers/GameContainer';
// import ChatboxContainer from '../containers/ChatboxContainer.jsx';
// import ListContainer from '../containers/ListContainer';
// import SpymasterContainer from '../containers/SpymasterContainer';
// import { makeNewSessionAction } from '../actions/actions';
import Dashboard from '../containers/Dashboard';

const App = () => {
  // const socket = io();
  // const [roomNum, changeRoom] = useState('');
  // const [username, changeUser] = useState('');
  // const handleClick = () => {
  //   const socketConnect = (room) => io('localhost:3000', {
  //     query: `r_var=${room}`,
  //   });
  //   const socket = socketConnect(roomNum);
  //   dispatchEvent
  //   socket.emit('join session', username);
  //   socket.on('joined', (msg) => console.log(msg));
  // };
  //     <input type="text" value={username} onChange={(e) => changeUser(e.target.value)} />
  //     <input type="text" value={roomNum} onChange={(e) => changeRoom(e.target.value)} />
  //     <button type="button" onClick={handleClick}>testing</button>
      
  //     <GameContainer />
  //     <ListContainer />
  //     <SpymasterContainer />
  return (
    <>
      <Router>
        <Dashboard />
      </Router>
    </>
  );
};

export default App;
