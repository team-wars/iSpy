import React, { Component } from 'react';
import { connect } from 'react-redux';
import { makeNewSession } from '../actions/actions';


// FOR TESTING
import LandingPageButton from '../components/buttons/LandingPageButton.jsx';

// const mapStateToProps = (state) => {
//   console.log('in map state to props, ', state);
//   return {};
// };

const mapDispatchToProps = dispatch => ({
  makeNewSession: () => dispatch(makeNewSession()),
});

class SpymasterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // anymore methods, add here
  }

  render() {
    const { makeNewSession } = this.props;
    return (
      <>
        <section>This is the Spymaster Container</section>
        <LandingPageButton buttonName="Start Session" buttonFunction={makeNewSession} />
        <LandingPageButton buttonName="Join Session" buttonFunction={() => console.log('testing join session')} />
      </>
    );
  }
}

export default connect(null, mapDispatchToProps)(SpymasterContainer);
