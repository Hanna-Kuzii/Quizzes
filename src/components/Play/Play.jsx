import { Link } from "react-router-dom";
import { Quiz } from "../Quiz/Quiz";

export const Play = ({
  quiz,
  correctAnswers,
  setCorrectAnswers,
  inCorrectAnswers,
  setIncorrectAnswers,
  startTest,
  endTest
}) => {
  // const location = useLocation();
  // const quiz = location.state.test;

  return (
    <>
      <div className="play">
        {/* <div className="play__quiz">{tests.map(test)}</div> */}
        {
          <Quiz
            quiz={quiz}
            correctAnswers={correctAnswers}
            setCorrectAnswers={setCorrectAnswers}
            inCorrectAnswers={inCorrectAnswers}
            setIncorrectAnswers={setIncorrectAnswers}
            endTest={endTest}
          />
        }
        <Link to="/home">
          <input
            type="button"
            className="play__cancel"
            value={"Cancel"}
            onClick={() => {
              setCorrectAnswers(0);
              setIncorrectAnswers(0);
            }}
          />
        </Link>
        <Link to="/finish">
          <input
            type="button"
            className="play__finish"
            value={"Finish"}
            onClick={endTest}
          />
        </Link>
      </div>
    </>
  );
};
