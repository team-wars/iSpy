import React from 'react';
import { useSelector } from 'react-redux';
import List from '../components/List';

const ListContainer = () => {
  const { blueTeam, redTeam } = useSelector((store) => store.game);
  return (
    <section>
      <List list={blueTeam.members} type="team" color="blue" />
      <List list={redTeam.members} type="team" color="red" />
    </section>
  );
};

export default ListContainer;
