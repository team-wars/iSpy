import React from 'react';

const ClueDisplay = (props) => {
  console.log('clue display props ', props)
  return (
    <section>
      {props.clue}
      {props.guesses}
    </section>
  )
};

export default ClueDisplay;