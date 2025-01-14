import { request } from "@/utils";

// 获取频道数据
export const fetchChannelApi = () => {
  return request({
    url: "/channels",
    method: "get"
  });
};

// 发布文章
export const publishArticleApi = (data) => {
  return request({
    url: "/mp/articles?draft=false",
    method: "post",
    data
  });
};
