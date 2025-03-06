import { Form, Input, Button, Typography, Space } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import styles from "./Register.module.scss";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);
    navigate("/login");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={styles.container}>
      <Typography.Title level={1} className={styles.title}>
        欢迎注册
      </Typography.Title>

      <Form
        name="register"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
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

          <Form.Item
            name="confirm"
            dependencies={["password"]}
            hasFeedback
            rules={[
              { required: true, message: "请确认密码!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("两次输入的密码不匹配!"));
                }
              })
            ]}
            className={styles.formItem}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="确认密码" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className={styles.submitButton}
            >
              注册
            </Button>
          </Form.Item>
          <Form.Item>
            <Button
              type="link"
              htmlType="submit"
              className={styles.submitButton}
              onClick={() => navigate("/login")}
            >
              已有账号，去登录
            </Button>
          </Form.Item>
        </Space>
      </Form>
    </div>
  );
};
