import "./Quiz.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Question } from "../Question/Question";

export const Quiz = ({
  quiz,
  correctAnswers,
  setCorrectAnswers,
  inCorrectAnswers,
  setInCorrectAnswers,
  endTest,
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
      setInCorrectAnswers(inCorrectAnswers + 1);
    }
  }

  const getNextQuestion = () => {
    const inputElement = document.querySelector(".question__button");
    console.log(inputElement.checked)
    if (selectedAnswer !== null) {
      countAnswer(selectedAnswer, currentQuestion);
      setSelectedAnswer(null);
      setNumberQuestion(numberQuestion + 1);
      inputElement.classList.remove("question__button_red");
    } else {
      inputElement.classList.add("question__button_red");
    }
  };

  return (
    <>
      <div className="Quiz">
        <div className="Quiz__question question">
          <div className="question__number">Question №{numberQuestion}</div>
          <div className="question__text">
            <Question
              question={currentQuestion}
              selectedAnswer={selectedAnswer}
              onAnswerChange={handleAnswerChange}
            />
          </div>

          {numberQuestion < 10 ? (
            <input
              type="button"
              className="question__button-next question__button button"
              value={"Next question"}
              onClick={getNextQuestion}
            />
          ) : (
            <Link to="/finish">
              <input
                type="button"
                className="question__button-result question__button question__button_red button"
                value={"See result"}
                onClick={() => {
                  countAnswer(selectedAnswer, currentQuestion);
                  endTest();
                }}
              />
            </Link>
          )}
        </div>
        <div className="question__count-answers">
          <div className="question__count-answers_correct">
            Correct answers: {correctAnswers}
          </div>
          <div className="question__count-answers_incorrect">
            Incorrect answers: {inCorrectAnswers}
          </div>
        </div>
      </div>
    </>
  );
};
