import request from "../services/request";

// 获取单个问卷信息
export const getQuestion = (id) => {
  return request.get(`/question/${id}`);
};

// 获取所有问卷列表
export const getQuestionList = () => {
  return request.get("/question");
};

// 创建问卷
export const createQuestion = (data) => {
  return request.post("/question", data);
};
