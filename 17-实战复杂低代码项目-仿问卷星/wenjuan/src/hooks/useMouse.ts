import { useState, useEffect } from "react";

export const useMouse = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: MouseEvent) => {
    setMouse({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    // 监听鼠标移动事件
    window.addEventListener("mousemove", handleMouseMove);
    // 卸载事件
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return mouse;
};
