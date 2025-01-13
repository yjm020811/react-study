import axios from "axios";
import { getToken, removeToken } from "./token";
import router from "@/router";
const request = axios.create({
  baseURL: "http://geek.itheima.net/v1_0",
  timeout: 5000
});

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    // 获取token
    const token = getToken();
    // 将token添加到请求头
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // 如果token过期，则清除token
    if (error.response.status === 401) {
      removeToken();
      router.navigate("/login");
    }
    return Promise.reject(error);
  }
);

export { request };
