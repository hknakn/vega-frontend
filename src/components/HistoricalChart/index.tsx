import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { DateRange, HistoricalPrice } from "./types";
import { calculateHistoricalPrices } from "../../utils";
import { TimeRangeButton } from "../TimeRangeButton";

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

  return (
    <div className="bg-neutral-800">
      <div className="inline-flex flex-col md:flex-row md:mb-6 bg-neutral-900 rounded-xl">
        <div className="flex justify-center">
          <TimeRangeButton
            range={DateRange.Current}
            text="Current"
            selected={selectedRange}
            onClick={handleRangeChange}
          />
          <TimeRangeButton
            range={DateRange.LastMonth}
            text="1m"
            selected={selectedRange}
            onClick={handleRangeChange}
          />
          <TimeRangeButton
            range={DateRange.Last3Months}
            text="3m"
            selected={selectedRange}
            onClick={handleRangeChange}
          />
          <TimeRangeButton
            range={DateRange.Last6Months}
            text="6m"
            selected={selectedRange}
            onClick={handleRangeChange}
          />
          <TimeRangeButton
            range={DateRange.LastYear}
            text="1y"
            selected={selectedRange}
            onClick={handleRangeChange}
          />
          <TimeRangeButton
            range={DateRange.Last3Years}
            text="3y"
            selected={selectedRange}
            onClick={handleRangeChange}
          />
          <TimeRangeButton
            range={DateRange.Last5Years}
            text="5y"
            selected={selectedRange}
            onClick={handleRangeChange}
          />
        </div>
      </div>
      {historicalPrices.length > 0 && (
        <div className="p-6">
          <Line
            options={{
              scales: {
                x: {
                  grid: {
                    color: "white",
                  },
                  ticks: {
                    color: "white",
                  },
                },
                y: {
                  grid: {
                    color: "white",
                  },
                  ticks: {
                    color: "white",
                  },
                },
              },
              plugins: {
                legend: {
                  labels: {
                    color: "white",
                  },
                },
              },
            }}
            data={{
              labels: historicalPrices.map((price) => price.date),
              datasets: [
                {
                  label: "Portfolio Performance Over Time",
                  data: historicalPrices.map((price) => price.value),
                  borderColor: "#2590EB",
                  backgroundColor: "#2590EB",
                },
              ],
            }}
          />
        </div>
      )}
    </div>
  );
};
