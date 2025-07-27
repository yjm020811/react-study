import { useLoadQuestionData } from "../../hooks/useLoadQuestionData";
import styles from "./Edit.module.scss";
import { useStore } from "../../store";

export const Edit = () => {
  const { question, loading } = useLoadQuestionData();
  const { count, increase, decrease } = useStore();

  return (
    <div className={styles.container}>
      <div>store: {count}</div>
      <div className={styles.header}>Header</div>
      <div className={styles.content}>
        <div className={styles.left}>left</div>
        <div className={styles.center}>
          <div className={styles.canvas}>
            <div style={{ height: "2000px" }}>{JSON.stringify(question)}</div>
          </div>
        </div>
        <div className={styles.right}>
          <button onClick={increase}>增加</button>
          <button onClick={decrease}>减少</button>
        </div>
      </div>
    </div>
  );
};
