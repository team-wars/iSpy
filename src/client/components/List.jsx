import React from 'react';
// would be a straight down array of names and it would Display names/words?
const List = ({ list, color, listType }) => {
  const listWords = [];
  for(let word of list){ 
    listWords.push(<div> {word} </div>);
  }
  const label = `${color}  ${listType}`;
  return (
    <section>
      <div id={label}>
        {label}
      </div>
      <div>
        {listWords}
      </div>
    </section>
  );
};

export default List;
