import React, { useEffect } from "react";
import { AppDispatch } from "../../store/store";
import { useDispatch } from "react-redux";
import { fetchAssets } from "../../features/assets/assetsApi";
import { fetchPrices } from "../../features/prices/pricesApi";
import { fetchPortfolio } from "../../features/portfolios/portfoliosApi";
import DonutChart from "../../components/DonutChart";
import HistoricalChart from "../../components/HistoricalChart";
import {
  fetchAssetsSuccess,
  fetchPortfoliosSuccess,
  fetchPricesSuccess,
} from "../../features";
import { mockAssets, mockPortfolios, mockPrices } from "../../mockData";

export const Portfolio = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      // Fetch initial data when the component mounts
      try {
        await dispatch(fetchAssetsSuccess(mockAssets));
        await dispatch(fetchPricesSuccess(mockPrices));
        await dispatch(fetchPortfoliosSuccess(mockPortfolios));
      } catch (error) {
        // Handle any errors here
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div>
      <h1>Financial Portfolio App</h1>
      <DonutChart />
      <HistoricalChart />
    </div>
  );
};
