import React from 'react';

const Tile = (props) => {
  const { testClick } = props;
  return (
    <article className="tile">
      <button onClick={testClick} type="button">This Is A Tile With A Word</button>
    </article>
  );
};

export default Tile;
