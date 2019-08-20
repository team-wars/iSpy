import React from 'react';
// import Board from './Board.jsx';
import GameContainer from '../containers/GameContainer.jsx';
// import ChatboxContainer from '../containers/ChatboxContainer.jsx';
import ListContainer from '../containers/ListContainer.jsx';
import SpymasterContainer from '../containers/SpymasterContainer.jsx';

const App = () => (
  <>
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

export default App;
