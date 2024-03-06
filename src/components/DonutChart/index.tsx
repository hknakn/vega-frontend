import React, { useState } from "react";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { ArcElement, Chart } from "chart.js";
import { mockAssets as assets } from "../../mockData";
import { calculateBalance, calculateBalanceByAssetClass } from "../../utils";
import { ShowByAssetClassButton } from "../ShowByAssetClassButton";
Chart.register(ArcElement);

export const DonutChart = () => {
  const [showByAssetClass, setShowByAssetClass] = useState(true);
  const uniqueAssetClasses = assets
    .map((asset) => asset.class)
    .filter((value, index, self) => self.indexOf(value) === index);

  const toggle = () => {
    setShowByAssetClass(!showByAssetClass);
  };

  return (
    <div className="bg-neutral-800">
      <label className="flex items-center">
        <div className="mb-6">
          <ShowByAssetClassButton
            selected={showByAssetClass}
            onClick={toggle}
          />
        </div>
      </label>

      <Doughnut
        data={{
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
              borderColor: "transparent",
            },
          ],
        }}
        options={{
          plugins: {
            legend: {
              labels: {
                color: "white",
              },
            },
          },
        }}
        className="mt-2"
      />
    </div>
  );
};
