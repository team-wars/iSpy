import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tile from './Tile.jsx';
import { testFunc, selectTile } from '../actions/actions';

// import styles from '../stylesheet/board.css';

const mapStateToProps = (state) => ({
  gameBoard: state.game.gameBoard,
  socket: state.socket.socket,
});

const mapDispatchToProps = (dispatch) => ({
  test: (testMsg) => dispatch(testFunc(testMsg)),
  selectTile: (affiliation, boardLocation) => {
    // need a socket emit here
    const clickedTileObj = event.target;
    console.log('selectTile hit: ', clickedTileObj);
    // color being changed at tile level
    // clickedTileObj.className = `${affiliation}-tile-button`;
    dispatch(selectTile(boardLocation, clickedTileObj));
  },
});

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // anymore methods, add here
  }

  render() {
    const { test, gameBoard, selectTile, socket } = this.props;
    console.log('this is gameboard: ', gameBoard);
    return (
      <>
        <h2>This is the board</h2>
        <section className="game-board">
          {gameBoard && (
            <>
              <section className="game-row" id="row-1">
                {gameBoard.slice(0, 5).map((el, idx) => <Tile key={'word-tile-' + (idx + (5 * 0))} selected={el.selected} boardLocation={idx + (5 * 0)} wordId={el.id} word={el.word} affiliation={el.affiliation} selectTile={selectTile} />)}
              </section>
              <section className="game-row" id="row-2">
                {gameBoard.slice(5, 10).map((el, idx) => <Tile key={'word-tile-' + (idx + (5 * 1))} selected={el.selected} boardLocation={idx + (5 * 1)} wordId={el.id} word={el.word} affiliation={el.affiliation} selectTile={selectTile} />)}
              </section>
              <section className="game-row" id="row-3">
                {gameBoard.slice(10, 15).map((el, idx) => <Tile key={'word-tile-' + (idx + (5 * 2))} selected={el.selected} boardLocation={idx + (5 * 2)} wordId={el.id} word={el.word} affiliation={el.affiliation} selectTile={selectTile} />)}
              </section>
              <section className="game-row" id="row-4">
                {gameBoard.slice(15, 20).map((el, idx) => <Tile key={'word-tile-' + (idx + (5 * 3))} selected={el.selected} boardLocation={idx + (5 * 3)} wordId={el.id} word={el.word} affiliation={el.affiliation} selectTile={selectTile} />)}
              </section>
              <section className="game-row" id="row-5">
                {gameBoard.slice(20, 25).map((el, idx) => <Tile key={'word-tile-' + (idx + (5 * 4))} selected={el.selected} boardLocation={idx + (5 * 4)} wordId={el.id} word={el.word} affiliation={el.affiliation} selectTile={selectTile} />)}
              </section>
            </>
          )}
        </section>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
