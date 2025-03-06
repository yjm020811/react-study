import { Outlet } from "react-router-dom";

export const QuestionLayout = () => {
  return (
    <>
      <div style={{ height: "100vh" }}>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};
