// 引入react核心库
import React, { Suspense } from "react";
// 引入ReactDOM
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

// 编写一个组件
import App from "./App";
import "normalize.css";
import "./assets/css/index.less";
import "./assets/css/reset.less";

// 渲染App组件到页面
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <Suspense fallback="loading">
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </Suspense>
);
