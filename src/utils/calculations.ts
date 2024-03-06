import { HistoricalPrice } from "../components/HistoricalChart/types";
import { mockPortfolio } from "../mockData";
import { Portfolio } from "../mockData/types";
import { dateRanges } from "./dateRanges";
import { mockPrices as prices, mockAssets as assets } from "../mockData";

export const calculateHistoricalPrices = (selectedRange: string): HistoricalPrice[] => {
  const historicalData: {
    date: string;
    value: number;
  }[] = [];


  const calculateForDate = (date: string) => {
    historicalData.push({
      date: formatChartDate(date),
      value: calculatePortfolioValue(mockPortfolio(date)),
    });
  };

  dateRanges[selectedRange].forEach((date) => {
    calculateForDate(date);
  });

  return historicalData;
};

const calculatePortfolioValue = (portfolio: Portfolio): number => {
  // Calculate the total value of the portfolio
  return portfolio.positions.reduce((total, position) => {
    return total + position.price * position.quantity;
  }, 0);
};

const formatChartDate = (date: string): string => {
  const formattedDate = new Date(date);
  return formattedDate.toLocaleDateString("en-GB");
};

export const calculateBalance = (assetId: number): number => {
  const portfolio = mockPortfolio();
  const position = portfolio.positions.some((pos) => pos.asset === assetId);
  // Sorting the prices by date and getting the latest price
  const latestPrice = prices
    .filter((price) => price.asset === assetId)
    .sort(
      (a, b) => new Date(b.asOf).getTime() - new Date(a.asOf).getTime()
    )[0];

  if (position && latestPrice) {
    const assetPosition = portfolio.positions.find(
      (pos) => pos.asset === assetId
    );
    return assetPosition ? assetPosition.quantity * latestPrice.price : 0;
  }

  return 0;
};

export const calculateBalanceByAssetClass = (assetClass: string): number => {
  // Sum the balances of all assets belonging to the specified asset class
  const assetsInClass = assets.filter((asset) => asset.class === assetClass);
  return assetsInClass.reduce(
    (total, asset) => total + calculateBalance(asset.id),
    0
  );
};