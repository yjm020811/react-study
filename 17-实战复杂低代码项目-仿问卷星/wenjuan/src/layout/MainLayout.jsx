import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import styles from "./MainLayout.module.scss";
import { Logo } from "../components/Logo";
import { UserInfo } from "../components/UserInfo";
const { Header, Footer, Content } = Layout;

export const MainLayout = () => {
  return (
    <>
      <Layout className={styles.main}>
        <Header className={styles.header}>
          <div className={styles.left}>
            <Logo />
          </div>
          <div className={styles.right}>
            <UserInfo />
          </div>
        </Header>
        <Content className={styles.main}>
          <Outlet />
        </Content>
        <Footer className={styles.footer}>
          小慕问卷 &copy; 2025 - 2025 Created by YJM
        </Footer>
      </Layout>
    </>
  );
};
