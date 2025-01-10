import { useState, useEffect } from "react";
import { getArticleList } from "../../api/article";
import { Space, Table, Modal, Form, Input, message } from "antd";
const { Column } = Table;

interface ArticleProps {
  id: number;
  userId: number;
  title: string;
  body: string;
}

interface Article {
  id: number;
  title: string;
  body: string;
}

const Article = () => {
  // 文章列表
  const [articleList, setArticleList] = useState<ArticleProps[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [form] = Form.useForm();

  // 获取文章数据
  useEffect(() => {
    getArticleList().then((res: any) => {
      console.log(res);
      setArticleList(res);
    });
  }, []);

  // 打开编辑模态框
  const handleEdit = (record: Article) => {
    setEditingArticle(record);
    form.setFieldsValue(record);
    setIsModalOpen(true);
  };

  // 处理删除
  const handleDelete = (record: Article) => {
    console.log(record);
    Modal.confirm({
      title: "确认删除",
      content: "确定要删除这条记录吗？",
      onOk: async () => {
        try {
          // 这里添加删除 API 调用
          message.success("删除成功");
        } catch (error) {
          message.error("删除失败");
        }
      }
    });
  };

  // 处理编辑提交
  const handleOk = async () => {
    try {
      await form.validateFields();
      // 这里添加更新 API 调用
      message.success("更新成功");
      setIsModalOpen(false);
    } catch (error) {
      message.error("更新失败");
    }
  };

  return (
    <div>
      <h1>文章管理</h1>
      <Table dataSource={articleList} rowKey="id">
        <Column title="ID" dataIndex="id" key="id" />
        <Column title="Title" dataIndex="title" key="title" />
        <Column title="body" dataIndex="body" key="body" width="600px" />
        <Column
          title="Action"
          key="action"
          render={(_, record: Article) => (
            <Space size="middle">
              <a onClick={() => handleEdit(record)}>编辑</a>
              <a onClick={() => handleDelete(record)}>删除</a>
            </Space>
          )}
        />
      </Table>

      <Modal
        title="编辑文章"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={() => setIsModalOpen(false)}
      >
        <Form
          form={form}
          layout="vertical"
          initialValues={editingArticle || undefined}
        >
          <Form.Item
            name="title"
            label="标题"
            rules={[{ required: true, message: "请输入标题" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="body"
            label="内容"
            rules={[{ required: true, message: "请输入内容" }]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Article;
