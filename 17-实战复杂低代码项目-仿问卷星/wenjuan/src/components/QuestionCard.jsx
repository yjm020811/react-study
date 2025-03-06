import { Card, Button, Tag, Popconfirm, message } from "antd";
import {
  StarOutlined,
  CopyOutlined,
  EditOutlined,
  BarChartOutlined,
  DeleteOutlined
} from "@ant-design/icons";
import styles from "./QuestionCard.module.scss";
import { useNavigate, Link } from "react-router-dom";

export const QuestionCard = (props) => {
  const navigate = useNavigate();
  const { title, createdAt, answerCount, isStar, isPublished, id } = props;

  const confirmDelete = () => {
    message.success("删除成功");
  };

  return (
    <Card
      className={styles.container}
      title={
        <Link
          to={isPublished ? `/question/stat/${id}` : `/question/edit/${id}`}
        >
          <StarOutlined
            style={{
              color: isStar ? "red" : "gray",
              marginRight: "4px",
              marginTop: "2px"
            }}
          />
          {title}
        </Link>
      }
    >
      <div className={styles.title}>
        <div className={styles.right}>
          {isPublished ? <Tag color="green">已发布</Tag> : <Tag>未发布</Tag>}
          <span>答卷：{answerCount}</span>
          <span>{createdAt}</span>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <div className={styles.left}>
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => navigate(`/question/edit/${id}`)}
          >
            编辑问卷
          </Button>
          <Button
            icon={<BarChartOutlined />}
            onClick={() => navigate(`/question/stat/${id}`)}
            disabled={!isPublished}
          >
            统计问卷
          </Button>
        </div>
        <div className={styles.right}>
          <Button type="text" icon={<StarOutlined />}>
            {isStar ? "取消标星" : "标星"}
          </Button>
          <Button type="text" icon={<CopyOutlined />}>
            复制
          </Button>
          <Popconfirm
            title="确定删除该问卷吗？"
            onConfirm={confirmDelete}
            okText="确定"
            cancelText="取消"
          >
            <Button type="text" icon={<DeleteOutlined />}>
              删除
            </Button>
          </Popconfirm>
        </div>
      </div>
    </Card>
  );
};
