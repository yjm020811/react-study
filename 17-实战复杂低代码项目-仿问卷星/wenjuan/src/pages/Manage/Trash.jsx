import { FC, useState } from "react";
import {
  Table,
  Typography,
  Empty,
  Tag,
  Button,
  Popconfirm,
  message
} from "antd";
import styles from "./Trash.module.scss";

const { Title } = Typography;

const TrashTable = ({ questionList, selectedRowKeys, setSelectedRowKeys }) => {
  const columns = [
    {
      title: "问卷标题",
      dataIndex: "title",
      key: "title"
    },
    {
      title: "是否发布",
      dataIndex: "isPublished",
      render: (isPublished) => {
        return isPublished ? (
          <Tag color="green">已发布</Tag>
        ) : (
          <Tag>未发布</Tag>
        );
      }
    },
    {
      title: "答卷数量",
      dataIndex: "answerCount",
      key: "answerCount"
    },
    {
      title: "创建时间",
      dataIndex: "createdAt",
      key: "createdAt"
    }
  ];

  const confirmDelete = () => {
    message.success("删除成功");
  };

  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <Button
          type="primary"
          style={{ marginRight: 16 }}
          disabled={selectedRowKeys.length === 0}
        >
          恢复
        </Button>
        <Popconfirm
          title="确定彻底删除吗？"
          onConfirm={confirmDelete}
          okText="确定"
          cancelText="取消"
        >
          <Button danger disabled={selectedRowKeys.length === 0}>
            删除
          </Button>
        </Popconfirm>
      </div>
      <Table
        dataSource={questionList}
        columns={columns}
        pagination={false}
        rowKey={(record) => record._id}
        rowSelection={{
          type: "checkbox",
          onChange: (selectedRowKeys) => {
            setSelectedRowKeys(selectedRowKeys);
          }
        }}
      />
    </>
  );
};

export const Trash = () => {
  const [questionList, setQuestionList] = useState([
    {
      _id: "q1",
      title: "问卷1",
      isPublished: true,
      isStar: true,
      answerCount: 10,
      createdAt: "2021-01-01"
    },
    {
      _id: "q2",
      title: "问卷2",
      isPublished: false,
      isStar: false,
      answerCount: 20,
      createdAt: "2021-01-02"
    },
    {
      _id: "q3",
      title: "问卷3",
      isPublished: true,
      isStar: false,
      answerCount: 30,
      createdAt: "2021-01-03"
    },
    {
      _id: "q4",
      title: "问卷4",
      isPublished: false,
      isStar: false,
      answerCount: 40,
      createdAt: "2021-01-04"
    }
  ]);

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={4}>回收站</Title>
        </div>
        <div className={styles.right}>搜索:{selectedRowKeys}</div>
      </div>
      <div className={styles.content}>
        {questionList.length === 0 && <Empty description="暂无回收站数据" />}
        {questionList.length > 0 && (
          <TrashTable
            questionList={questionList}
            selectedRowKeys={selectedRowKeys}
            setSelectedRowKeys={setSelectedRowKeys}
          />
        )}
      </div>
      <div className={styles.footer}>分页</div>
    </div>
  );
};
