import WelcomeScreen from '../WelcomeScreen/WelcomeScreen.jsx';
import React from 'react';

const App = (props) => {
  return (
    // eslint-disable-next-line react/prop-types
    <WelcomeScreen errorsCount={props.errorsCount} />
  );
};

export default App;
