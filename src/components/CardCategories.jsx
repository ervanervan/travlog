import React from "react";

export default function ({ id, title, desc, imgUrl }) {
  const cardClasses =
    id === 2
      ? "w-80 p-8 lg:p-16 flex flex-col justify-center text-center items-center border border-bgLight rounded-3xl shadow-xl"
      : "w-80 p-8 lg:p-16 flex flex-col justify-center text-center items-center border border-bgLight rounded-3xl";

  return (
    <div className={cardClasses}>
      <img src={imgUrl} alt="" />
      <h2 className="py-8 font-bold text-2xl md:text-[1.75rem] text-textBlack md:w-11/12">
        {title}
      </h2>
      <p className="text-textGray text-lg text-center md:w-10/12">{desc}</p>
    </div>
  );
}
