import { useState } from "react";
import { QuestionCard } from "../../components/QuestionCard.jsx";
import { ListSearch } from "../../components/ListSearch";
import styles from "./Common.module.scss";
import { useTitle } from "ahooks";
import { Typography, Spin } from "antd";
import { useRequest } from "ahooks";
import { getQuestionList } from "../../api/question";

const { Title } = Typography;

export const List = () => {
  useTitle("小慕问卷 - 我的问卷");

  const [questionList, setQuestionList] = useState([]);

  const { data, loading, error } = useRequest(getQuestionList, {
    onSuccess(result) {
      console.log(result);
      const { list = [] } = result || {};
      setQuestionList(list);
    }
  });

  const handleKeywordChange = (keyword) => {
    console.log(keyword);
    // 根据keyword去questionList中查找
    const newList = questionList.filter((q) => q.title.includes(keyword));
    setQuestionList(newList);
  };

  const handleReset = () => {
    console.log("reset");
    // 重置questionList
    setQuestionList(data.list);
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={4}>我的问卷</Title>
        </div>
        <div className={styles.right}>
          <ListSearch
            onKeywordChange={handleKeywordChange}
            onReset={handleReset}
          />
        </div>
      </div>
      <div className={styles.content}>
        {loading && (
          <div style={{ textAlign: "center", marginTop: "100px" }}>
            <Spin />
          </div>
        )}
        {/* 问卷列表 */}
        {questionList &&
          questionList.length > 0 &&
          questionList.map((q) => <QuestionCard key={q.id} {...q} />)}
      </div>
      <div className={styles.footer}>loadMore....加载更多</div>
    </>
  );
};
