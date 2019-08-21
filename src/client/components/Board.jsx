import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tile from './Tile.jsx';
import { testFunc } from '../actions/actions';

// import styles from '../stylesheet/board.css';

const mapStateToProps = state => ({
  gameBoard: state.game.gameBoard,
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
    console.log('this is gameboard: ', this.props);
    return (
      <>
        <h2>This is the board</h2>
        <section className="game-board">
          {gameBoard && (
            <>
              <section className="game-row" id="row-1">
                {gameBoard.slice(0, 5).map(el => <Tile word={el.word} testClick={() => test('this is a test')} />)}
              </section>
              <section className="game-row" id="row-2">
                {gameBoard.slice(5, 10).map(el => <Tile word={el.word} testClick={() => test('this is a test')} />)}
              </section>
              <section className="game-row" id="row-3">
                {gameBoard.slice(10, 15).map(el => <Tile word={el.word} testClick={() => test('this is a test')} />)}
              </section>
              <section className="game-row" id="row-4">
                {gameBoard.slice(15, 20).map(el => <Tile word={el.word} testClick={() => test('this is a test')} />)}
              </section>
              <section className="game-row" id="row-5">
                {gameBoard.slice(20, 25).map(el => <Tile word={el.word} testClick={() => test('this is a test')} />)}
              </section>
            </>
          )}
        </section>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
