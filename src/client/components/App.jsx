import React from 'react';
import Board from './Board';
import ChatboxContainer from '../containers/ChatboxContainer';
import ListContainer from '../containers/ListContainer';
import SpymasterContainer from '../containers/SpymasterContainer';

const App = () => (
  <>
    <section>
      <h2> Hello world! </h2>
    </section>
    <Board />
    <ChatboxContainer />
    <ListContainer />
    <SpymasterContainer />
  </>
);


export default App;
