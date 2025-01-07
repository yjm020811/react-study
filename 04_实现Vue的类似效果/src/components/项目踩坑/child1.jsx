import { memo, useState } from "react";

const Child1 = memo(({ getList }) => {
  console.log("Child1 渲染");
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    const result = getList(inputValue);
    console.log("搜索结果:", result);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleSearch}>搜索</button>
    </div>
  );
});

export default Child1;
