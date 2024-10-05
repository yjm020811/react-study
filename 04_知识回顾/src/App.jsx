import classNames from "classnames";
import React, { useState } from "react";
import SlotName from "./components/slotName.jsx";

const App = () => {
  // 使用 useState 来管理 message 的状态
  const [message, setMessage] = useState("hello world");
  const [isActive, setActive] = useState(false);

  // 定义 info 对象
  const info = {
    name: "张三",
    age: 18,
    img: "https://picsum.photos/200/300",
    href: "https://www.baidu.com"
  };

  const changeMessage = () => {
    // 使用 setMessage 来更新状态
    setMessage("hello react");
  };

  const changeActive = () => {
    setActive(!isActive);
  };

  return (
    <div>
      <p>{message}</p>
      <button onClick={changeMessage}>点击修改</button>
      {/* 使用 info.img 作为图片的 src */}
      <div>姓名：{info.name}</div>
      <div>年龄：{info.age}</div>
      <img
        src={info.img}
        alt="Profile"
        style={{ width: "100px", height: "100px" }}
      />
      <a href={info.href}>链接</a>
      <div
        style={{ cursor: "pointer" }}
        className={classNames(isActive ? "active" : "inActive")}
        onClick={changeActive}
      >
        classnames
      </div>
      <SlotName name="张三" age="18">
        这是插槽内容
      </SlotName>
    </div>
  );
};

export default App;
