import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "./styles.css";
import { DateRange, HistoricalPrice } from "./types";
import { calculateHistoricalPrices } from "../../utils";

export const HistoricalChart = () => {
  const [selectedRange, setSelectedRange] = useState<string>(DateRange.Current);
  const [historicalPrices, setHistoricalPrices] = useState<HistoricalPrice[]>(
    []
  );

  const handleRangeChange = (range: string) => {
    setSelectedRange(range);
  };

  useEffect(() => {
    const historicalData = calculateHistoricalPrices(selectedRange);
    setHistoricalPrices(historicalData);
  }, [selectedRange]);

  const data = {
    labels: historicalPrices.map((price) => price.date),
    datasets: [
      {
        label: "Portfolio Performance Over Time",
        data: historicalPrices.map((price) => price.value),
        fill: false,
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  return (
    <div className="chart-container">
      <h2 className="chart-title">Historical Performance</h2>
      <div>
        <label>Select Time Range: </label>
        <select
          value={selectedRange}
          onChange={(e) => handleRangeChange(e.target.value)}
        >
          <option value={DateRange.Current}>Current</option>
          <option value={DateRange.LastMonth}>Last month</option>
          <option value={DateRange.Last3Months}>Last 3 months</option>
          <option value={DateRange.Last6Months}>Last 6 months</option>
          <option value={DateRange.LastYear}>Last year</option>
          <option value={DateRange.Last3Years}>Last 3 years</option>
          <option value={DateRange.Last5Years}>Last 5 years</option>
        </select>
      </div>
      {historicalPrices.length > 0 && <Line data={data} />}
    </div>
  );
};
