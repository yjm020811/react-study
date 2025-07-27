import React, { useState } from "react";
import { Index1 } from "./components/组件通信/父传子.jsx";
import { Index2 } from "./components/组件通信/子传父.jsx";
import { A } from "./components/组件通信/兄弟组件通信/a.jsx";
import { B } from "./components/组件通信/兄弟组件通信/b.jsx";
import { Count } from "./components/useState/index.tsx";
import { DateCom } from "./components/useState/index.tsx";
import { Count2 } from "./components/useState/index.tsx";
import { Count3 } from "./components/useState/index.tsx";
import { UserInfo } from "./components/useState/index.tsx";
import { FUpdate } from "./components/useState/index.tsx";
import { Count4 } from "./components/useState/index.tsx";
import { InputFocus } from "./components/useRef/index.tsx";
import { Counter } from "./components/useRef/index.tsx";
import { RefTimer } from "./components/useRef/index.tsx";
import { Father } from "./components/useRef/index.tsx";
import { CountEffect1 } from "./components/useEffect/index.tsx";
import { ColorFatherCom } from "./components/useEffect/index.tsx";
import { TestMouseInfo } from "./components/useEffect/index.tsx";
import { MemoFather } from "./components/性能优化/React.memo.jsx";
import { UseMemoFather } from "./components/性能优化/useMemo.jsx";
import { UseCallback } from "./components/性能优化/useCallback.jsx";

import MyContext from "./components/组件通信/兄弟组件通信/index";

// React.FC<T>表示这是一个函数组件
const App: React.FC = () => {
  console.log("Hello World");

  const [value, setValue] = useState("我是原始值");
  return (
    <div className="App">
      <Index1></Index1>
      <Index2></Index2>
      <MyContext.Provider value={{ value, setValue }}>
        <A></A>
        <B></B>
      </MyContext.Provider>
      <Count></Count>
      <DateCom></DateCom>
      <Count2></Count2>
      <Count3></Count3>
      <UserInfo></UserInfo>
      <FUpdate></FUpdate>
      <Count4></Count4>
      <CountEffect1></CountEffect1>
      <ColorFatherCom></ColorFatherCom>
      <TestMouseInfo></TestMouseInfo>
      <InputFocus></InputFocus>
      <Counter></Counter>
      <RefTimer></RefTimer>
      <Father></Father>
      <MemoFather></MemoFather>
      <UseMemoFather></UseMemoFather>
      <UseCallback></UseCallback>
    </div>
  );
};

export default App;
