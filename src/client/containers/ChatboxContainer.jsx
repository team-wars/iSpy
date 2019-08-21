import React, { Component } from 'react';
import Chatbox from '../components/Chatbox';

class ChatboxContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // anymore methods, add here
  }

  render() {
    return (
      <section className="chatbox-container">
        <Chatbox />
        This is the Chatbox Container
      </section>
    );
  }
}

export default ChatboxContainer;
