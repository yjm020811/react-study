import { Form, Input, Button, Typography, Space } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.scss";

export const Login = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Login Success:", values);
    navigate("/manage/list");
  };

  return (
    <div className={styles.container}>
      <Typography.Title level={1} className={styles.title}>
        欢迎登录
      </Typography.Title>
      <Form name="login" initialValues={{ remember: true }} onFinish={onFinish}>
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "请输入用户名!" }]}
            className={styles.formItem}
          >
            <Input prefix={<UserOutlined />} placeholder="用户名" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "请输入密码!" }]}
            className={styles.formItem}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="密码" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className={styles.submitButton}
            >
              登录
            </Button>
          </Form.Item>
          <Form.Item>
            <Button
              type="link"
              className={styles.submitButton}
              onClick={() => navigate("/register")}
            >
              没有账号？去注册
            </Button>
          </Form.Item>
        </Space>
      </Form>
    </div>
  );
};
