import React, { useState } from "react";
import "chart.js/auto";
import { useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";
import { Doughnut } from "react-chartjs-2";
import { ArcElement, Chart } from "chart.js";
import "./styles.css";
Chart.register(ArcElement);

const DonutChart: React.FC = () => {
  const assets = useSelector((state: RootState) => state.assets.data);
  const prices = useSelector((state: RootState) => state.prices.data);
  const portfolios = useSelector((state: RootState) => state.portfolios.data);
  const [showByAssetClass, setShowByAssetClass] = useState(true);

  const calculateBalance = (assetId: number): number => {
    // Retrieve the position for the given assetId from your Redux store
    const position = portfolios.find((portfolio) =>
      portfolio.positions.some((pos) => pos.asset === assetId)
    );

    // Retrieve the latest price for the given assetId from your Redux store
    const latestPrice = prices.find((p) => p.asset === assetId);

    if (position && latestPrice) {
      const assetPosition = position.positions.find(
        (pos) => pos.asset === assetId
      );
      return assetPosition ? assetPosition.quantity * latestPrice.price : 0;
    }

    return 0; // Return 0 if data is not available or if there's an error
  };

  const calculateBalanceByAssetClass = (assetClass: string): number => {
    // Sum the balances of all assets belonging to the specified asset class
    const assetsInClass = assets.filter((asset) => asset.class === assetClass);
    return assetsInClass.reduce(
      (total, asset) => total + calculateBalance(asset.id),
      0
    );
  };

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

export default DonutChart;
