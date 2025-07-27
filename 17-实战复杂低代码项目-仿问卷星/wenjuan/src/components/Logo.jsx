import { Space, Typography } from "antd";
import { FormOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import styles from "./Logo.module.scss";

const { Title } = Typography;

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link to="/">
        <Space>
          <Title level={3}>
            <FormOutlined />
          </Title>
          <Title level={3}>小慕问卷</Title>
        </Space>
      </Link>
    </div>
  );
};
