import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tile from './Tile.jsx';
import { testFunc } from '../actions/actions';

import styles from '../stylesheet/board.css';

const mapStateToProps = state => ({
  gameBoard: state.gameBoard,
});

const mapDispatchToProps = dispatch => ({
  test: testMsg => dispatch(testFunc(testMsg)),
});

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyTiles: [0, 1, 2, 3, 4],
    };
    // anymore methods, add here
  }

  render() {
    const { test, gameBoard } = this.props;
    return (
      <>
        <h2>This is the board</h2>
        <section className="game-board">
          <>
            <section className="game-row" id="row-1">
              {this.state.dummyTiles.map(el => <Tile testClick={() => test('this is a test')} />)}
            </section>
            <section className="game-row" id="row-2">
              {this.state.dummyTiles.map(el => <Tile testClick={() => test('this is a test')} />)}
            </section>
            <section className="game-row" id="row-3">
              {this.state.dummyTiles.map(el => <Tile testClick={() => test('this is a test')} />)}
            </section>
            <section className="game-row" id="row-4">
              {this.state.dummyTiles.map(el => <Tile testClick={() => test('this is a test')} />)}
            </section>
            <section className="game-row" id="row-5">
              {this.state.dummyTiles.map(el => <Tile testClick={() => test('this is a test')} />)}
            </section>
          </>
        </section>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
