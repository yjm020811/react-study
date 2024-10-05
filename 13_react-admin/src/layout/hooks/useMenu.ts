import { asyncRoutes } from "../../views";
import { useLocation } from "react-router-dom";
import { useMemo } from "react";
export const useMenu = () => {
  const { pathname } = useLocation();
  return useMemo(() => {
    let selectedKeys = "";
    let openKeys = "";
    asyncRoutes.forEach((item) => {
      if (!item.children) {
        if (item.path === pathname) {
          selectedKeys = item.key;
        }
      } else {
        item.children.forEach((child) => {
          if (child.path === pathname) {
            selectedKeys = child.key;
            openKeys = item.key;
          }
        });
      }
    });
    return [[selectedKeys], [openKeys]];
  }, [pathname]);
};
