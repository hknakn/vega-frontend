import React from "react";
import { TimeRangeButtonProps } from "./types";

export const TimeRangeButton = ({
  range,
  text,
  selected,
  onClick,
}: TimeRangeButtonProps) => {
  const buttonClasses = `text-white my-1 mx-1 py-2 px-4 rounded-xl transition ease-in-out duration-500 ${
    selected === range ? "bg-blue-700" : "hover:bg-blue-700"
  }`;

  return (
    <button className={buttonClasses} onClick={() => onClick(range)}>
      {text}
    </button>
  );
};
