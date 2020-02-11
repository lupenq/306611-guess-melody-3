import {BrowserRouter, Route, Switch} from 'react-router-dom';
import WelcomeScreen from "../WelcomeScreen/WelcomeScreen";
import QuestionArtist from '../QuestionArtist/QuestionArtist';
import QuestionGenre from '../QuestionGenre/QuestionGenre';

const welcomeButtonHandler = () => { };

const App = (props) => {
  const {errorsCount, questions} = props;

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
          <QuestionArtist
            question={questions[1]}
          />
        </Route>
        <Route exact path="/dev-genre">
          <QuestionGenre
            question={questions[0]}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
  questions: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string,
        genre: PropTypes.string,
        answers: PropTypes.arrayOf(
            PropTypes.shape({
              src: PropTypes.string,
              genre: PropTypes.string
            })
        )
      }),
      PropTypes.shape({
        type: PropTypes.string,
        song: PropTypes.object,
        answers: PropTypes.array
      })
  )
};


export default App;
