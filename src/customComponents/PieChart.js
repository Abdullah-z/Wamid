import ReactEcharts from "echarts-for-react";

const options = {
  tooltip: {
    trigger: "item",
  },
  legend: {
    top: "1%",
    left: "center",
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: ["40%", "70%"],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: "center",
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 20,
          fontWeight: "bold",
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 1048, name: "Search Engine" },
        { value: 735, name: "Direct" },
        { value: 580, name: "Email" },
        // { value: 484, name: "Union Ads" },
        // { value: 300, name: "Video Ads" },
      ],
    },
  ],
};

function PieChart() {
  return <ReactEcharts option={options}></ReactEcharts>;
}

export default PieChart;
