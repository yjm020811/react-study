import { useEffect, useState } from "react";

export const Q3 = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    let isActive = true;
    setTimeout(() => {
      if (isActive) {
        // ❌ 如果用户在请求完成前修改了 query，可能导致结果显示不一致
        setResults([`Result for: ${query}`]);
        console.log("query", query);
      }
    }, 1000);
    return () => {
      isActive = false; // ✅ 清理时标记为无效
    };
  }, [query]);
  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      {results.map((r) => (
        <div key={r}>{r}</div>
      ))}
    </div>
  );
};

// 问题：快速输入时，多个异步请求可能以不确定的顺序完成，导致旧结果覆盖新结果
// 解决：useEffect的返回函数，用于清理，可以避免这种情况
