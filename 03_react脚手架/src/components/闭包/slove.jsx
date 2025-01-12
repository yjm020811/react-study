import React, { useState, useEffect, useRef } from "react";

function SolveBiBao() {
  const [count, setCount] = useState(0);
  const countRef = useRef(count); // 创建一个引用来保存 count

  useEffect(() => {
    countRef.current = count; // 每次更新 count 时，更新 ref 的值
  }, [count]);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("解决闭包后的值", countRef.current); // 使用 ref 访问最新的 count 值
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}

export default SolveBiBao;
