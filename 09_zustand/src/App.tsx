// components/Counter.tsx
import React from 'react';
import usePriceStore from '../src/store/index';

const Counter: React.FC = () => {
  // 使用 Store 并确保有类型提示
  const { price, count, decrement, increment, getTotal, doubleCount } = usePriceStore();

  return (
    <div>
      <h1>Total Price: {getTotal()}</h1>
      <h1>Count: {count}</h1>
      <h1>Price: {price}</h1>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={doubleCount}>Double Count</button>
    </div>
  );
};

export default Counter;
