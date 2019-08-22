import React, { Component } from 'react';
import { useSelector } from 'react-redux';

class Chatbox extends Component {
  constructor(props) {
    super(props);
  }

  // let {messages} = useSelector((store)=>store.game)
  // handleKeyPress(event) {
  // if enter, do the emitting shit
  // if (event.keyCode === 13) {
  // const userMsg = event.target.value;
  // }
  // }

  // const messageArr = [];
  // for(const msgObj of messages){
  //   messageArr.push(<Message text={msgObj.text} user={msgObj.user}/>)
  // }
  render() {
    return (
      <section>
        <div id="messageContainer">
          {/* {messageArr} */}
        </div>
        <input onKeyDown={this.handleKeyPress} />
      </section>
    );
  }
}

export default Chatbox;
