import React from "react";
import "chart.js/auto";
import { useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";
import { Line } from "react-chartjs-2";
import "./styles.css";

import { ArcElement, Chart } from "chart.js";
Chart.register(ArcElement);

const HistoricalChart: React.FC = () => {
  const prices = useSelector((state: RootState) => state.prices.data);

  const data = {
    labels: prices.map((price) => price.asOf),
    datasets: [
      {
        label: "Portfolio Performance Over Time",
        data: prices.map((price) => price.price),
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        lineTension: 0.1,
      },
    ],
  };

  return (
    <div>
      <h2>Historical Performance</h2>
      <Line data={data} />
    </div>
  );
};

export default HistoricalChart;
