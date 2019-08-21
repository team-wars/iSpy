import React from 'react';
import { useSelector } from 'react-redux';
import GameContainer from './GameContainer';
import ListContainer from './ListContainer';
import SpymasterContainer from './SpymasterContainer';

const iSpyContainer = () => {
  const { socket, currUser: { username } } = useSelector((store) => store.game);
  // socket.emit('join session', username);
  socket.on('joined', (msg) => {
    console.log(`${msg.user.username} has joined`);
    console.log(msg);
    // action goes here
  });
  console.log(username);
  // console.lo
  return (
    <>
      <p>{username}</p>
      <GameContainer />
      <ListContainer />
      <SpymasterContainer />
    </>
  );
};

export default iSpyContainer;
