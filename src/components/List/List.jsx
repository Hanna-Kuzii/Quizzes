import './List.css';
import { Item } from "../Item/Item";

export const List = ({ tests, setChoosedQiuz, startTest }) => {
  return (
    <>
      <div className="List">
        <div className="List__header">You have 10 different quizzes</div>
        <div className="List__quizzes">
        {tests.map((test, index) => (
          <Item
            key={index}
            test={test}
            setChoosedQiuz={setChoosedQiuz}
            startTest={startTest}
          />
        ))}
        </div>

      </div>
    </>
  );
};
