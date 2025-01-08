import { useState } from "react";

export const Index1 = () => {
  const [flag, setFlag] = useState(true);

  return (
    <>
      <h2 style={{ color: "red" }}>组件间通信</h2>
      <div>我是父组件</div>
      <button onClick={() => setFlag((v) => !v)}>切换状态</button>
      <Child flag={flag}>大家好，我是小杜杜，一起玩转Hooks吧！</Child>
    </>
  );
};

const Child = (props) => {
  // props 是父组件传递的属性，children 是组件标签内的内容
  console.log(props); // {flag: true, children: '大家好，我是小杜杜，一起玩转Hooks吧！'}
  const { flag, children } = props;
  return (
    <div style={{ border: "1px solid #000", padding: 20 }}>
      <div>我是子组件</div>
      <div>父组件传递的flag：{JSON.stringify(flag)}</div>
      <div>
        父组件传递的children
        <span style={{ color: "red" }}>（组件标签内的内容）</span> ：{children}
      </div>
    </div>
  );
};
