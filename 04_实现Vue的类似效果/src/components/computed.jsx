// 计算属性
import { useState, useMemo } from "react";

const Computed = () => {
  const [firstName, setFirstName] = useState("张");
  const [lastName, setLastName] = useState("三");

  // 使用useMemo实现计算属性
  const fullName = useMemo(() => {
    return firstName + lastName;
  }, [firstName, lastName]);

  return (
    <div>
      <h2>计算属性示例</h2>
      <div>
        <label>姓：</label>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label>名：</label>
        <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </div>
      <div>
        <label>全名：</label>
        <span>{fullName}</span>
      </div>
    </div>
  );
};

export default Computed;
