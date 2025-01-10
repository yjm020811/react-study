import axiosInstance from "../utils/request";

export const getArticleList = () => {
  return axiosInstance.get("/posts");
};
