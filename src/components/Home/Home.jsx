import "./Home.css";
import { Link } from "react-router-dom";
import { List } from "../List/List";
// import App from "../../App";

export const Home = ({ tests, setChoosedQiuz, startTest }) => {
  // const handleButtonClick = () => {
  //   App.getTests();
  // };
  return (
    <>
      <div className="Home">
        <Link to="/statistic">
          <input
            type="button"
            value="Statistic"
            className="Home__statistic"
          />
        </Link>
        <div className="Home__random-quiz random-quiz">
          <h1 className="random-quiz__header Home__header">
            You can choose a random quiz
          </h1>
          <Link to="/play">
            <input
              type="button"
              className="random-quiz__button"
              value={`I'm lucky`}
              onClick={startTest}
            />
          </Link>
        </div>
        {tests[0] === undefined ? (
          <div class="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          <div className="Home__quizzes-list quizzes-list">
            <h1 className="quizzes-list__header Home__header">
              Or you can choose any qiuz from this list
            </h1>
            {/* <input
              type="button"
              value="Get new 10 random quiz"
              className="quizzes-list__random-quizzes-button button"
              onClick={handleButtonClick()}
            /> */}
            <div className="quizzes-list__list">
              {
                <List
                  tests={tests}
                  setChoosedQiuz={setChoosedQiuz}
                  startTest={startTest}
                />
              }
            </div>
          </div>
        )}
      </div>
    </>
  );
};
