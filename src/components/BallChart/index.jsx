import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { ChartBall } from "./styles";

ChartJS.register(ArcElement, Tooltip, Legend);

function BallChart() {
  const data = {
    datasets: [
      {
        label: "# of Votes",
        data: [200, 120, 90],
        backgroundColor: [
          //   "rgba(255, 99, 132, 0.2)",
          //   "rgba(54, 162, 235, 0.2)",
          //   "rgba(255, 206, 86, 0.2)",
          //   "rgba(75, 192, 192, 0.2)",
          //   "rgba(153, 102, 255, 0.2)",
          //   "rgba(255, 159, 64, 0.2)",
          " #4049FE",
          "#34DEFF",
          "#FFBF40",
        ],
        borderColor: [
          //   "rgba(255, 99, 132, 1)",
          //   "rgba(54, 162, 235, 1)",
          //   "rgba(255, 206, 86, 1)",
          //   "rgba(75, 192, 192, 1)",
          //   "rgba(153, 102, 255, 1)",
          //   "rgba(255, 159, 64, 1)",
          "  #4049FE",
          "#34DEFF",
          "#FFBF40",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <ChartBall>
      <Doughnut data={data} />
      <p>100%</p>
    </ChartBall>
  );
}

export default BallChart;
