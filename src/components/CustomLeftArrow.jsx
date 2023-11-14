import React from "react";
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";

const CustomLeftArrow = ({ onClick, isActive }) => {
  return (
    <button
      onClick={() => onClick()}
      className={`absolute top-1/2 left-1 z-10 p-6 rounded-full transition-colors duration-300 focus:outline-none focus:ring focus:border-bgPrimary 
      ${
        isActive ? "bg-bgPrimary text-white" : "bg-bgWhite border border-bgGray"
      }`}
    >
      <ArrowLongLeftIcon
        className={`h-6 w-6 ${isActive ? "text-textWhite" : "text-slate-900"}`}
      />
    </button>
  );
};

export default CustomLeftArrow;
