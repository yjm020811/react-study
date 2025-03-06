import { Link } from "react-router-dom";

export const UserInfo = () => {
  // 对于已经登录的用户，显示用户信息
  return (
    <>
      <Link to="/login">登录</Link>
    </>
  );
};
