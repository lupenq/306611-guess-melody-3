const QuestionGenre = ({question}) => {
  // const {answers} = question;
  return (
    <section className="game game--genre">
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
        </a>

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx="390" cy="390" r="370"
            style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}} />
        </svg>

        <div className="game__mistakes">
          <div className="wrong"></div>
          <div className="wrong"></div>
          <div className="wrong"></div>
        </div>
      </header>

      <section className="game__screen">
        <h2 className="game__title">Выберите {question.genre} треки</h2>
        <form className="game__tracks">
          {
            question.answers.map((answer, index) => (
              <div className="track" key={index}>
                <button className="track__button track__button--play" type="button"></button>
                <div className="track__status">
                  <audio src={answer.src}/>
                </div>
                <div className="game__answer">
                  <input className="game__input visually-hidden"
                    type="checkbox"
                    name="answer"
                    value={`answer-${index}`}
                    id={`answer-${index}`}
                  />
                  <label className="game__check" htmlFor={`answer-${index}`}>Отметить</label>
                </div>
              </div>
            ))
          }
          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    </section>
  );
};

QuestionGenre.propTypes = {
  question: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string,
        genre: PropTypes.string,
        answers: PropTypes.arrayOf(
            PropTypes.shape({
              src: PropTypes.string,
              genre: PropTypes.string
            })
        )
      })),
};

export default QuestionGenre;
