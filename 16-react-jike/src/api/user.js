import { request } from "@/utils";

// 登录
export const loginApi = (data) => {
  return request({
    url: "/authorizations",
    method: "post",
    data
  });
};

// 获取用户信息
export const fetchUserInfoApi = () => {
  return request({
    url: "/user/profile",
    method: "get"
  });
};
