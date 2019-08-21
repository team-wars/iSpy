import React, { Component } from 'react';
import { connect } from 'react-redux';
import { makeNewSession, joinSession, populateBoard, newClueInput, setCurrentClue, newGuesses, updateGuesses } from '../actions/actions';


// FOR TESTING
import LandingPageButton from '../components/buttons/LandingPageButton.jsx';

const mapStateToProps = (state) => {
  console.log('in map state to props, ', state);
  return {
    sessionID: state.game.sessionID,
    newClue: state.game.newClue,
    newGuesses: state.game.newGuesses,
  };
};

const mapDispatchToProps = dispatch => ({
  makeNewSession: () => dispatch(makeNewSession()),
  joinSession: (currentSession, newUsername) => dispatch(joinSession(currentSession, newUsername)),
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
    const {
      makeNewSession, sessionID, joinSession, populateBoard, newClue, newClueInput, setCurrentClue, newGuesses
    } = this.props;
    return (

      <section>
        <form onSubmit={() => {
          event.preventDefault();
          setCurrentClue(newClue, newGuesses);
        }}>
          <input type="text" placeholder="clue" onChange={(e) => {
            const clue = e.target.value;
            newClueInput(clue);
          }} />
          <input type="number" placeholder="number" onChange={(e) => {
            const guesses = e.target.value;
            updateGuesses(guesses);
          }}/>
          <input type="submit" value="submit" />
        </form>
        This is the Spymaster Container
        {/* THESE BUTTONS BELOW ARE FOR TESTING METHODS. THEY SHOULD NOT BE HERE */}
        <LandingPageButton buttonName="Start Session" buttonFunction={makeNewSession} />
        <LandingPageButton buttonName="Start Game/Populate Board" buttonFunction={populateBoard} />
        <LandingPageButton buttonName="Join Session" buttonFunction={() => joinSession(sessionID, 'Will')} />
        {/* THESE BUTTONS ABOVE ARE FOR TESTING METHODS. THEY SHOULD NOT BE HERE */}
      </section>

    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpymasterContainer);
