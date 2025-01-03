import React from "react";

const slotName = (props) => {
  const { name, age, children, element } = props;
  console.log(name, age, children, element);
  return (
    <div>
      <h2>插槽示例</h2>
      <h1>{name}</h1>
      <p>{age}</p>
      <div>{children}</div>
    </div>
  );
};

export default slotName;
