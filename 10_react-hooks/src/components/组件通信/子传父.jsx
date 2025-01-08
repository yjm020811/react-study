import { useState } from "react";

export const Index2 = () => {
  const [number, setNumber] = useState(0); // 父组件的状态

  return (
    <>
      <div>我是父组件</div>
      <div>子组件的number：{number}</div>

      <Child
        //父组件将一个函数 getNumber 作为 props 传递给子组件
        getNumber={(v) => {
          setNumber(v);
        }}
      >
        大家好，我是小杜杜，一起玩转Hooks吧！
      </Child>
    </>
  );
};

const Child = ({ getNumber }) => {
  const [number, setNumber] = useState(0);

  return (
    <div style={{ border: "1px solid #000", padding: 20 }}>
      <div>我是子组件</div>
      <button
        onClick={() => {
          const newNum = number + 1; // 获取子组件的number
          setNumber(newNum); // 设置子组件的number
          getNumber(newNum); // 将子组件的number传递给父组件
        }}
      >
        点击加一{number}
      </button>
    </div>
  );
};
