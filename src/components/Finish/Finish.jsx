import { Link } from "react-router-dom";

export const Finish = ({ correctAnswers, inCorrectAnswers, elapsedTime }) => {
  return (
    <>
      <div className="finish">
        <div>
          <div className="finish__results">
            <div className="finish__header">
              Your results: {correctAnswers * 10} points
            </div>
            <div className="finish__correct">
              Correct answers: {correctAnswers}
            </div>
            <div className="finish__incorrect">
              Incorrect answers: {inCorrectAnswers}
            </div>
            <div className="finish__time">Your time: {Math.round(elapsedTime / 1000)} s</div>
          </div>
          <Link to="/home">
            <input
              type="button"
              className="finish__button button-play"
              value={`Play again`}
            />
          </Link>
          <Link to="/home">
            <input
              type="button"
              className="finish__button button-home"
              value={"Go home"}
            />
          </Link>
        </div>
      </div>
    </>
  );
};
