import React, { memo, useState, useEffect } from "react";
import { RightWrapper } from "./style";

const HeaderRight = memo(() => {
  // 定义组件内部的状态
  const [showPanel, setShowPanel] = useState(false);

  // 副作用代码
  useEffect(() => {
    function windowHandleClick() {
      setShowPanel(false);
    }
    // 执行点击显示
    window.addEventListener("click", windowHandleClick, true);
    // 销毁
    return () => {
      window.removeEventListener("click", windowHandleClick, true);
    };
  }, []);

  // 事件处理函数
  function profileHandle() {
    setShowPanel(true);
  }
  return (
    <RightWrapper>
      <div className="btns">
        <span>登录</span>
        <span>注册</span>
        <span>
          <img
            src="https://img1.baidu.com/it/u=1258541949,427457344&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
            alt=""
          />
        </span>
      </div>

      <div className="profile" onClick={profileHandle}>
        <img
          src="https://img0.baidu.com/it/u=4094618077,199125456&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
          alt=""
        />
        <img
          src="https://bpic.51yuansu.com/pic2/cover/00/50/87/5816665048397_610.jpg"
          alt=""
        />
        {showPanel && (
          <div className="panel">
            <div className="top">
              <div className=" item register">注册</div>
              <div className="item login">登录</div>
            </div>
            <div className="bottom">
              <div className="item">出租房源</div>
              <div className="item">开展体验</div>
              <div className="item">帮助</div>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  );
});

export default HeaderRight;
