import React from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

const CustomRightArrow = ({ onClick }) => {
  return (
    <button
      onClick={() => onClick()}
      className="group absolute top-1/2 right-1 z-10 p-6 rounded-full transition-colors duration-300 focus:outline-none focus:border-none focus:ring focus:border-bgPrimary 
      bg-bgWhite border border-bgGray focus:bg-bgPrimary"
    >
      <ArrowLongRightIcon className="h-6 w-6 text-slate-900 group-focus:text-textWhite" />
    </button>
  );
};

export default CustomRightArrow;
