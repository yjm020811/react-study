import { useSelector, useDispatch } from "react-redux";

function App() {
  // useSelector 获取 store 中的数据
  const userStore = useSelector((state) => state.user);
  // dispatch 触发 action
  const dispatch = useDispatch();
  return (
    <>
      {JSON.stringify(userStore)}
      <button
        onClick={() =>
          dispatch({
            type: "user-slice/setAge",
            payload: userStore.age + 1
          })
        }
      >
        年龄+1
      </button>
    </>
  );
}

export default App;
