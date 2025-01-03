// 引入react核心库
import React from "react";
// 引入ReactDOM
import ReactDOM from "react-dom/client";
// 编写一个组件
import App from "./App";

// 渲染App组件到页面
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
