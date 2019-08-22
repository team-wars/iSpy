import React from 'react';
import { useSelector } from 'react-redux';
import GameContainer from './GameContainer';
import ListContainer from './ListContainer';
import SpymasterContainer from './SpymasterContainer';
// import { newMessage } from '../actions/actions';

const iSpyContainer = () => {
  const { currUser: { username } } = useSelector((store) => store.game);
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
