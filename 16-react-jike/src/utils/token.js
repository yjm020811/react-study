// 封装和token相关的工具函数

const TOKENKEY = "token_key";

// 获取token
export const getToken = () => {
  return localStorage.getItem(TOKENKEY);
};

// 设置token
export const setToken = (token) => {
  localStorage.setItem(TOKENKEY, token);
};

// 删除token
export const removeToken = () => {
  localStorage.removeItem(TOKENKEY);
};
