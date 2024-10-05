import React from "react";
import { Count } from './components/useState/index.tsx'
import { DateCom } from './components/useState/index.tsx'
import { Count2 } from "./components/useState/index.tsx";
import { Count3 } from "./components/useState/index.tsx";
import { UserInfo } from "./components/useState/index.tsx";
import { FUpdate } from './components/useState/index.tsx'
import { InputFocus } from "./components/useRef/index.tsx";
import { Counter } from "./components/useRef/index.tsx";
import { RefTimer } from './components/useRef/index.tsx'
import { Father } from "./components/useRef/index.tsx";
import { CountEffect1 } from "./components/useEffect/index.tsx";
import { ColorFatherCom } from "./components/useEffect/index.tsx";
import { TestMouseInfo } from './components/useEffect/index.tsx'

// React.FC<T>表示这是一个函数组件
const App: React.FC = () => {
  console.log("Hello World");
  return (
    <div className="App">
      <Count></Count>
      <DateCom></DateCom>
      <Count2></Count2>
      <Count3></Count3>
      <UserInfo></UserInfo>
      <FUpdate></FUpdate>
      <InputFocus></InputFocus>
      <Counter></Counter>
      <RefTimer></RefTimer>
      <Father></Father>
      <CountEffect1></CountEffect1>
      <ColorFatherCom></ColorFatherCom>
      <TestMouseInfo></TestMouseInfo>
    </div>
  );
}

export default App;