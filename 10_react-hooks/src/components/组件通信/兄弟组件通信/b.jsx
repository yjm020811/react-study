import { useContext } from "react";
import MyContext from "./index";

export const B = () => {
  const { value, setValue } = useContext(MyContext);
  return (
    <>
      <h2>我是兄弟组件B: {value}</h2>
      <button onClick={() => setValue("我是B组件，改变value")}>
        改变value
      </button>
    </>
  );
};
