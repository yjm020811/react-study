import { useState, useCallback, memo } from "react";

export const UseCallback = () => {
  // 定义计数器状态
  const [count, setCount] = useState(0);

  // 使用 useCallback 包裹 increment 函数
  // 目的：保持函数引用的稳定性，避免每次渲染都创建新的函数
  // 空依赖数组表示这个函数不依赖任何外部变量，只会在组件首次渲染时创建
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h4>useCallback</h4>
      <p>Count: {count}</p>
      {/* 点击按钮时调用 increment 函数 */}
      <button onClick={increment}>Increment</button>
      {/* 将 increment 函数作为 props 传递给子组件 */}
      <Son onClick={increment} />
    </div>
  );
};

// 使用 memo 包裹 Son 组件
// memo 的作用：如果组件的 props 没有变化，则跳过渲染
export const Son = memo(({ onClick }) => {
  // 用于演示组件重新渲染的时机
  console.log("Son组件重新渲染");

  return (
    <div>
      <div>Son</div>
      {/* 在子组件中使用从父组件传递的函数 */}
      <button onClick={onClick}>在子组件中调用</button>
    </div>
  );
});

// 性能优化要点：
// 1. useCallback 确保函数引用稳定
// 2. memo 避免子组件不必要的重新渲染
// 3. 这两个 API 需要配合使用才能达到优化效果
