import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Message from './Message';

const Chatbox = () => {
  const {
    messages, currUser: { username },
  } = useSelector((store) => store.game);
  const { socket } = useSelector((store) => store.socket);

  const [text, setText] = useState('');
  const handleKeyPress = (event) => {
    if (event.keyCode === 13 && text.length > 0) {
      console.log('EMITTING MESSAGE');
      socket.emit('message', { text, username });
      setText('');
    }
  };
  const messageArr = messages.map((msgObj) => <Message text={msgObj.text} username={msgObj.user} />);

  return (
    <section>
      <div id="messageContainer">
        {messageArr}
      </div>
      <input onKeyUp={handleKeyPress} value={text} onChange={(e) => setText(e.target.value)} />
    </section>
  );
};

export default Chatbox;
