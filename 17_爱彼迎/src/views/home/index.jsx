import { useEffect, useState } from "react";
import request from "@/utils";

const Home = () => {
  // 定义状态
  const [highScore, setHighScore] = useState({});

  // 获取数据
  useEffect(() => {
    request.get("/home/highscore").then((res) => {
      console.log(res, "REs");
      setHighScore(res);
    });
  }, []);

  return (
    <div className="p-20">
      <h1 className="text-24 mb-10">{highScore.title}</h1>
      <h4 className="text-16 mb-20">{highScore.subtitle}</h4>
      <ul className="flex flex-wrap gap-10">
        {highScore?.list?.map((item) => (
          <li key={item.id} className="w-200 h-150 rounded-8 overflow-hidden">
            <img
              src={item.picture_url}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
