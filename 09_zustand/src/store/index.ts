import { create } from "zustand";
// immer 负责状态不可变处理
import { immer } from "zustand/middleware/immer";
// persist 负责将状态保存到浏览器的 localStorage 中
import { persist } from "zustand/middleware";

// 定义 Store 接口
type Store = {
  price: number;
  count: number;
  increment: () => void;
  decrement: () => void;
  getTotal: () => number;
  doubleCount: () => Promise<void>;
};

// 使用 persist 和 immer 中间件创建 Store
const usePriceStore = create<Store>()(
  persist(
    immer((set, get) => ({
      price: 100,
      count: 10,
      increment() {
        set((state) => {
          state.count += 1;
        });
      },
      decrement() {
        set((state) => {
          state.count -= 1;
        });
      },
      getTotal() {
        return get().price * get().count;
      },
      async doubleCount() {
        const double = await Promise.resolve(2);
        set((state) => {
          state.count *= double;
        });
      }
    })),
    {
      name: "price-store", // 存储在 localStorage 中的键名
      // 配置选项
      partialize: (state) => ({ count: state.count, price: state.price }) // 只持久化部分 state
    }
  )
);

export default usePriceStore;
