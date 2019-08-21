import React, { Component } from 'react';
import { connect } from 'react-redux';
import { makeNewSession, joinSession, populateBoard } from '../actions/actions';


// FOR TESTING
import LandingPageButton from '../components/buttons/LandingPageButton.jsx';

const mapStateToProps = (state) => {
  console.log('in map state to props, ', state);
  return {
    sessionID: state.game.sessionID,
  };
};

const mapDispatchToProps = dispatch => ({
  makeNewSession: () => dispatch(makeNewSession()),
  joinSession: (currentSession, newUsername) => dispatch(joinSession(currentSession, newUsername)),
  populateBoard: () => dispatch(populateBoard()),
});

class SpymasterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // anymore methods, add here
  }

  render() {
    const {
      makeNewSession, sessionID, joinSession, populateBoard,
    } = this.props;
    return (
      <>
        <section>This is the Spymaster Container</section>
        <LandingPageButton buttonName="Start Session" buttonFunction={makeNewSession} />
        <LandingPageButton buttonName="Start Game/Populate Board" buttonFunction={populateBoard} />
        <LandingPageButton buttonName="Join Session" buttonFunction={() => joinSession(sessionID, 'Will')} />
      </>
    );
  }
}

export default connect(null, mapDispatchToProps)(SpymasterContainer);
