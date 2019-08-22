import React from 'react';

const Message = ({ text, username }) => (
  <section className="message">
    <div className="username">
      {username}
    </div>
    <div className="text">
      {text}
    </div>
  </section>
);

export default Message;
