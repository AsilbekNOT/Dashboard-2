import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";
import { DFlexText, WidthChart } from "./styles";
import down from "../../assets/icons/chevro.svg";

function CircleCharts() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "none",
      },
      title: {
        display: true,
      },
    },
  };

  const labels = ["Sun", "Mon", "Tuh", "Wed", "Thu", "Fri", "Sat"];

  const data = {
    labels,
    datasets: [
      {
        label: "",
        data: labels.map(() => faker.datatype.number({ min: -20, max: 20 })),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <WidthChart>
      <DFlexText>
        <p>Analytics</p>
        <div>
        <b>
          Weekly
          <img src={down} />
        </b>
        </div>
      </DFlexText>
      <br />
      <br />
      <Line options={options} data={data} />
    </WidthChart>
  );
}

export default CircleCharts;
