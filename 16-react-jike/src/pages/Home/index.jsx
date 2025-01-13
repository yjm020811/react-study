import BarChart from "@/components/BarChart";

function Home() {
  return (
    <div className="home">
      <BarChart title="文章发布统计" />
      <BarChart title="三大框架满意度" />
    </div>
  );
}

export default Home;
