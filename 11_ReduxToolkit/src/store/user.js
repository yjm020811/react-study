import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user-slice",
  //   初始数据
  initialState: {
    name: "张三",
    gender: "男",
    age: 18
  },
  // 操作数据的方法
  reducers: {
    setName(state, action) {
      // state表示当前的状态
      //action.type表示action的类型，action.payload表示action的值

      //   return {
      //     ...state,
      //     name: action.payload
      //   };
      // return的写法是详细的写法，但是会生成一个新对象，推荐下面的直接修改state
      state.name = action.payload;
    },
    setGender(state, action) {
      state.gender = action.payload;
    },
    setAge(state, action) {
      state.age = action.payload;
    }
  }
});

export default userSlice;
