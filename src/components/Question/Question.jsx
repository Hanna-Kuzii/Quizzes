import "./Question.css";
export const Question = ({ question, selectedAnswer, onAnswerChange }) => {
  const answers = [
    ...question.incorrect_answers,
    question.correct_answer,
  ].sort();

  return (
    <>
      <div className="Question">
        <div className="Question__header">{question.question}</div>
        <div className="Question__answers">
          {answers.map((answer, index) => (
            <div key={index}  className="Question__answer">
              <input
                type="radio"
                id={`answer${index}`}
                name="answer"
                className="Question__answer_radiobutton"
                value={answer}
                checked={answer === selectedAnswer}
                onChange={() => onAnswerChange(answer)}
              />
              <label for={`answer${index}`} className="Question__answer_text">
                {answer}
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
