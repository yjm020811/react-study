import { useParams } from "react-router-dom";
import { getQuestion } from "../api/question";
import { useRequest } from "ahooks";

export const useLoadQuestionData = () => {
  const { id = "" } = useParams();
  console.log("id", id);

  async function loadQuestionData() {
    const res = await getQuestion(id);
    return res;
  }
  const { data, loading, error } = useRequest(loadQuestionData);

  return {
    question: data,
    loading,
    error
  };
};
