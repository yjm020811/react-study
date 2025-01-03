import { useEffect, useState } from "react";

const Watch = () => {
  const [message, setMessage] = useState("Hello");
  const [count, setCount] = useState(0);

  // 监听单个值的变化
  useEffect(() => {
    console.log("message changed:", message);
  }, [message]);

  // 监听多个值的变化
  useEffect(() => {
    console.log("count changed:", count);
  }, [count]);

  return (
    <div>
      <h2>Watch 示例</h2>

      <div>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="输入消息"
        />
      </div>

      <div>
        <button onClick={() => setCount(count + 1)}>点击计数: {count}</button>
      </div>
    </div>
  );
};

export default Watch;
