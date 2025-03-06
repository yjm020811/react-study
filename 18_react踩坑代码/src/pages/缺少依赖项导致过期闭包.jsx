import { useState, useEffect } from "react";

export const Q1 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => count + 1);
      // 错误：这里打印出的count值总是：0
      console.log("count", count);
    }, 1000);
    return () => clearInterval(interval);
  }, []); // ❌ 依赖项为空，未包含 count

  return <>{count}</>;
};

// 问题：useEffect 仅在组件挂载时运行一次，内部的 count 始终是初始值 0
// 解决：将 count 作为依赖项添加到 useEffect 的依赖数组中
