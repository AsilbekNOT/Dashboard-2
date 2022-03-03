import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import faker from "faker";
import { Bar } from "react-chartjs-2";
import { DFlexText, WidthChart } from "./styles";
import down from "../../assets/icons/chevro.svg";

function ChartAnalytics() {
  ChartJS.register(CategoryScale, LinearScale, BarElement);

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

  const labels = [
    "01 Jan",
    "02 Jan",
    "03 Jan",
    "04 Jan",
    "05 Jan",
    "06 Jan",
    "07 Jan",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 60 })),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <WidthChart>
      <DFlexText>
        <p>Sales Overview</p>
        <b>
          Month
          <img src={down} />
        </b>
      </DFlexText>
      <br />
      <br />
      <Bar options={options} data={data} />
    </WidthChart>
  );
}

export default ChartAnalytics;
