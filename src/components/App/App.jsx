import React from "react";
import PropTypes from "prop-types";
import WelcomeScreen from "../WelcomeScreen/WelcomeScreen.jsx";

const welcomeButtonHandler = () => {};

const App = (props) => {
  const {errorsCount} = props;

  return (
    <WelcomeScreen
      errorsCount={errorsCount}
      onWelcomeButtonClick={welcomeButtonHandler}
    />
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
};


export default App;
