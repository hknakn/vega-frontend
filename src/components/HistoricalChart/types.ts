export type DateRanges = Record<string, Array<string>>;

export enum DateRange {
  Current = "current",
  LastMonth = "lastMonth",
  Last3Months = "last3Months",
  Last6Months = "last6Months",
  LastYear = "lastYear",
  Last3Years = "last3Years",
  Last5Years = "last5Years",
}

export type HistoricalPrice = {
  date: string;
  value: number;
};