import { Item } from "../Item/Item";

export const List = ({ tests, setChoosedQiuz, startTest }) => {
  // console.log("quzzzzzzzz", tests);
  return (
    <>
      <div className="List">
        <div className="List__header">You have 10 different quiz</div>
        {tests.map((test, index) => (
          <Item
            key={index}
            test={test}
            setChoosedQiuz={setChoosedQiuz}
            startTest={startTest}
          />
        ))}
      </div>
    </>
  );
};
