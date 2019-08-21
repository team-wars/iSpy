import React from 'react';

const LandingPageButton = (props) => {
  const { buttonName, buttonFunction } = props;
  return (
    <button type="button" onClick={buttonFunction}>{buttonName}</button>
  );
};

export default LandingPageButton;
