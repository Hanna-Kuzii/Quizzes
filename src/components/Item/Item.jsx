import { Link } from "react-router-dom";

export const Item = ({ test, setChoosedQiuz, startTest }) => {
  // console.log("oneee", test);
  return (
    <>
      <div className="item">
        <div className="item__title">Name of quiz: {test[0].category}</div>
        <div className="item__length">{test.length} questions</div>
        <Link to="/play">
          <input
            type="button"
            className="item__button"
            value={"Choose quiz"}
            onClick={() => {
              setChoosedQiuz(test);
              startTest();
            }}
          />
        </Link>
      </div>
    </>
  );
};
