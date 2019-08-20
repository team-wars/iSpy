import React from 'react';

const Tile = (props) => {
  const { testClick, word } = props;
  return (
    <article className="tile">
      <button onClick={testClick} type="button">{word}</button>
    </article>
  );
};

export default Tile;
