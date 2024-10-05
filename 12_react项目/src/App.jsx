import React, { memo } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./router";
import AppHeader from "./components/app-header";
import AppFooter from "./components/app-footer";

// 创建App组件
const App = memo(() => {
  return (
    <div className="app">
      <AppHeader></AppHeader>
      <div className="content">{useRoutes(routes)}</div>
      <AppFooter></AppFooter>
    </div>
  );
});

// 暴露App组件
export default App;
