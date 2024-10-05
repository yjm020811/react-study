import { HashRouter, Routes, Route } from "react-router-dom";
import LayOut from "./layout/index";
import Login from "./views/login/index";
import Dashboard from "./views/dashboard";
import GoodList from "./views/goods/goodList";
import User from "./views/user";
function App() {
  return (
    <HashRouter>
      <Routes>
        {/* 在一级路由中，不需要指定出口（类似于Vue的router-view） */}
        <Route path="/" element={<LayOut />}>
          {/* 二级路由需要指定出口 */}
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/goods/list" element={<GoodList />}></Route>
          <Route path="/user" element={<User />}></Route>
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
