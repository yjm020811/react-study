// src/utils/axios.js
import axios from "axios";

// 创建axios实例
const axiosInstance = axios.create({
  baseURL: "http://jsonplaceholder.typicode.com",
  timeout: 10000 // 请求超时时间
});

// 请求拦截器
axiosInstance.interceptors.request.use(
  (config) => {
    // 可以在此处加入 token 或其他请求头
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
axiosInstance.interceptors.response.use(
  (response) => {
    // 处理成功的响应
    return response.data;
  },
  (error) => {
    // 处理错误的响应
    console.error("API Error:", error.response || error);
    return Promise.reject(error);
  }
);

// 导出封装的 Axios 实例
export default axiosInstance;
