import React from 'react';
import Board from './Board.jsx';
import ChatboxContainer from '../containers/ChatboxContainer.jsx';
import ListContainer from '../containers/ListContainer.jsx';
import SpymasterContainer from '../containers/SpymasterContainer.jsx';
import io from 'socket.io-client';

const App = () => (
  <>
    <section>
      <h2> Hello world! </h2>
    </section>
    <>
      <Board />
    </>
    <>
      <ChatboxContainer />
    </>
    <>
      <ListContainer />
    </>
    <>
      <SpymasterContainer />
    </>
  </>
);
const socket = io();
socket.on('user connected'){
  
}


export default App;
