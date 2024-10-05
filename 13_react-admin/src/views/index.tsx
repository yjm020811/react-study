import {
  MenuFoldOutlined,
  UserAddOutlined,
  VideoCameraOutlined
} from "@ant-design/icons";
import Dashboard from "./dashboard";
import GoodList from "./goods/goodList";
import GoodForm from "./goods/goodForm";
import User from "./user";
import { ItemProps } from "../layout/Aside/index";

// 动态路由：根据后端响应的角色，计算出该角色可以访问哪些动态路由
export const asyncRoutes: ItemProps[] = [
  {
    key: "1001",
    path: "/dashboard",
    label: "首页大屏",
    element: <Dashboard />,
    icon: <MenuFoldOutlined />
  },
  {
    key: "1002",
    label: "商品管理",
    icon: <VideoCameraOutlined />,
    children: [
      {
        key: "100201",
        path: "/goods/list",
        label: "商品列表",
        element: <GoodList />,
        icon: null
      },
      {
        key: "100202",
        path: "/goods/form",
        label: "商品表单",
        element: <GoodForm />,
        icon: null,
        hidden: true
      }
    ]
  },
  {
    key: "1003",
    path: "/user",
    label: "用户管理",
    element: <User />,
    icon: <UserAddOutlined />
  }
];
