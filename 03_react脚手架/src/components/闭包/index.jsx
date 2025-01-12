import React, { useState, useEffect } from "react";
import SolveBiBao from "./slove";

function BiBao() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      // 闭包：这个函数可以访问 `count` 变量，即使 count 已经改变
      console.log("闭包产生的问题", count); // 这里访问的是组件渲染时的 `count` 值
    }, 1000);
    return () => clearInterval(timer);
  }, []); // 依赖项为空数组

  return (
    <>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <hr />
      <SolveBiBao></SolveBiBao>
    </>
  );
}

export default BiBao;
