import { useEffect, useState } from "react";

function Effect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log(count);
    }, 1000);
    return () => clearInterval(timer);
    // 想要解决闭包问题导致count不更新，可以将count作为依赖项传入useEffect,如果依赖项为空，则会导致闭包问题
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default Effect;
