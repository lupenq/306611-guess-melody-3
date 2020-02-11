import {BrowserRouter, Route, Switch} from 'react-router-dom';
import WelcomeScreen from "../WelcomeScreen/WelcomeScreen";
import QuestionArtist from '../QuestionArtist/QuestionArtist';
import QuestionGenre from '../QuestionGenre/QuestionGenre';

const welcomeButtonHandler = () => { };

const App = (props) => {
  const {errorsCount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <WelcomeScreen
            errorsCount={errorsCount}
            onWelcomeButtonClick={welcomeButtonHandler}
          />
        </Route>
        <Route exact path="/dev-artist">
          <QuestionArtist />
        </Route>
        <Route exact path="/dev-genre">
          <QuestionGenre />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
};


export default App;
