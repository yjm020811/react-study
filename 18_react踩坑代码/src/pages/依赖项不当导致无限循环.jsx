import { useState, useEffect } from "react";

export const Q2 = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      });
  }, [user]); // ❌ 依赖项是 user，每次 user 变化会重新触发 effect, // ✅ 空依赖数组表示只在组件挂载时执行一次

  return (
    <>
      <p>{JSON.stringify(user)}</p>
    </>
  );
};

// 问题：useEffect的依赖项数组错误地依赖了user状态本身，导致每次更新user时会重复触发数据请求，形成无限循环
// 解决：将依赖项数组改为空数组，表示只在组件挂载时执行一次
