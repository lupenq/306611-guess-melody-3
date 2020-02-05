import React from 'react';

const WelcomeScreen = (props) => {
  return (
    // eslint-disable-next-line react/prop-types
    <h1>Можно допустить ошибок: {props.errorsCount}</h1>
  );
};

export default WelcomeScreen;
