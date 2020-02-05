import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.jsx';

const Settings = {
  ERRORS_COUNT: 3,
};

ReactDOM.render(
    <App
      errorsCount={Settings.ERRORS_COUNT}
    />,
    document.getElementById(`root`)
);
