import "./Statistic.css";
import { Link } from "react-router-dom";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

Chart.register(ArcElement, Tooltip, Legend);

export const Statistic = ({
  statCorrectAnswers,
  statInCorrectAnswers,
  statQuizzes,
  statQuestions,
  statTime,
}) => {
  const data = {
    labels: ["Correct Answers", "Incorrect Answers"],
    datasets: [
      {
        data: [statCorrectAnswers, statInCorrectAnswers],
        backgroundColor: ["#8fce00", "#ffff32"],
      },
    ],
  };
  const options = {}

  return (
    <>
      <div className="Statistic">
        <div className="Statistic__title">Your Statistic:</div>

        {statQuizzes === 0 ? (
          <div className="Statistic__null-quiz">
            You haven't played any quiz
          </div>
        ) : (
          <div className="Statistic__description">
            <div className="Statistic__answers">
              <div className="Statistic__correct">
                Correct answers: <b>{statCorrectAnswers}</b>
              </div>
              <div className="Statistic__incorrect">
                Incorrect answers: <b>{statInCorrectAnswers}</b>
              </div>
              <div className="Statistic__chart">
                <Pie data={data} options={options} className="Statistic__pie"></Pie>
              </div>

            </div>
            <div className="Statistic__count-quizzes">
              You have played:{" "}
              <b>
                {statQuizzes} {statQuizzes === 1 ? <>quiz</> : <>quizzes</>}
              </b>
            </div>
            <div className="Statistic__questions">
              You have answered to: <b>{statQuestions} questions</b>
            </div>
            <div className="Statistic__avtrage-time_quiz">
              Average time to answer one question{" "}
              <b>{Math.round(statTime / statQuestions) / 1000} s </b>
            </div>
          </div>
        )}
        <Link to="/home">
          <input
            type="button"
            className="Statistic__button button"
            value={"Go home and play"}
          />
        </Link>
      </div>
    </>
  );
};
