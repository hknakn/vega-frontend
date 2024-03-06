import React from "react";
import { ShowByAssetClassButtonProps } from "./types";

export const ShowByAssetClassButton = ({
  selected,
  onClick,
}: ShowByAssetClassButtonProps) => {
  const buttonClasses = `cursor-pointer text-white py-2 px-4 rounded-xl ${
    selected ? "bg-blue-700" : "bg-neutral-900"
  }`;

  return (
    <div className={buttonClasses} onClick={onClick}>
      {!selected ? "Show by Asset Class" : "Show by Assets Allocation"}
    </div>
  );
};
