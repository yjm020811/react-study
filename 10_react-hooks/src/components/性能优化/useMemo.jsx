import { useState, useMemo } from "react";

// 父组件
export const UseMemoFather = () => {
  // 定义 count 和 flag 两个状态
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  // useMemo的返回值是一个计算好的值，而不是一个函数了
  const tips = useMemo(() => {
    console.log("触发了 tips 的重新计算"); // 当count与flag无论哪一个发生变化都会导致重新执行，我希望只有依赖项flag发生变化时才会重新执行，所以使用useMemo解决这个问题
    return flag ? (
      <p>哪里贵了，不要睁着眼瞎说好不好</p>
    ) : (
      <p>这些年有没有努力工作，工资涨没涨</p>
    );
  }, [flag]); // 只有当flag发生变化时，才会重新执行

  return (
    <>
      <h4>useMemo</h4>
      <h4>父组件</h4>
      <p>count 的值是：{count}</p>
      <p>flag 的值是：{String(flag)}</p>
      {tips}
      <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
      <button onClick={() => setFlag((prev) => !prev)}>Toggle</button>
      <hr />
    </>
  );
};
