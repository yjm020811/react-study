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

export const getArticleListApi = () => {
  return request.get("/mp/articles");
};

export const delArticleApi = (id) => {
  return request.delete(`/mp/articles/${id}`);
};

export const getArticleByIdApi = (id) => {
  return request.get(`/mp/articles/${id}`);
};

export const updateArticleApi = (data, id) => {
  return request.put(`/mp/articles/${id}?draft=false`, data);
};
