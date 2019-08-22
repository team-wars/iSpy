import React from 'react';

const Tile = ({ testClick, word, affiliation, selectTile } ) => (
  <article className="tile">
    <button className="unselected-tile-button" onClick={() => selectTile(affiliation)} fakeOnClick={testClick} type="button">{word}</button>
  </article>
);

export default Tile;
