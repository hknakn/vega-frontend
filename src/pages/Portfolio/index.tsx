import React from "react";
import { HistoricalChart, DonutChart } from "../../components";

export const Portfolio = () => {
  return (
    <div className="container mx-auto p-4 h-screen flex flex-col bg-neutral-900	">
      <h1 className="text-3xl font-semibold mb-6 text-white">Home</h1>
      <h1 className="text-xl font-normal mb-6 text-white">
        Hi Hakan, find an overview of your investment portfolio below
      </h1>

      <div className="flex">
        {/* Historical Chart */}
        <div className="p-6 rounded-xl w-7/12 mr-4 bg-neutral-800">
          <h2 className="text-xl font-semibold mb-4 text-white">
            Historical Performance
          </h2>
          <HistoricalChart />
        </div>

        {/* Donut Chart */}
        <div className="p-6 rounded-xl w-5/12 bg-neutral-800">
          <h2 className="text-xl font-semibold mb-4 text-white">Asset Allocation</h2>
          <DonutChart />
        </div>
      </div>
    </div>
  );
};
