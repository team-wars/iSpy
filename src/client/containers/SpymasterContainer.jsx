import React, { Component } from 'react';
import { connect } from 'react-redux';
import { populateBoard, setCurrentClue } from '../actions/actions';


// FOR TESTING
import LandingPageButton from '../components/buttons/LandingPageButton.jsx';

const mapStateToProps = (state) => {
  console.log('in map state to props, ', state);
  return {
    sessionID: state.game.sessionID,
    newClue: state.clue.newClue,
    newGuesses: state.clue.newGuesses,
  };
};

const mapDispatchToProps = (dispatch) => ({
  // makeNewSession: () => dispatch(makeNewSession()),
  // joinSession: (currentSession, newUsername) => dispatch(joinSession(currentSession, newUsername)),
  populateBoard: (sessionID) => dispatch(populateBoard()),
  newClueInput: (text) => dispatch(newClueInput(text)),
  updateGuesses: (num) => dispatch(updateGuesses(num)),
  setCurrentClue: (text, num) => dispatch(setCurrentClue(text, num)),
});

class SpymasterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newClue: '',
      newGuesses: '',
    };

    this.handleNewClue = this.handleNewClue.bind(this);
    this.handleNewGuesses = this.handleNewGuesses.bind(this);

    // anymore methods, add here
  }

  handleNewClue(newClueInput) {
    // const newClueInput = event.target.value;
    this.setState({
      ...this.state,
      newClue: newClueInput,
    })
  }

  handleNewGuesses(newGuessesInput) {
    // const newGuessesInput = event.target.value;
    this.setState({
      ...this.state,
      newGuesses: newGuessesInput,
    })
  }

  render() {
    const { sessionID, populateBoard, setCurrentClue } = this.props;
    return (
      <section>This is the Spymaster Container
        <form onSubmit={() => {
          event.preventDefault();
          setCurrentClue(this.state.newClue, this.state.newGuesses);
          this.setState({
            ...this.state,
            newClue: '',
            newGuesses: '',
          })
        }}>
          <input type="text" placeholder="Enter New Clue" onChange={(e) => {
            const clue = e.target.value;
            this.handleNewClue(clue);
            // newClueInput(clue);
          }} />
          <input type="number" placeholder="# of Words" onChange={(e) => {
            const guesses = e.target.value;
            this.handleNewGuesses(guesses);
            // updateGuesses(guesses);
          }} />
          <input type="submit" value="submit" />
        </form>
        {/* <LandingPageButton buttonName="Start Session" buttonFunction={makeNewSession} /> */}
        <LandingPageButton buttonName="Populate Board" buttonFunction={() => populateBoard(sessionID)} />
        {/* <LandingPageButton buttonName="Join Session" buttonFunction={() => joinSession(sessionID, 'Will')} /> */}
      </section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpymasterContainer);
