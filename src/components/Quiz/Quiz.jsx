import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Question } from "../Question/Question";

export const Quiz = ({
  quiz,
  correctAnswers,
  setCorrectAnswers,
  inCorrectAnswers,
  setIncorrectAnswers,
  endTest
}) => {
  const [numberQuestion, setNumberQuestion] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(
    quiz[numberQuestion - 1]
  );
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    setCurrentQuestion(quiz[numberQuestion - 1]);
  }, [numberQuestion, quiz]);

  const handleAnswerChange = (answer) => {
    setSelectedAnswer(answer);
  };

  function countAnswer(answer, question) {
    if (answer === question.correct_answer) {
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setIncorrectAnswers(inCorrectAnswers + 1);
    }
  }

  const getNextQuestion = () => {
    if (selectedAnswer !== null) {
      countAnswer(selectedAnswer, currentQuestion);
      setSelectedAnswer(null);
      setNumberQuestion(numberQuestion + 1);
    } 
  };

  console.log(correctAnswers, inCorrectAnswers);

  return (
    <>
      <div className="Quiz">
        <div className="Quiz__question">
          <div className="Quiz__number">Question №{numberQuestion}</div>
          <Question
            question={currentQuestion}
            selectedAnswer={selectedAnswer}
            onAnswerChange={handleAnswerChange}
          />
          {numberQuestion < 10 ? (
            <input
              type="button"
              className="Quiz__button-next"
              value={"Next question"}
              onClick={getNextQuestion}
            />
          ) : (
            <Link to="/finish">
              <input
                type="button"
                className="Quiz__button-result"
                value={"See result"}
                onClick={() => {
                  countAnswer(selectedAnswer, currentQuestion);
                  endTest();
                }}
              />
            </Link>
          )}
        </div>
        <div className="Quiz__count-answers">
          <div className="Quiz__count-answers_correct">
            Correct answers: {correctAnswers}
          </div>
          <div className="Quiz__count-answers_incorrect">
            Incorrect answers: {inCorrectAnswers}
          </div>
        </div>
      </div>
    </>
  );
};
