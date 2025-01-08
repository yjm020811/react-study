import { useEffect, useState, memo } from "react";

// 父组件
export const MemoFather = () => {
  // 定义 count 和 flag 两个状态
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  return (
    <>
      <h2 style={{ color: "red" }}>性能优化</h2>
      <h4>React.memo</h4>
      <h4>父组件</h4>
      <p>count 的值是：{count}</p>
      <p>flag 的值是：{String(flag)}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
      <button onClick={() => setFlag((prev) => !prev)}>Toggle</button>
      <Son count={count} />
    </>
  );
};

export const Son = memo(({ count }) => {
  // 被 memo 包裹子组件，只有子组件依赖的props发生变化时，子组件才会重新渲染，否则，子组件不会重新渲染
  useEffect(() => {
    console.log("触发了子组件的渲染");
  });
  return (
    <>
      <h3>子组件 {count}</h3>
      <hr />
    </>
  );
});
