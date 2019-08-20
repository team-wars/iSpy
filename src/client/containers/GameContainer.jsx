import React, { Component } from 'react';
import Board from '../components/Board.jsx';
import Chatbox from '../components/Chatbox.jsx';

class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // anymore methods, add here
  }

  render() {
    return (
      <section className="game-container">
        This is the Game Container
        <Board />
        <Chatbox />
      </section>
    );
  }
}

export default GameContainer;
