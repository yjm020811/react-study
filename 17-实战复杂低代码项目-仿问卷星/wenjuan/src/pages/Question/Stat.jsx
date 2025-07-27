import { useLoadQuestionData } from "../../hooks/useLoadQuestionData";

export const Stat = () => {
  const { question, loading } = useLoadQuestionData();

  return (
    <div>
      <h1>Stat</h1>
      <div>{JSON.stringify(question)}</div>
    </div>
  );
};
