// 和用户相关的状态数据
import { createSlice } from "@reduxjs/toolkit";
import { getToken, setToken as setTokenFn, removeToken } from "@/utils";

import { loginApi, fetchUserInfoApi } from "@/api/user";

const userSlice = createSlice({
  name: "user",
  // 数据状态
  initialState: {
    token: getToken() || "",
    userInfo: {}
  },
  // 修改数据状态
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      // 将token存储到localStorage
      setTokenFn(action.payload);
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    clearUserInfo: (state) => {
      state.userInfo = {};
      state.token = "";
      removeToken();
    }
  }
});

// 导出reducer函数
export default userSlice.reducer;

// 异步方法 完成登录获取token
const fetchLogin = (data) => {
  return async (dispatch) => {
    // 发送异步请求
    const res = await loginApi(data);
    // 提交同步action
    dispatch(setToken(res.data.token));
  };
};

// 获取用户信息
const fetchUserInfo = () => {
  return async (dispatch) => {
    // 发送异步请求
    const res = await fetchUserInfoApi();
    // 提交同步action
    dispatch(setUserInfo(res.data));
  };
};

// 解构出actionCreator
export const { setToken, setUserInfo, clearUserInfo } = userSlice.actions;

// 导出异步方法
export { fetchLogin, fetchUserInfo };
