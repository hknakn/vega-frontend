import React, { useState } from "react";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { ArcElement, Chart } from "chart.js";
import "./styles.css";
import { mockAssets as assets } from "../../mockData";
import { calculateBalance, calculateBalanceByAssetClass } from "../../utils";
Chart.register(ArcElement);

export const DonutChart = () => {
  const [showByAssetClass, setShowByAssetClass] = useState(true);
  const uniqueAssetClasses = assets
    .map((asset) => asset.class)
    .filter((value, index, self) => self.indexOf(value) === index);

  const data = {
    labels: showByAssetClass
      ? uniqueAssetClasses
      : assets.map((asset) => asset.name),
    datasets: [
      {
        label: "Portfolio Balance",
        data: showByAssetClass
          ? uniqueAssetClasses.map((assetClass) =>
              calculateBalanceByAssetClass(assetClass)
            )
          : assets.map((asset) => calculateBalance(asset.id)),
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(255, 159, 64)",
          "rgb(153, 102, 255)",
          "rgb(255, 50, 50)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="chart-container">
      <h2 className="chart-title">Portfolio Balance</h2>
      <label>
        Show by Asset Class
        <input
          type="checkbox"
          checked={showByAssetClass}
          onChange={() => setShowByAssetClass(!showByAssetClass)}
        />
      </label>
      <Doughnut data={data} className="chart" />
    </div>
  );
};
