import { useState } from "react";

function State() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setTimeout(() => {
      // setCount(count + 1);
      // 想要解决useState闭包问题，可以使用函数式更新
      setCount((count) => count + 1);
    }, 1000);
  };
  const handleReset = () => {
    setCount(0);
  };
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default State;
