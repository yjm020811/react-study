import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined
} from "@ant-design/icons";
import { Button } from "antd";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./index.scss";
import { asyncRoutes } from "../../views";
import { ItemProps } from "../Aside/index";
interface HeaderProps {
  toggleAction: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleAction }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);
  const { pathname } = useLocation();

  const toggle = () => {
    toggleAction();
    setCollapsed(!collapsed);
  };

  function findLabelByPath(
    asyncRoutes: ItemProps[],
    pathname: string
  ): string | null {
    for (const route of asyncRoutes) {
      if (route.path === pathname) {
        return route.label as string | null;
      }
      // 递归检查子路由
      if (route.children) {
        const label = findLabelByPath(route.children, pathname);
        if (label) {
          return label;
        }
      }
    }
    return null;
  }

  const toFullScreen = () => {
    const docElm = document.documentElement;

    if (!document.fullscreenElement) {
      // 进入全屏
      if (docElm.requestFullscreen) {
        docElm.requestFullscreen();
        setFullScreen(!fullScreen);
      }
    } else {
      // 退出全屏
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setFullScreen(!fullScreen);
      }
    }
  };

  return (
    <div className="header">
      <div className="left-header">
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={toggle}
          style={{
            fontSize: "16px",
            width: 64,
            height: 64
          }}
        />
        <div>
          <span className={pathname !== "/dashboard" ? "inActive" : ""}>
            {pathname !== "/dashboard" && (
              <Link to="/dashboard">首页大屏 / </Link>
            )}
          </span>
          {findLabelByPath(asyncRoutes, pathname)}
        </div>
      </div>
      <div className="right-header" onClick={toFullScreen}>
        {fullScreen ? (
          <FullscreenExitOutlined style={{ fontSize: "20px", color: "#000" }} />
        ) : (
          <FullscreenOutlined style={{ fontSize: "20px", color: "#000" }} />
        )}
      </div>
    </div>
  );
};

export default Header;
