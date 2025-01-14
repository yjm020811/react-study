import {
  Breadcrumb,
  Button,
  Card,
  Form,
  Input,
  Space,
  Select,
  message,
  Radio,
  Upload
} from "antd";
import { Link } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./index.scss";
import { fetchChannelApi, publishArticleApi } from "@/api/article";
import { useEffect, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";

const Publish = () => {
  // 频道列表
  const [channelList, setChannelList] = useState([]);

  // 封面
  const [imageList, setImageList] = useState([]);

  // 获取频道列表
  useEffect(() => {
    fetchChannelApi().then((res) => {
      console.log(res);
      setChannelList(res.data.channels);
    });
  }, []);

  // 发布文章
  const handlePublish = (formData) => {
    console.log(formData);
    // 校验封面类型与实际图片数量是否匹配
    if (imageList.length !== coverType)
      return message.warning("封面类型与实际图片数量不匹配");
    // 请求参数
    const reqData = {
      title: "",
      content: "",
      cover: {
        type: coverType,
        images: imageList.map((item) => item.response.data.url)
      },
      channel_id: ""
    };
    publishArticleApi({ ...reqData, ...formData }).then((res) => {
      console.log(res);
      message.success("发布成功");
    });
  };

  // 上传图片
  const onUploadChange = (value) => {
    setImageList(value.fileList);
  };

  // 封面类型
  const [coverType, setCoverType] = useState("0");
  const onTypeChange = (e) => {
    console.log(e.target.value);
    setCoverType(e.target.value);
  };

  const handleChange = (value) => {
    console.log(value);
  };

  return (
    <div className="publish">
      <Card
        title={
          <Breadcrumb
            items={[
              { title: <Link to={"/home"}>首页</Link> },
              { title: "发布文章" }
            ]}
          />
        }
      >
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ type: 0 }}
          onFinish={handlePublish}
        >
          <Form.Item
            label="标题"
            name="title"
            rules={[{ required: true, message: "请输入文章标题" }]}
          >
            <Input placeholder="请输入文章标题" style={{ width: 400 }} />
          </Form.Item>
          <Form.Item
            label="频道"
            name="channel_id"
            rules={[{ required: true, message: "请选择文章频道" }]}
          >
            <Select
              style={{ width: 400 }}
              onChange={handleChange}
              placeholder="请选择文章频道"
              options={channelList.map((item) => ({
                value: item.id,
                label: item.name
              }))}
            />
          </Form.Item>
          <Form.Item label="封面">
            <Radio.Group
              onChange={onTypeChange}
              value={coverType}
              style={{ marginTop: 6 }}
            >
              <Radio value="0"> 单图 </Radio>
              <Radio value="1"> 三图 </Radio>
              <Radio value="2"> 无图 </Radio>
            </Radio.Group>
            <div style={{ marginTop: 10 }}>
              {coverType !== "2" && (
                <Upload
                  name="image"
                  action={"http://geek.itheima.net/v1_0/upload"}
                  listType="picture-card"
                  showUploadList
                  onChange={onUploadChange}
                  maxCount={coverType === "1" ? 3 : 1} //限制上传数量
                >
                  <div style={{ marginTop: 8 }}>
                    <PlusOutlined />
                  </div>
                </Upload>
              )}
            </div>
          </Form.Item>

          <Form.Item
            label="内容"
            name="content"
            rules={[{ required: true, message: "请输入文章内容" }]}
          >
            {/* 富文本编辑器 */}
            <ReactQuill
              className="publish-quill"
              theme="snow"
              placeholder="请输入文章内容"
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 4 }}>
            <Space>
              <Button size="large" type="primary" htmlType="submit">
                发布文章
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Publish;
