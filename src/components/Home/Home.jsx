import { Link } from "react-router-dom";

import { List } from "../List/List";

export const Home = ({ tests, setChoosedQiuz, startTest }) => {
  // console.log(tests);

  return (
    <>
      <header className="Home_header">Choose quiz</header>
      <div className="Home__main">
        <Link to="/play">
          <input
            type="button"
            className="Home__button"
            value={`I'm lucky`}
            onClick={startTest}
          />
        </Link>
        <div className="Home__quizes">
          {
            <List
              tests={tests}
              setChoosedQiuz={setChoosedQiuz}
              startTest={startTest}
            />
          }
        </div>
      </div>
    </>
  );
};
