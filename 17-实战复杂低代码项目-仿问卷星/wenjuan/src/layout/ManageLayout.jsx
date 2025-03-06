import { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { createQuestion } from "../api/question";
import { useRequest } from "ahooks";
import styles from "./ManageLayout.module.scss";
import {
  PlusOutlined,
  BarsOutlined,
  StarOutlined,
  DeleteOutlined
} from "@ant-design/icons";
import { Button, Space, Divider, message } from "antd";

export const ManageLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  // 使用ahooks的useRequest
  const { run: handleCreateQuestion, loading } = useRequest(
    async () => {
      const res = await createQuestion({ title: "新问卷" });
      return res;
    },
    {
      manual: true,
      onSuccess(result) {
        const { id } = result || {};
        if (id) {
          navigate(`/question/edit/${id}`);
          message.success("创建问卷成功");
        }
      }
    }
  );

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Space direction="vertical">
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={handleCreateQuestion}
            disabled={loading}
            loading={loading}
          >
            创建问卷
          </Button>
          <Divider style={{ borderTop: "transparent" }} />
          <Button
            icon={<BarsOutlined />}
            onClick={() => navigate("/manage/list")}
            className={pathname === "/manage/list" ? styles.active : ""}
          >
            我的问卷
          </Button>
          <Button
            icon={<StarOutlined />}
            onClick={() => navigate("/manage/star")}
            className={pathname === "/manage/star" ? styles.active : ""}
          >
            星标问卷
          </Button>
          <Button
            icon={<DeleteOutlined />}
            onClick={() => navigate("/manage/trash")}
            className={pathname === "/manage/trash" ? styles.active : ""}
          >
            回收站
          </Button>
        </Space>
      </div>
      <div className={styles.right}>
        <Outlet />
      </div>
    </div>
  );
};
