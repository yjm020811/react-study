import { Q1 } from "./pages/缺少依赖项导致过期闭包";
import { Q2 } from "./pages/依赖项不当导致无限循环";
import { Q3 } from "./pages/使用清理函数避免竞态条件";

function App() {
  return (
    <>
      <Q1></Q1>
      {/* <Q2></Q2> */}
      <Q3></Q3>
    </>
  );
}

export default App;
