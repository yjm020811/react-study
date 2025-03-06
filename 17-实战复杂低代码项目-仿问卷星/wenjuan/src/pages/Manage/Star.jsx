import { useState } from "react";
import { useTitle } from "ahooks";
import { Typography, Empty } from "antd";
import styles from "./Star.module.scss";
import { QuestionCard } from "../../components/QuestionCard";

const { Title } = Typography;

export const Star = () => {
  useTitle("小慕问卷 - 星标问卷");

  const [questionList, setQuestionList] = useState([
    {
      _id: "q1",
      title: "问卷1",
      isPublished: true,
      isStar: true,
      answerCount: 10,
      createdAt: "2021-01-01"
    }
  ]);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Title level={4}>星标问卷</Title>
        <div className={styles.right}>搜索</div>
      </div>
      <div className={styles.content}>
        {/* 空状态 */}
        {questionList.length === 0 && <Empty description="暂无星标问卷" />}
        {/* 问卷列表 */}
        {questionList.length > 0 &&
          questionList.map((question) => (
            <QuestionCard key={question._id} {...question} />
          ))}
      </div>
      <div className={styles.footer}>分页</div>
    </div>
  );
};
