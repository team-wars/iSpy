import React from 'react';
import { useSelector } from 'react-redux'
const Chatbox = (props) => {
  // let {messages} = useSelector((store)=>store.game)
  handleKeyPress(){
    // if enter, do the emitting shit
    if (event.keyCode === 13) {
      const userMsg = event.target.value;
    }
  };
  const messageArr = [];
  for(const msgObj of messages){
    messageArr.push(<Message text={msgObj.text} user={msgObj.user}/>)
  }
  return (
    <section>
      <div id='messageContainer'>
        {messageArr}
      </div>
      <input onKeyDown={handleKeyPress} />
    </section>
  );
};

export default Chatbox;
