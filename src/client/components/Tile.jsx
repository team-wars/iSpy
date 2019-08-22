import React from 'react';

const Tile = (props) => {
  const {
    word, affiliation, selectTile, boardLocation, selected
  } = props;

  return (
    <article className="tile">
      <button className={selected ? `${affiliation}-tile-button` : "unselected-tile-button"} onClick={() => selectTile(affiliation, boardLocation)} type="button">{word}</button>
    </article>
  );
};

export default Tile;
