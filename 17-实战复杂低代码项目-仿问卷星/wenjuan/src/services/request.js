import axios from "axios";

// 创建 axios 实例
const request = axios.create({
  baseURL: "/api",
  timeout: 5000
});

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    const { data } = response;
    if (data.code === 200) {
      return data.data;
    } else {
      return Promise.reject(data.message);
    }
  },
  (error) => {
    // 处理响应错误
    return Promise.reject(error);
  }
);

export default request;
