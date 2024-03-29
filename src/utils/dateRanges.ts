import { DateRange } from "../components/HistoricalChart/types";

export const dateRanges: Record<string, Array<string>> = {
  [DateRange.Current]: [
    "2024-03-05T00:00:00.000Z",
    "2024-03-05T00:00:00.000Z",
  ],
  [DateRange.LastMonth]: [
    "2024-02-05T00:00:00.000Z",
    "2024-03-05T00:00:00.000Z",
  ],
  [DateRange.Last3Months]: [
    "2023-12-05T00:00:00.000Z",
    "2024-02-05T00:00:00.000Z",
    "2024-03-05T00:00:00.000Z",
  ],
  [DateRange.Last6Months]: [
    "2023-09-05T00:00:00.000Z",
    "2023-12-05T00:00:00.000Z",
    "2024-02-05T00:00:00.000Z",
    "2024-03-05T00:00:00.000Z",
  ],
  [DateRange.LastYear]: [
    "2023-03-05T00:00:00.000Z",
    "2023-09-05T00:00:00.000Z",
    "2023-12-05T00:00:00.000Z",
    "2024-02-05T00:00:00.000Z",
    "2024-03-05T00:00:00.000Z",
  ],
  [DateRange.Last3Years]: [
    "2021-03-05T00:00:00.000Z",
    "2023-03-05T00:00:00.000Z",
    "2023-09-05T00:00:00.000Z",
    "2023-12-05T00:00:00.000Z",
    "2024-02-05T00:00:00.000Z",
    "2024-03-05T00:00:00.000Z",
  ],
  [DateRange.Last5Years]: [
    "2019-03-05T00:00:00.000Z",
    "2021-03-05T00:00:00.000Z",
    "2023-03-05T00:00:00.000Z",
    "2023-09-05T00:00:00.000Z",
    "2023-12-05T00:00:00.000Z",
    "2024-02-05T00:00:00.000Z",
    "2024-03-05T00:00:00.000Z",
  ],
};