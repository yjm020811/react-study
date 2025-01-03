import React, { useState } from "react";

// 创建一个自定义输入框组件
const CustomInput = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

// 主组件
const VModel = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <h2>React中实现Vue v-model效果</h2>

      {/* 使用自定义输入框组件 */}
      <CustomInput value={inputValue} onChange={setInputValue} />

      {/* 显示当前值 */}
      <p>当前输入值: {inputValue}</p>
    </div>
  );
};

export default VModel;
