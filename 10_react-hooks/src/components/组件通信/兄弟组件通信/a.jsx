import { useContext } from "react";
import MyContext from "./index";

export const A = () => {
  const { value, setValue } = useContext(MyContext);
  return (
    <>
      <h2>我是兄弟组件A: {value}</h2>
      <button onClick={() => setValue("我是A组件，改变value")}>
        改变value
      </button>
    </>
  );
};
