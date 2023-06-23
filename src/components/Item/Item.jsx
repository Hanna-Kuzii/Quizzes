import './Item.css';
import { Link } from "react-router-dom";

export const Item = ({ test, setChoosedQiuz, startTest }) => {
  return (
    <>
      <div className="Item">
        <div className="Item__title">
          <div className="Item__name">Name of quiz:</div>
          <div className="Item__value">{test[0].category}</div>
        </div>
        <div className="Item__length">
          <div className="Item__value">{test.length}</div>
          <div className="Item__name">questions</div>
        </div>
        <Link to="/play">
          <input
            type="button"
            className="Item__button"
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
