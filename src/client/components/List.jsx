import React from 'react';
// would be a straight down array of names and it would Display names/words?
const List = ({ list, color, listType }) => {
  const listWords = [];
  list.forEach((words) => {listWords.push(<div> {words} </div>)});

  const label = `${color}  ${listType}`;
  return (
    <section>
      <div id={label}>
        {label}
      </div>
      <div id={label + ' words'}>
        {listWords}
      </div>
    </section>
  );
};

export default List;
