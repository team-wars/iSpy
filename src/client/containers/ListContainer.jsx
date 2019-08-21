import React from 'react';
import { useSelector } from 'react-redux';
import List from '../components/List';

const ListContainer = (props) => {
  const { blueTeam, redTeam } = useSelector((store) => store.game);
  return (
    <section>
      <List list={blueTeam} type="team" color="blue" />
      <List list={redTeam} type="team" color="red" />
    </section>
  );
};

export default ListContainer;
