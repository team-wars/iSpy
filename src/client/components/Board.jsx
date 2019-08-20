import React, { Component } from 'react';
import { connect } from 'redux';

const mapStateToProps = () => {

};

const mapDispatchToProps = () => {

};

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // anymore methods, add here
  }

  render() {
    return (
      <section>This is the board</section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
