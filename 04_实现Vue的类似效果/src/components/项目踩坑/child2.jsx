import { memo } from "react";

const Child2 = memo(({ onNumberClick }) => {
  console.log("Child2 渲染");
  return (
    <div>
      {[1, 2, 3, 4, 5].map((num) => (
        <div
          key={num}
          onClick={() => {
            console.log(num);
            onNumberClick(num);
          }}
        >
          {num}
        </div>
      ))}
    </div>
  );
});

export default Child2;
