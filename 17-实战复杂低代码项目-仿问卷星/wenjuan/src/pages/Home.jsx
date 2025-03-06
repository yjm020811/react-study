import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography } from "antd";
import styles from "./Home.module.scss";
import axios from "axios";

const { Title, Paragraph } = Typography;

export const Home = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  useEffect(() => {
    axios.get("/api/question/1").then((res) => {
      console.log(res.data);
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <Title>问卷调查 | 在线统计</Title>
        <Paragraph>
          慕慕问卷，是一款在线问卷调查工具，支持多种问卷类型，如单选、多选、
          填空、打分等。
        </Paragraph>
        <div className={styles.button}>
          <Button type="primary" onClick={handleLogin}>
            开始使用
          </Button>
        </div>
      </div>
    </div>
  );
};
