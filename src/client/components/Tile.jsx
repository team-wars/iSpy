import React from 'react';

const Tile = (props) => {
  const {
    testClick, word, affiliation, selectTile,
  } = props;

  return (
    <article className="tile">
      <button className="unselected-tile-button" onClick={selectTile} fakeOnClick={testClick} type="button">{word}</button>
    </article>
  );
};

export default Tile;
