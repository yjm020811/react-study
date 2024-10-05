import { Menu } from "antd";
import "./index.scss";
import { asyncRoutes } from "../../views/index";
import { Link } from "react-router-dom";
// 导入自定义hook
import { useMenu } from "../hooks/useMenu";
export interface ItemProps {
  key: string;
  label: string | JSX.Element;
  icon: JSX.Element | null;
  path?: string;
  element?: JSX.Element | null;
  children?: ItemProps[];
  hidden?: boolean;
}

const Logo = () => {
  return (
    <div className="logo">
      <img
        src="https://pro.upload.logomaker.com.cn/2024/01/2401100740347754.png?x-oss-process=image/resize,m_lfit,w_400,h_0"
        alt=""
      />
    </div>
  );
};

const createItems = (asyncRoutes: ItemProps[]): ItemProps[] => {
  return asyncRoutes
    .filter((item) => !item.hidden) // 过滤掉 hidden 为 true 的菜单项
    .map((item) => ({
      key: item.key,
      label: item.path ? <Link to={item.path}>{item.label}</Link> : item.label, // 只有在 path 存在时才使用 Link
      icon: item.icon,
      path: item.path,
      children: item.children ? createItems(item.children) : undefined
    }));
};

const result: ItemProps[] = createItems(asyncRoutes);
console.log(result);

const Aside: React.FC = () => {
  // 自定义hook的书写位置需要写在组件内部
  const [openKeys, selectedKeys] = useMenu(); // 调用自定义hook
  return (
    <div>
      <Logo />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={openKeys}
        defaultOpenKeys={selectedKeys}
        items={createItems(asyncRoutes)}
      />
    </div>
  );
};

export default Aside;
