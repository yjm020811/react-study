// 条件渲染
import React, { useState } from "react";

const ConditionRender = () => {
  const [isShow, setIsShow] = useState(true);
  const [type, setType] = useState("A");
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div>
      <h2>条件渲染示例</h2>

      {/* 使用三元运算符 (类似 Vue 的 v-if) */}
      <div>
        <button onClick={() => setIsShow(!isShow)}>切换显示</button>
        {isShow ? <p>这段内容会显示</p> : <p>这段内容是替代内容</p>}
      </div>

      {/* 使用逻辑与运算符 (类似 Vue 的 v-if) */}
      <div>
        <button onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "退出" : "登录"}
        </button>
        {isLogin && <p>欢迎回来！</p>}
      </div>

      {/* 使用多重条件 (类似 Vue 的 v-if/v-else-if/v-else) */}
      <div>
        <button onClick={() => setType("A")}>A类型</button>
        <button onClick={() => setType("B")}>B类型</button>
        <button onClick={() => setType("C")}>C类型</button>

        {type === "A" && <p>这是A类型的内容</p>}
        {type === "B" && <p>这是B类型的内容</p>}
        {type === "C" && <p>这是C类型的内容</p>}
      </div>
    </div>
  );
};

export default ConditionRender;
