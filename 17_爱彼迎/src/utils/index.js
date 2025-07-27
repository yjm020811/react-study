import axios from "axios";
// 第一步:利用axios对象的create方法,去创建axios实例(其他的配置:基础路径,超时时间)
let request = axios.create({
  // 基础路径
  baseURL: "http://codercba.com:1888/airbnb/api",
  timeout: 5000
});

// 第二步:request实例添加请求响应拦截器
request.interceptors.request.use(
  (config) => {
    // config配置对象,headers属性请求头,经常给服务器携带公共参数
    const token = localStorage.getItem("token");
    config.headers.token = token;
    // 返回配置对象
    return config;
  },
  (error) => {
    // 失败的回调
    return Promise.reject(new Error(error));
  }
);

// 第三步:响应拦截器
request.interceptors.response.use(
  (response) => {
    // 对于后端返回的数据的统一处理...
    return response.data;
  },
  (error) => {
    // 失败的回调
    return Promise.reject(new Error(error));
  }
);

// 对外暴露
export default request;
