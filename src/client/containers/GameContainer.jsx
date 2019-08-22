import React, { Component } from 'react';
import { connect } from 'react-redux';
import Board from '../components/Board';
import ChatboxContainer from './ChatboxContainer';

const mapStateToProps = (state) => ({
  sessionID: state.game.sessionID,
});

class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // anymore methods, add here
  }

  render() {
    const { sessionID } = this.props;
    return (
      <section className="game-container">
        <h2>
          {`Welcome to iSpy! Session: ${sessionID || 'TBD'}`}
        </h2>
        This is the Game Container
        <Board />
        <ChatboxContainer />
      </section>
    );
  }
}

export default connect(mapStateToProps, null)(GameContainer);
