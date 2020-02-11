import ReactDOM from 'react-dom';
import App from './components/App/App';
import questions from './mocks/questions';


const Settings = {
  ERRORS_COUNT: 3,
};

ReactDOM.render(
    <App
      errorsCount={Settings.ERRORS_COUNT}
      questions={questions}
    />,
    document.getElementById(`root`)
);
