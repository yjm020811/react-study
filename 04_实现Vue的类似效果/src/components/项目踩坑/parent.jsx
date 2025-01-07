import { useState, useCallback } from "react";
import Child1 from "./child1";
import Child2 from "./child2";

const Parent = () => {
  const [count, setCount] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(null);

  const getList = useCallback(
    (inputValue) => {
      return {
        count,
        selectedNumber,
        inputValue
      };
    },
    [count, selectedNumber]
  );

  return (
    <div>
      <h2>项目踩坑</h2>
      <Child1 getList={getList} />
      <Child2 onNumberClick={setSelectedNumber} />
      <button onClick={() => setCount(count + 1)}>点击：{count}</button>
    </div>
  );
};

export default Parent;
