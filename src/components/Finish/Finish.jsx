import "./Finish.css";
import { Link } from "react-router-dom";

export const Finish = ({
  correctAnswers,
  inCorrectAnswers,
  setCorrectAnswers,
  setInCorrectAnswers,
  elapsedTime,
  statTime,
}) => {
  function setAnswersNull() {
    setCorrectAnswers(0);
    setInCorrectAnswers(0);
  }
  return (
    <>
      <div className="Finish">
        <div className="Finish__results">
          <div className="Finish__header">
            Your results: {correctAnswers * 10} points
          </div>
          <div className="Finish__statistic statistic">
            <div className="statistic__header">Your statistic:</div>
            <div>
              <div className="statistic__answers">
                <div className="statistic__correct">
                  Correct answers: {correctAnswers}
                </div>
                <div className="statistic__incorrect">
                  Incorrect answers: {inCorrectAnswers}
                </div>
              </div>
            </div>
            <div className="statistic__time">
              Your time: {Math.round(elapsedTime / 1000)} s
            </div>
            <div className="statistic__avtrage-time_quiz">
              Average time in this test{" "}
              {Math.round(elapsedTime / 1000) /
                (correctAnswers + inCorrectAnswers)}{" "}
              s
            </div>
          </div>
        </div>
        <div className="Finish__buttons">
          <Link to="/play">
            <input
              type="button"
              className="Finish__button button-play button"
              value={`Play again`}
              onClick={() => {
                setAnswersNull();
              }}
            />
          </Link>
          <Link to="/home">
            <input
              type="button"
              className="Finish__button button-home button"
              value={"Go home"}
              onClick={() => {
                setAnswersNull();
              }}
            />
          </Link>
        </div>
      </div>
    </>
  );
};
