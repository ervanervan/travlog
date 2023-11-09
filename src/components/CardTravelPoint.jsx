import React from "react";

export default function CardTravelPoint({ category, total }) {
  return (
    <div className="w-80 lg:w-52 p-8 bg-white border border-bgGray rounded-3xl">
      <div className="flex flex-col gap-4 items-center justify-center">
        <h2 className="text-textOrange font-bold text-4xl">{total}</h2>
        <p className="text-textBlack text-lg">{category}</p>
      </div>
    </div>
  );
}
