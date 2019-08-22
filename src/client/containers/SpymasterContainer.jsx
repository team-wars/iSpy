import React, { Component } from 'react';
import { connect } from 'react-redux';
import { populateBoard } from '../actions/actions';


// FOR TESTING
// import LandingPageButton from '../components/buttons/LandingPageButton.jsx';

const mapStateToProps = (state) => {
  console.log('in map state to props, ', state);
  return {
    sessionID: state.game.sessionID,
    newClue: state.game.newClue,
    newGuesses: state.game.newGuesses,
  };
};

const mapDispatchToProps = (dispatch) => ({
  // makeNewSession: () => dispatch(makeNewSession()),
  // joinSession: (currentSession, newUsername) => dispatch(joinSession(currentSession, newUsername)),
  populateBoard: () => dispatch(populateBoard()),
  newClueInput: (text) => dispatch(newClueInput(text)),
  setCurrentClue: (text) => dispatch(setCurrentClue(text)),
  updateGuesses: (text) => dispatch(updateGuesses(text)),
});

class SpymasterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // anymore methods, add here
  }

  render() {
    // const { sessionID, populateBoard } = this.props;
    return (
      <>
        <section>This is the Spymaster Container</section>
        {/* <LandingPageButton buttonName="Start Session" buttonFunction={makeNewSession} />
        <LandingPageButton buttonName="Join Session" buttonFunction={populateBoard} /> */}
        {/* <LandingPageButton buttonName="Join Session" buttonFunction={() => joinSession(sessionID, 'Will')} /> */}
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpymasterContainer);
