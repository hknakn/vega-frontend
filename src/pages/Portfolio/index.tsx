import React from "react";
import { HistoricalChart, DonutChart } from "../../components";

export const Portfolio = () => {
  return (
    <div>
      <h1>Financial Portfolio App</h1>
      <DonutChart />
      <HistoricalChart />
    </div>
  );
};
