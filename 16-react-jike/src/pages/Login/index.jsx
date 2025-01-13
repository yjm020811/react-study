import { Button, Card, Form, Input, message } from "antd";
import logo from "@/assets/logo.png";
import "./index.scss";
import { fetchLogin } from "@/store/modules/user";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    console.log(values);
    await dispatch(fetchLogin(values));
    // 跳转到首页
    navigate("/home");
    // 提示一下用户
    message.success("登录成功");
  };

  return (
    <div className="login">
      <Card className="login-container">
        <img src={logo} alt="" />
        <Form validateTrigger={["onBlur", "onChange"]} onFinish={onFinish}>
          <Form.Item
            name="mobile" //字段名，与后端接口保持一致
            rules={[
              {
                required: true,
                message: "请输入手机号"
              },
              {
                pattern: /^1[3-9]\d{9}$/,
                message: "手机号码格式不正确"
              }
            ]}
          >
            <Input size="large" placeholder="请输入手机号" />
          </Form.Item>
          <Form.Item
            name="code"
            rules={[
              {
                required: true,
                message: "请输入验证码"
              },
              {
                len: 6,
                message: "验证码长度为6位"
              }
            ]}
          >
            <Input size="large" placeholder="请输入验证码" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default Login;
