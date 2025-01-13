// 柱状图组件
import * as echarts from "echarts";
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const BarChart = ({ title }) => {
  const chartRef = useRef(null);
  // 类型检查
  BarChart.propTypes = {
    title: PropTypes.string.isRequired
  };

  useEffect(() => {
    // 确保dom可用，才进行图表渲染
    // 获取图表的dom节点
    const chartInstance = echarts.init(chartRef.current);

    // 图表配置项
    const option = {
      title: {
        text: title
      },
      tooltip: {},
      xAxis: {
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      },
      yAxis: {},
      series: [
        {
          name: "发布数量",
          type: "bar",
          data: [10, 20, 36, 15, 25, 30, 12]
        }
      ]
    };

    // 设置图表配置项
    chartInstance.setOption(option);

    // 组件卸载时销毁图表实例
    return () => {
      chartInstance.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: "500px", height: "400px" }}></div>;
};

export default BarChart;
