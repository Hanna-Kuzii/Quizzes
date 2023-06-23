
export const Question = ({
  question,
  selectedAnswer,
  onAnswerChange
}) => {
  const answers = [
    ...question.incorrect_answers,
    question.correct_answer,
  ].sort();

  console.log(selectedAnswer, "selected");

  return (
    <>
      <div className="Question">
        <div className="Question__header">{question.question}</div>
        <div className="Question__answers">
          {answers.map((answer, index) => (
            <label key={index}>
              <input
                type="radio"
                name="answer"
                className="Question__answer"
                value={answer}
                checked={answer === selectedAnswer}
                onChange={() => onAnswerChange(answer)}
              />
              {answer}
            </label>
          ))}
        </div>
      </div>
    </>
  );
};
