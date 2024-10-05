import React, { useState } from "react";
import { Layout, theme } from "antd";
import "./index.scss";
import Aside from "./Aside";
import Head from "./Head";
import Cont from "./Cont";

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken();

  return (
    <div className="layout">
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <Aside></Aside>
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Head toggleAction={toggle}></Head>
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG
            }}
          >
            <Cont></Cont>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default App;
