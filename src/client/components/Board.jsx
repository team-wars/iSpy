import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tile from './Tile.jsx';
import { testFunc } from '../actions/actions';

const mapStateToProps = (state, ownProps) => state;

const mapDispatchToProps = (dispatch, ownProps) => ({
  test: testMsg => dispatch(testFunc('TEST')),
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
    const { test } = this.props;
    return (
      <>
        <section>This is the board</section>
        <section className="game-board">
          <>
            <section className="game-row" id="row-1">
              {this.state.dummyTiles.map(el => <Tile />)}
            </section>
            <section className="game-row" id="row-2">
              {this.state.dummyTiles.map(el => <Tile />)}
            </section>
            <section className="game-row" id="row-3">
              {this.state.dummyTiles.map(el => <Tile />)}
            </section>
            <section className="game-row" id="row-4">
              {this.state.dummyTiles.map(el => <Tile />)}
            </section>
            <section className="game-row" id="row-5">
              {this.state.dummyTiles.map(el => <Tile />)}
            </section>
          </>
          <button type="button" onClick={test}>Test Me</button>
        </section>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
