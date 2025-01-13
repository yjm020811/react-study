// 封装高阶组件
// 核心逻辑：判断用户是否登录，如果登录，则渲染组件，否则跳转到登录页面

import { Navigate } from "react-router-dom";
import { getToken } from "@/utils";

// eslint-disable-next-line react/prop-types
export default function AuthRoute({ children }) {
  const token = getToken();
  if (token) {
    return <>{children}</>;
  } else {
    return <Navigate to="/login" replace />;
  }
}
