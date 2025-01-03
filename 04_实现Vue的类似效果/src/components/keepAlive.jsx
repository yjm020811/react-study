import React, { useState, useEffect } from "react";

const ComponentA = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("ComponentA Mounted");
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      console.log("ComponentA Unmounted");
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h3>Component A</h3>
      <p>计数器: {count}</p>
    </div>
  );
};

const ComponentB = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("ComponentB Mounted");
    const timer = setTimeout(() => {
      setText("B组件的文本已更新！");
    }, 2000);

    return () => {
      console.log("ComponentB Unmounted");
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      <h3>Component B</h3>
      <p>{text || "等待2秒后文本将会更新..."}</p>
    </div>
  );
};

const KeepAliveExample = () => {
  const [active, setActive] = useState("A");
  const [mounted] = useState({
    A: true,
    B: true
  });

  return (
    <div>
      <h2>React中实现Vue keepAlive效果</h2>
      <button onClick={() => setActive("A")}>Show A</button>
      <button onClick={() => setActive("B")}>Show B</button>

      <div style={{ display: active === "A" ? "block" : "none" }}>
        {mounted.A && <ComponentA />}
      </div>
      <div style={{ display: active === "B" ? "block" : "none" }}>
        {mounted.B && <ComponentB />}
      </div>
    </div>
  );
};

export default KeepAliveExample;
